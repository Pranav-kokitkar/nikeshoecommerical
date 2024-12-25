window.addEventListener('load', function() {
    setTimeout(function() {
    window.scrollTo(0, 0); 
    }, 50);
});

function page1(){
    document.body.style.overflow = 'hidden';
    
    let tl = gsap.timeline({
        onComplete: function() {
            // Re-enable scrolling when animation is done
            document.body.style.overflow = 'auto';
        }
    });

    tl.from(".circle",{
        scale:-10,
        opacity:0,
        duration:2,
    })
    
    tl.from(".shoe1 img",{
        rotate:360,
        duration: 2,
        opacity: 0,
        ease: "power2.inOut",
    })

    tl.from(".navbar",{
        y:-100,
    })
    
    tl.from(".sname",{
        x:100,
        opacity: 0,
    })
    tl.from(".sdescription",{
        x:-100,
        opacity: 0,
    })
    tl.to("#cursor img",{
        opacity: 1,
    })
}
page1();

let cursor = document.querySelector('#cursor');
let main = document.querySelector('#main');


main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x: dets.clientX-40, // Use `clientX` for viewport-relative coordinates
        y: dets.clientY-105, // Use `clientY` for viewport-relative coordinates
    })
})

// gsap.to(".box h3", {
//     x: "-50%", // Animates the horizontal translation
//     scrollTrigger: {
//         trigger: ".box",
//         scroller: "body",
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 10,
//         pin: true,
//     },
// });


function page2(){
    let p2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2", // Element to trigger the animation
            scroller: "body", // The scroll container (default is body)
            start: "top center", // Start the animation when the top of `.page2` reaches the center of the viewport
            end: "bottom center", // End the animation when the bottom of `.page2` reaches the center of the viewport
            toggleActions: "play none none none", // Play animation on entering `.page2`
        },
    });
    
    p2.from(".right-div ul li", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger:0.6,
    });
    
}

page2();
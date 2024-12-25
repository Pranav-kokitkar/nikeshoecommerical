let tl=gsap.timeline()

tl.from(".navbar",{
    y:-100,
})

tl.from(".shoe1 img",{
    rotate:360,
    duration: 2,
    opacity: 0,
    ease: "power2.inOut",
})
tl.from(".sname",{
    x:100,
    opacity: 0,
})
tl.from(".sdescription",{
    x:-100,
    opacity: 0,
})


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

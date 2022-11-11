let tl = gsap.timeline({ paused: true });

tl.to(".square",{ duration: 1, x: "10vw"})
tl.to(".square",{ duration: 1, y: "10vh"})


const square = document.querySelector('.square');
square.addEventListener("click",() => {
    tl.play();
})
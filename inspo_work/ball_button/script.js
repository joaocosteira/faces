const menu = document.querySelector('.menu');

tl = gsap.timeline({ paused : true });
tl.to(".menu",{ duration: 1, width: "400vw", height: "400vh"})
tl.to(".menu",{ duration: 0, top: 0, left: 0,translateX : "50%", translateY : "50%",width: "100vw", height: "100vh", borderRadius : 0, ease: Power2.linear})
tl.to(
    ".menu-content",
    {
        opacity: 1,
        marginBottom: 0,
        duration: 2,
        ease: Power2.easeInOut,
    }
);

const handleClick = () => {
    menu.dataset.status = menu.dataset.status === "closed" ? "opened" : "closed";
    if(menu.dataset.status === "opened"){
        tl.timeScale(1).play();
    }else{
        tl.timeScale(3.5).reverse();
    }
}
//menu.addEventListener("click", () => {
//     console.log("Clicked Me!!!")
//     tl.play();
// }) 
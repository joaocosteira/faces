const menu = document.querySelector('.ball');
const audio = document.querySelector('.audio');
const player = document.querySelector('audio'); 

let tl = gsap.timeline({paused : true});
tl.fromTo(".eye",{
    display: "block"
},{
    display: "none", 
    duration: 0.1
})
tl.fromTo(".ball",{
    position: "fixed",
    top: "90vh",
    left: "70vw",
    zIndex: 3
},{ duration : 1, width: "400vw", height: "400vw"});
tl.to(".ball",{
    duration: 0,
    width: "100vw", 
    height: "100vh",
    borderRadius : 0,
    x:"50%",
    y:"50%",
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 3
})
tl.fromTo(".menu-content",{

    display: "none",
    duration: 0,
    gap: 0,
    padding: 0
    },{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        duration: "100ms",
        padding: "2rem"
    });

tl.fromTo(".menu-item",{
        opacity: 0
    },{
        opacity: 1,
        duration: 1,
        stagger: 0.2,
    })

tl.fromTo(".x",{
        opacity: 0
    },{
        alignSelf: "flex-end",
        opacity: 1,
        duration: 1,
        stagger: 0.1,
    },"=<.1")    

const toggleMenu = () => {

    menu.dataset.status = menu.dataset.status === "closed" ? "opened" : "closed";
    
    if(menu.dataset.status === "opened"){
        tl.play().timeScale(1);
    }else{
        tl.timeScale(2);
        tl.reverse();
    }
}


const handleAudio = () => {
    audio.dataset.music = audio.dataset.music === "paused" ? "playing" : "paused";
    audio.dataset.music === "playing" ? player.play() : player.pause()
}

player.onended = () => { audio.dataset.music = "paused" }


//ver como mudar o source da img
const faces = document.querySelectorAll('.face')
let currentFace = 0;

setInterval(() => {
    faces[currentFace].dataset.imgstatus="inactive";
    currentFace = (currentFace + 1) % faces.length;
    faces[currentFace].dataset.imgstatus="active";
}, 100)


//audio player:

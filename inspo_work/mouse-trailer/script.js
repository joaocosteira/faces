const trailer = document.getElementById('trailer');


const animationTrailer = (e,intersecting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform : `translate(${x}px,${y}px) scale(${intersecting ? 8 : 1})`
    }

    trailer.animate(keyframes,{
        duration: 800,
        fill: "forwards" //para a animaçao nao fazer reset para a posicao original (top left)
    })

}

const getTrailerClass = type => {

    if(type === "video"){
        return "fa-solid fa-play";
    }else{
        return "fa-sharp fa-solid fa-house";
    }
}

window.onmousemove = e => {
    // const x = e.clientX,
    //       y = e.clientY;

    //para centrar a bola no rato
    // const x = e.clientX - trailer.offsetWidth / 2,
    //       y = e.clientY - trailer.offsetHeight / 2;

    // //trailer.style.transform = `translate(${x}px,${y}px)`;

    // //versao com a animação framework ou algo desse genero
    // const keyframes = {
    //     transform : `translate(${x}px,${y}px)`
    // }

    // trailer.animate(keyframes,{
    //     duration: 800,
    //     fill: "forwards" //para a animaçao nao fazer reset para a posicao original (top left)
    // })

    //movemos a animação para uma funcao

    //para ver se o nosso elem intersecta o elem interactable
    const interactable = e.target.closest(".interactable"),
          intersecting = interactable != null

    const icon = document.getElementById("trailer-icon");


    trailer.dataset.type = intersecting ? interactable.dataset.type : "";

    if(intersecting){
        icon.className = getTrailerClass(interactable.dataset.type);
    }
    animationTrailer(e,intersecting);
}
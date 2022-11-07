

/**
 * no from indicamos o estado de onde vimos
 */
//animate the red header droping down.
// gsap.from('.header',{
//     duration: 1,
//     y: '-100%',
//     ease: 'bounce'
// })


// //links dentro do header:
// gsap.from('.link',{
//     duration: 1,
//     opacity:0,
//     delay: 1, //indicar onde começa a animação.
//     stagger: .5 //delay entre cada um dos elems selecionados
// })


// gsap.from('.right',{
//     duration: 1,
//     x: "-100vw",
//     delay: 1,
//     ease: "power2.in"

// })


// gsap.from('.left',{
//     duration: 1,
//     delay: 1.5,
//     x: "-100vw",
// })


// /** strats from the css values and goes to where we say */
// gsap.to('.footer',{
//     duration: 1,
//     y: 0,
//     delay: 2.5,
//     ease: 'elastic'

// })


// gsap.fromTo(".button",{
//     opacity: 0,
//     scale: 0,
//     rotation: 720

// },{
//     duration: 1,
//     delay: 3.5,
//     opacity: 1,
//     scale: 1,
//     rotation: 0
// })


/*
    Coisa engraçada,
    o gsap tb pode processar objetos variaveis etc, por isso isto pode ser usado para fazer animações ainda mais hardcore
*/
const obj = { x : 0 }

gsap.to(obj,{
    duration: 2,
    x: 100,
    onUpdate: () => console.log(obj.x)
})



// Criar uma timeline, assim temos a coisa direitinha sem ter de estar a contar os delays e coisas desse genero

//para nao ter de andar a escrever duration 1 em todos os elems, podemos simplesmente adicionar ao defaults para nao andar a repetir.
const timeline = gsap.timeline({ defaults : { duration: 1 }});
timeline.from('.header',{
    y: '-100%',
    ease: 'bounce'
    })
    .from('.link',{
        opacity:0,
        //delay: 1, // A propria timeline já faz o stack das animações, logo nao temos de adicionar delay.
        stagger: .5 //delay entre cada um dos elems selecionados
    })
    .from('.right',{
        //duration: 1,
        x: "-100vw",
        //     delay: 1,
        ease: "power2.in"
        
    },1) //Absolute Delay of 1: is going to start after 1 second (when the red droping finishes)

    .from('.left',{
        //duration: 1,
        //delay: 1.5,
        x: "-100vw",
    },"<.5") // Relative Delay: is going to start half a second after the previous one
    .to('.footer',{
        //duration: 1,
        y: 0,
        //     delay: 2.5,
        ease: 'elastic'
        
    })
    .fromTo(".button",{
        opacity: 0,
        scale: 0,
        rotation: 720
        
    },{
        //duration: 1,
        //delay: 3.5,
        opacity: 1,
        scale: 1,
        rotation: 0
    })
        

const button = document.querySelector('.button');
button.addEventListener('click', () => {
    timeline.scale(3) // 3 times faster
    timeline.reverse()
})
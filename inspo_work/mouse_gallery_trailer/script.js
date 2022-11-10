const images = document.getElementsByClassName("image");

let globalIdx = 0,
    last = { x : 0, y : 0 };


const distanceFromLast = (x,y) => Math.hypot(x - last.x, y - last.y)



const activate = (image,x,y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.dataset.status = "active";

    last = { x , y }
}
window.onmousemove = e => {

    if(distanceFromLast(e.clientX,e.clientY) > 100){
        const lead = images[globalIdx % images.length];
        const tail = images[(globalIdx - 5)% images.length];
        activate(lead,e.clientX,e.clientY);
        if(tail){
            tail.dataset.status = "inactive";
        }
        globalIdx = (globalIdx + 1) 
    }

}
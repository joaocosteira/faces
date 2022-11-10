let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
    const nextIdx = (activeIndex + 1) % groups.length;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIdx}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";
    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIdx
    })

}
const handleHateClick = () => {
 
}
const wrapper = document.getElementById("wrapper");


const rand = (min,max) => Math.floor(Math.random() * (max - min + 1) + 1);


const uniqueRand = (min,max,prev) => {
    let next = prev;
    while(prev === next) next = rand(min,max)

    return next;
}

const combinations = [
    {configuration : 1, roundness : 1},
    {configuration : 1, roundness : 2},
    {configuration : 1, roundness : 4},
    {configuration : 2, roundness : 2},
    {configuration : 2, roundness : 3},
    {configuration : 3, roundness : 3},
]


let prev = 0;

setInterval(() => {
    // wrapper.dataset.configuration = rand(1,3);
    // wrapper.dataset.roundness = rand(1,4);

    const idx = uniqueRand(0,combinations.length - 1,prev);
    const combination = combinations[idx];

    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev = idx;

}, 1000);


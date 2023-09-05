const container_1 = document.querySelector(".deck-container");

//const h1 = document.querySelector(".steam-deck-h1");

const h1_1 = document.querySelector(".deck-container h1");
container_1.addEventListener("mouseover", e => {
    h1_1.classList.add("hover-deck-container");
});

container_1.addEventListener("mouseleave", e => {
    h1_1.classList.remove("hover-deck-container");
});

//

const h1_2 = document.querySelector(".gift-container h1");
const container_2 = document.querySelector(".gift-container");
container_2.addEventListener("mouseover", e => {
    h1_2.classList.add("hover-deck-container");
});

container_2.addEventListener("mouseleave", e => {
    h1_2.classList.remove("hover-deck-container");
});
// const body = document.body;
// // body.append("hello", "bye"); -> used to append strings
// const div = document.createElement("div");

// div.innerText = "Hello, world!";
// div.innerHTML = "<strong> Hello, world! </strong> "


// const h1 = document.querySelector('#featured-h1');
// h1.remove();
// body.append(h1);

// body.append(div);

const grid = document.querySelectorAll(".grid-info img")
const main_img = document.querySelector("#main-img");
const copy_img = main_img.src;

grid.forEach(image => {
    image.addEventListener("mouseover", e => {
        main_img.classList.remove(...main_img.classList);
        main_img.classList.add("hover-on");
        const src = e.target.src;
        main_img.src = src;
    });

    image.addEventListener("mouseleave", e => { 
        //setTimeout( () => { main_img.src = copy_img; }, 200);
        main_img.classList.remove(...main_img.classList);
        main_img.classList.add("hover-off");
       // main_img.src = copy_img;
    });
});
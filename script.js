const links = document.querySelectorAll("nav a");

console.log(links);
const polygon = document.querySelector(".polygon");
const hero = document.querySelector(".hero");
const positions = {
    ABOUT: { top: "245px", left: "10px" },
    PROJECTS: { top: "347px", left: "38px" },
    INTERESTS: { top: "410px", left: "40px" },
    HOME: { top: "295px", left: "10px" },
};
polygon.style.top = "245px";
polygon.style.left = "10px";
links.forEach((element) => {
    element.addEventListener("mouseenter", function() {
        const name = element.textContent.trim();
        const selection = positions[name];
        console.log(selection);
        const heroPosition = hero.getBoundingClientRect();
        console.log("Clicaram em mim!");
        const position = element.getBoundingClientRect();
        polygon.style.top = selection.top;
        polygon.style.left = selection.left;
        console.log(position.left);
        console.log(position.top);
        console.log(polygon.offsetLeft);
        console.log(polygon.offsetTop);
        polygon.style.opacity = "1.0";
    });
    element.addEventListener("mouseleave", function() {
        polygon.style.opacity = "1.0";
        polygon.style.left = "10px";
        polygon.style.top = "245px";
    });
}

)

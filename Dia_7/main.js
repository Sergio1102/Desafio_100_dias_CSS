const btnMenu = document.getElementById("menu-icon");
const panel = document.getElementById("panel");

btnMenu.addEventListener("click", () => {
    panel.classList.toggle("show-menu");
});

const btnSearch = document.querySelector(".fa-search");

btnSearch.addEventListener("click", () => {
    const input = document.getElementById("search-input");
    input.classList.toggle("active");
});
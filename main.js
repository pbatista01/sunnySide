const menuHamburguer = document.querySelector(".menu-hamburguer");
const menuList = document.querySelector(".menu-list");

menuHamburguer.addEventListener("click", toggleMenu);

function toggleMenu (){
    menuList.classList.toggle("closed");
}
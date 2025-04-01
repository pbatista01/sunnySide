
// Select the hamburger menu button
const menuHamburguer = document.querySelector(".menu-hamburguer");

// Select the menu list
const menuList = document.querySelector(".menu-list");

// Initially hide the menu by adding the "closed" class
menuList.classList.add("closed");

// Add a click event listener to the hamburger menu button
menuHamburguer.addEventListener("click", () => menuList.classList.toggle("closed"));

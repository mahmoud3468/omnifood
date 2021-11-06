const mainNav = document.querySelector(".main__nav");
const navBurger = document.querySelector(".nav__burger");

navBurger.addEventListener("click", () => {
  mainNav.classList.toggle("nav__open");
});

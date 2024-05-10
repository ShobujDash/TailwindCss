/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navManu = document.getElementById("nav-manu");
const closeIcon= document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav_link");
console.log(navLink)


hamburger.addEventListener("click", () => {
  navManu.classList.remove('hidden');
})

closeIcon.addEventListener("click", () => {
  navManu.classList.add("hidden");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
      navManu.classList.add("hidden")
  })
});
/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

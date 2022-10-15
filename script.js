"use strict";
window.addEventListener("DOMContentLoaded", start);
// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const nav = document.querySelector("nav");
/*BURGERMENU */
function start() {
  toggleMenu();
}

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");
  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = nav.classList.contains("shown");
  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
    console.log("luk");
    btn.textContent = "X";
  } else {
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
    btn.textContent = "☰";
    console.log("menu");
  }
}
/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);

/*ANIMATION*/
const buttons = document.querySelectorAll(".button_ani");

const propertiesZoom = {
  fill: "forwards",
  duration: 500,
  easing: "ease-in-out",
};
const keyframesZoom = [{ transform: "scale(1)" }, { transform: "scale(0.9)" }, { transform: "scale(1)" }];

buttons.forEach((button, i) => {
  button.addEventListener("mouseover", () => {
    buttonClicked(i);
  });
});

function buttonClicked(i) {
  console.log("Button clicked!");

  const zoom = buttons[i].animate(keyframesZoom, propertiesZoom);
  zoom.play();
}

/*progress scrool bar*/
window.onscroll = function () {
  scrollBar();
};

function scrollBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Variablen
// Funktionsdefinition
// Funktionsaufrufe
// const / let
// <> sind Platzhalter für die Sachen die da drin stehen
const hamburgerMenu = document.getElementById("openMenuIcons");
const xMenu = document.getElementById("closeMenuIcons");

const navLinks = document.getElementById("navLinks");

// Variable, um zu überprüfen, ob die Navigation geöffnet ist
let isMenuOpen = false;

// Verschiedene Arten, Funktionen in JS zu schreiben
// Schlüsselwort Funktion Name (<Parameter>)
function func1() {}
const func2 = () => {};

function addTwoNumbers(x, y) {
  return x + y;
}

function noReturn() {
  console.log("hello");
}

function handleMenuClick() {
  // isMenuOpen = true
  // !isMenuOpen = false
  isMenuOpen = !isMenuOpen;
  console.log("isMenuOpen", isMenuOpen);

  // Bedingung: Wenn etwas, dann mache etwas
  if (isMenuOpen === true) {
    // Funktionsaufruf mit "()"
    handleOpenMenuClick();
  } else {
    handleCloseMenuClick();
  }
}

function handleOpenMenuClick() {
  hamburgerMenu.setAttribute("style", "display: none;");
  xMenu.setAttribute("style", "display: flex;");
  navLinks.setAttribute("style", "display: flex;");
}

function handleCloseMenuClick() {
  hamburgerMenu.setAttribute("style", "display: flex;");
  xMenu.setAttribute("style", "display: none;");
  navLinks.setAttribute("style", "display: none;");
}

function handleMouseOver() {
  alert("mouse over hamburger menu");
}

// Auf Ereignisse hören, um Dinge zu tun
// Objekt, auf das ich hören möchte . addEventListener(<Ereignis>, <Funktion, die aufgerufen werden soll>)
hamburgerMenu.addEventListener("click", handleMenuClick);
xMenu.addEventListener("click", handleMenuClick);
// <variable aus dem HTML>.addEventListener("<worauf soll geachtet werden?(click, mouse enter etc...)>", "<Name meiner Funktion die ausgeführt werden soll>")

// 1. (2p) Skriv klart funktionen addBgColor.
// addBgColor tar in ett DOM-element och en färg-kod,
// addBgColor ska uppdatera elementets style med färgkoden.
// tips: använd elementets style
const element = document.querySelector("#my-element");

function addBgColor(element, bgColor) {
  // lägg till din kod här
  element.style.backgroundColor = bgColor;
}

addBgColor(element, "red"); // Ska göra elementet rött

// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop
const container2 = document.querySelector(".container");
const btnContainer = document.querySelector("#btnContainer");
function buttonMaker() {
  for (let i = 1; i <= 10; i++) {
    const newBtn = document.createElement("button");
    newBtn.setAttribute("class", "primary");
    newBtn.textContent = `Button${i}`;
    container2.appendChild(newBtn, btnContainer);

    newBtn.addEventListener("click", (e) => {
      const element = e.target;
      if (element.className === "primary") {
        element.className = "secondary";
      } else element.className = "primary";
    });
  }
}
buttonMaker();

// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"

// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.
const container = document.querySelector("#my-element");
const boxC = document.querySelector("#C");
const newDiv = document.createElement("div");
newDiv.textContent = "B";
newDiv.style.color = "white";
container.insertBefore(newDiv, boxC);

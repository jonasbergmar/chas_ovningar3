// 2. (3p) Skapa ett inputfält och en knapp på html-sidan. När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför input-fältet i en div.
const getInput = document.querySelector("#myInput");
const submitBtn = document.querySelector("#myBtn");
const getInputText = document.querySelector("#inputText");

submitBtn.addEventListener("click", (e) => {
  const textResult = getInput.value;
  getInputText.textContent = textResult;
});

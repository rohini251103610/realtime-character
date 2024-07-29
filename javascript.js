const textarea = document.getElementById("t");
const totalCounter = document.getElementById("total");
const remainingCounter = document.getElementById("remaining");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounter.innerText = textarea.value.length;
  remainingCounter.innerText =
    textarea.getAttribute("maxLength") - textarea.value.length;
}
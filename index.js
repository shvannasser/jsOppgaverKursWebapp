// Oppgave 1

const removeTekstBtn = document.getElementById("remove-btn");
const removePText = document.getElementById("remove");

removeTekstBtn.addEventListener("click", () => {
  removePText.remove();
  console.log("button clicked!");
});

// Oppgave 2

const changePText = document.getElementById("change");
const changePTextBtn = document.getElementById("change-btn");

changePTextBtn.addEventListener("click", () => {
  changePText.textContent = "This is the new text!";
  console.log("Btn clicked");
});

// Oppgave 3

const inputBoks = document.getElementById("input");
const inputTekst = document.getElementById("input-text");

inputBoks.addEventListener("input", (event) => {
  inputTekst.textContent = event.target.value;
});

// Oppgave 4
const myList = ["item one", "item two", "item three"];
const addListBtn = document.getElementById("write-list");

const ul = document.getElementById("list");
addListBtn.addEventListener("click", () => {
  myList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
});

// Oppgave 5
// Oppgave 6

// Oppgave 7
// Oppgave 8

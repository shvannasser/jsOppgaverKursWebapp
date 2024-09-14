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
const ul = document.getElementById("ul");

addListBtn.addEventListener("click", () => {
  myList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
});

// Oppgave 5

// Step 1: Få referanse til elementene som skal benyttes
const selectElement = document.getElementById("select");
const inputElement = document.getElementById("text");
const createButton = document.getElementById("create");
const placeholderDiv = document.getElementById("placeholder");

// Step 2: Sett opp en event listener til knappen.
createButton.addEventListener("click", () => {
  // Step 3: Skaff verdien fra <select> elementet
  const chosenElement = selectElement.value;

  // Step 4: Lag det nye elementet basert på verdien fra <select> elementet
  const newElement = document.createElement(chosenElement);

  // Step 5: Set det nye tekst innholdet til verdien fra <input> feltet
  newElement.textContent = inputElement.value;

  // Step 6: append det nye elementet til #placeholder div (parent) (container)
  placeholderDiv.appendChild(newElement);

  //   console.log(inputElement.value);
  //   console.log("button clicked");
});

// Oppgave 6

const ulList = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");

removeLiBtn.addEventListener("click", () => {
  // Fjerner siste element i "list" ul
  ulList.removeChild(ulList.lastElementChild);

  //   console.log("buttonClicked");
});

// Oppgave 7

const inputText = document.getElementById("name");
const submitBtn = document.getElementById("order");

inputText.addEventListener("input", () => {
  if (inputText.value.length >= 4) {
    submitBtn.disabled = true;
    submitBtn.style.borderColor = "red";
    console.log("Du kan maks skrive 4 tegn");
  } else {
    submitBtn.disabled = false;
    submitBtn.style.borderColor = "black";
  }
});

// Oppgave 8

const ulChildren = document.getElementsByClassName("children");
const changeColorBtn = document.getElementById("color");

changeColorBtn.addEventListener("click", () => {
  // Hent ut alle barna av ul med klasse .children. Gi oddetall-barna grønn border mens partall skal ha pink. Bruk knappen med id #color for å gjøre endringen.
});

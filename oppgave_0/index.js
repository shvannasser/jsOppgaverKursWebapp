// Oppgave 1
// Lag lytteren og funksjonen som gjør at du kan fjerne et element med id #remove. Bruk knappen med id #remove-btn

const removeTekstBtn = document.getElementById("remove-btn");
const removePText = document.getElementById("remove");

removeTekstBtn.addEventListener("click", () => {
  removePText.remove();
  console.log("button clicked!");
});

// Oppgave 2
//Bytt ut teksten i p med id #change med noe du selv velger. Bruk knappen med id #change-btn

const changePText = document.getElementById("change");
const changePTextBtn = document.getElementById("change-btn");

changePTextBtn.addEventListener("click", () => {
  changePText.textContent = "This is the new text!";
  console.log("Btn clicked");
});

// Oppgave 3
//Lag lytteren til input-boksen med id #input som gjør at du kan skrive ut teksten i inputboksen til en paragrafen med id #input-text

const inputBoks = document.getElementById("input");
const inputTekst = document.getElementById("input-text");

inputBoks.addEventListener("input", (event) => {
  inputTekst.textContent = event.target.value;
});

// Oppgave 4
// Lag lytteren og funksjonen som gjør at du går igjennom listen myList og skriver ut alle elementene i ul med id #ul. Bruk li elementer. Knappen med id #write-list kan brukes.

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
// Lag lytterene og funksjonene som gjør at du kan lage et et HTML element (gjerne fra en nedtrekkslist med id #select) og tekst fra inputboksen med id #text. Bruk knappen med id #create. Legg teksten til elementet med id #placeholder

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
// Lag lytteren til knappen med id #remove-li og funksjonen som gjør at du ved hvert klikk sletter et og et li element fra ul med id #list

const ulList = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li");

removeLiBtn.addEventListener("click", () => {
  // Fjerner siste element i "list" ul
  ulList.removeChild(ulList.lastElementChild);

  //   console.log("buttonClicked");
});

// Oppgave 7
// Lytt til tastaturklikk på inputboks med id #name. Lag funksjonen som sjekker om ordet er maksimum 4 bokstaver langt. Hvis du krysser 4 bokstaver gjør knappen med id #order disablet eller gi knappen en rød border

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
// Hent ut alle barna av ul med klasse .children. Gi oddetall-barna grønn border mens partall skal ha pink. Bruk knappen med id #color for å gjøre endringen.

const ulChildren = document.querySelectorAll("ul.children li");
const changeColorBtn = document.getElementById("color");

changeColorBtn.addEventListener("click", () => {
  // Hent ut alle barna av ul med klasse .children. Gi oddetall-barna grønn border mens partall skal ha pink. Bruk knappen med id #color for å gjøre endringen.
  console.log("button clicked");
  console.log(ulChildren.length);
  ulChildren.forEach((child, index) => {
    console.log(child);
    index += 1; // Starts the index count from 1
    console.log(index);
    if (index % 2 === 0) {
      child.style.border = "2px solid pink";
    } else {
      child.style.border = "2px solid green";
    }
  });
});

const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 },
];

const searchInputByName = document.getElementById("name");
const filterInputByAge = document.getElementById("age");
const filterButton = document.getElementById("filter");

const ulUsersList = document.getElementById("users");

// TODO: Hent HTML #id med getElementById
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere

const showUsers = () => {
  ulUsersList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `${user.name} (${user.age})`;
    ulUsersList.appendChild(li);
  });
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket

const handleSearch = () => {
  const searchName = searchInputByName.value;
  const searchAge = filterInputByAge.value;

  const searchResult = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      user.age.toString().includes(searchAge)
    );
  });
  ulUsersList.innerHTML = "";
  searchResult.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `${user.name} (${user.age})`;
    ulUsersList.appendChild(li);
  });
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const handleFilter = () => {
  const filterAge = parseInt(filterInputByAge.value);
  const filterResult = users.filter((user) => {
    return user.age >= filterAge;
  });
  ulUsersList.innerHTML = "";
  filterResult.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = `${user.name} (${user.age})`;
    ulUsersList.appendChild(li);
  });
};

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
searchInputByName.addEventListener("keyup", handleSearch);
// filterInputByAge.addEventListener("keyup", handleSearch); // Lytter dynamisk etter endring i inputfeltet for alder

// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener("click", handleFilter);

showUsers();

// import "./styles.css";

// Oppgaven er å finne det lengste ordet i en statisk tekst.

// I denne oppgaven får du øvd på:

// bruk av for-løkke (eller forEach)
// bruk av array
// bruk av conditionals (if / else)

// Statisk tekst som brukes til å søke i
const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  const words = text.split(" ");
  const wordArray = [];

  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  words.forEach((word) => {
    wordArray.push(word);
  });
  console.log(wordArray);

  // TODO: Velg første ord så du har noe å sammenlikne med
  let longest = wordArray[0];

  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  let count = 1;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longest.length) {
      longest = wordArray[i];
      console.log(`${count++}. longest word so far is: ${longest}`);
    }
  }
};

console.log(longestWord());

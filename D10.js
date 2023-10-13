/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sumnum = () => {
  const sum = 10 + 20;
  return sum;
};
const result = sumnum();
console.log(result);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = function () {
  const num = Math.floor(Math.random() * 20);
  return num;
};
console.log(random());

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
// const Me1 = {};
// const me = { ...Me1, name: "Mirco", surname: "Orosio", age: "22" };
const me = {
  name: "Mirco",
  surname: "Orosio",
  age: "22"
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HMLS", "CSS", "JAVASCRIPT"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Flex");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  const num = Math.floor(Math.random() * 6 + 1);
  return num;
};
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (a, y) => {
  if (a < y) {
    return y;
  } else {
    return a;
  }
};
console.log(whoIsBigger(5, 8));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = () => {
  const code = "I love coding";
  const arrwow = code.split(" ");
  return arrwow;
};
console.log(splitMe());
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (str, boolean) => {
  if (boolean === true) {
    return str.substring(1);
  } else {
    return str.slice(0, -1);
  }
};
console.log(deleteOne("I love coding", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.*/

// Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"

const onlyLetters = function (str) {
  const space0 = [];
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (
      letter !== "0" &&
      letter !== "1" &&
      letter !== "2" &&
      letter !== "3" &&
      letter !== "4" &&
      letter !== "5" &&
      letter !== "6" &&
      letter !== "7" &&
      letter !== "8" &&
      letter !== "9"
    ) {
      space0.push(letter).join();
    }
  }
  console.log(space0);
};
console.log(onlyLetters("I have 4 dogs"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (str) => {
  const check =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // qui ho selezionato tutti i caratteri e la sintassi che una mail deve avere (ho guardato su internet)

  if (str.match(check)) {
    console.log("Valid email address!");

    return true;
  }
};
console.log(isThisAnEmail("mircoorosio@libero.it"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
  */
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const whatDayIsIt = function () {
  const now = new Date();
  const currentday = now.getDay() - 1;
  const currentnumb = now.getDate();
  const currentdate = days[currentday];
  return currentnumb + currentdate;
};
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (n) {
  const value = [];

  for (let i = 0; i < n; i++) {
    value.push(dice());
  }
  console.log(value);

  const sum = value.reduce((acc, curr) => {
    console.log("acc", acc);
    console.log("valore corr", curr);
    return acc + curr;
  }, 0);
  console.log("sum:", sum);
};
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const first = `01/02/2006`;
const howManyDays = function (date) {
  const a = new Date(first);
  const b = new Date(date);

  const days = Math.floor(Math.abs((a - b) / (1000 * 60 * 60 * 24)));
  return days;
  // non sto usando la nomeclatura delle date italiana
};
console.log(howManyDays(`01/04/2006`) + "days");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function () {
  const birthday = `06/07/2001`;
  const actualdate = new Date();
  const day = actualdate.getDate();
  const month = actualdate.getMonth();
  const year = actualdate.getFullYear();
  const date = day + "/" + month + "/" + year;
  console.log(date);
  if (date === birthday) {
    return "tanti auguri a me";
  } else {
    return "mi tocca aspettare";
  }
};
console.log(isTodayMyBirthday());
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
// const deleteProp =
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = function () {
  const newfilm = [];
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i];
    const Film1 = parseInt(film.Year);
    newfilm.push(Film1);
  }
  console.log(newfilm);
  const max = Math.max(...newfilm);
  console.log(max);
};
newestMovie();
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  const arr = [];
  for (let i = 0; i < movies.length; i++) {
    const film1 = movies[i];
    const name = film1.Title;
    arr.push(name);
  }
  console.log(arr);
  const length = arr.length;
  console.log("il numero di film sono: ", length);
};
countMovies();

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function () {
  const yearfilm = [];
  for (let i = 0; i < movies.length; i++) {
    const film = movies[i].Year;

    yearfilm.push(film);
  }
  console.log(yearfilm);
};
onlyTheYears();
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
// */
// const onlyInLastMillennium = function{

// }
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = function () {
  const film = [];
  for (let i = 0; i < movies.length; i++) {
    const thriller = movies[i];
    const anni = parseInt(thriller.Year);
    film.push(anni);
  }
  console.log(film);

  const sommaanni = film.reduce((acc, curr) => {
    console.log("acc", acc);
    console.log("valore corr", curr);
    return acc + curr;
  }, 0);
  console.log("somma totale: ", sommaanni);
};
sumAllTheYears();

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (str) => {
  for (let i = 0; i < movies.length; i++) {
    const namefilm = movies[i];
    if (namefilm.Title === str) {
      console.log("trovato: ", namefilm);
    }
  }
};
searchByTitle("Avengers: Age of Ultron");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = function (str) {
  const match = [];
  const unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    const cinema = movies[i];
    const title = cinema.Title;
    const stringa = title.includes(str);
    if (stringa) {
      match.push(cinema);
    } else {
      unmatch.push(cinema);
    }
    console.log("match: ", match);
    console.log("unmatch: ", unmatch);
  }
};
searchAndDivide("Avengers");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function (x) {
  const film = movies[x];
  // console.log(film);
  // const newarr1 = movies.slice(x, 1);
  // console.log(newarr1);
  const arr1 = movies.filter((x) => delete film);
  console.log(arr1);
};
removeIndex(1);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const box = () => {
  const domid = document.querySelector("#container");
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const Box2 = () => {
  const alltd = document.getElementsByTagNameNS("td");
};
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const table = function () {
  for (let i = 0; i < n; i++) {
    alltd.innerText = "ciao";
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const link = function () {
  const allA = document.getElementsByTagNameNS("a");
  const allhref = allA.getAttribute("href");
  for (let i = 0; i < n; i++) {
    allhref.style = "background-color: red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const thesamemaybe = function () {
  const listul = document.getElementById("#myList");
  const item = document.createElement("li");
  listul.appendChild(item);
};
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const svuotatutto = function () {
  const listnotidy = document.getElementById("#myList");
  listnotidy.value = "";
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const trTable = function () {
  const alltr = document.getElementsByTagName("tr");
  alltr.forEach((alltr) => {
    alltr.classList.add("mytr");
  });
};
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = function (num) {
  if (num === 1 || num === 2) {
    return true;
  }
  if (num <= 3) {
    return true;
  }
  // in questo modo sto dicendo che  qualsiasi numero il cui resto mi da 0 non sarà pri
  for (let i = 2; i < num; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
isItPrime(5);

/******************************************************************************

OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

const name = ("Andreas");   //string
console.log(name)

let age = 30;

console.log(`${name} er ${age}`)

const answerToTheUltimateQuestionOfLife = 42;   //Number
console.log(answerToTheUltimateQuestionOfLife)


let isTheLightOn = false;
console.log(isTheLightOn)

isTheLightOn = true;
console.log(isTheLightOn)


let myFavouriteCarBrands = ["Polestar", "Xpeng", "Ferrari"];  //Array
console.log(myFavouriteCarBrands[0])



// HEIHEIHEIHEIHEIHEIHEI



/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her


let _10 = 11;
let _11 = 12;

console.log(_10 + _11)

_10 += 5;
console.log(_10)


let fem = 5;
let ti = 10;

console.log(fem + ti * fem * fem)

let count = 3;
count ++;

console.log(count)

let countTwo = 6;
countTwo --;

console.log(countTwo)



/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "andreas";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

/*
_____________________________________________________________________
if (userName !== "") {
  console.log("Brukernavnet er fylt inn");
} else {
  console.log("Brukernavnet er tomt");
}

if (userAge >= 18) {
    console.log("Bruker er 18år eller eldre");
}  else {
    console.log("Bruker under 18år");
}

    if (userIsBlocked = false) {
        console.log("False")
    } else {
        console.log("true")
    }
_-_-_-_-_-_-_-_-__-_-_-_-_-_-_-_-__-_-_-_-_-_-_-_-_
*/

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/home";
  console.log(`Velkommen! ${userName}`);
} else {
  console.log("Innlogging feilet");
}



/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = true;

// Skriv koden for oppgave 5 her


let userTitle = userMale ? "Mr" : "Ms"
console.log(userTitle)
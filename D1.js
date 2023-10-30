/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Boolean
const isValid = true; // or false
/* I valori booleani sono solo due: VERO (true, 1) e FALSO(false, 0, null). Sono usati per indicare se una cosa è vera (o esiste) oppure è falsa (non esiste) */

// Number
const number = 4; // or 4.x...
/* Number è un tipo di dato che può salvare in se numeri con la virgola e numeri interi, sia positivi che negativi */

// String
const yourName = "randomName"; // or even "random name"
/* String è un tipo di dato che può salvare dati in forma di testo scritto */

// Null
let PersonObj = null;
/* Null è un tipo di dato che possiede un solo valore: null. Si usa quando si vuole volontariamente dire che quella variabile non contiene nulla,
o per verificare se una variabile "esiste". Inoltre solitamente indica l'assenza di un Object (oggetto) */

// Undefined
let surname; // Undefined value
/* Undefined è un tipo di dato che possiede solo un valore: undefined. Di solito indica l'assenza di un valore in una variabile
e JavaScript la usa spesso come risposta default quando non trova il valore di qualcosa */

// Symbol
const uniqueSym = Symbol("SonoUnico");
/* Symbol è un tipo di dato UNICO e IMMUTABILE e può essere usato come chiave di una proprietà di un Object (Object) */

// BigInt
const bigNumber = 9873854324382n;
/* BigInt è un tipo di dato che serve a rappresentare numeri interi molto grandi in modo sicuro senza perdita di dati */

console.log(
  "Value Boolean: " +
    isValid +
    ", type of: " +
    typeof isValid +
    ";\n" +
    "Value Number: " +
    number +
    ", type of: " +
    typeof number +
    ";\n" +
    "Value String: " +
    yourName +
    ", type of: " +
    typeof yourName +
    ";\n" +
    "Value Null: " +
    PersonObj +
    ", type of: " +
    typeof PersonObj +
    ";\n" +
    "Value Undefined: " +
    surname +
    ", type of: " +
    typeof surname +
    ";\n" +
    "Value BigInt: " +
    bigNumber +
    ", type of: " +
    typeof bigNumber +
    ";\n" +
    "Value Symbol: ",
  uniqueSym
);
console.log(
  "Nota Bene: uniqueSym è Symbol e NON può essere convertito in String, quindi non posso concatenare il suo typeof e sono costretto a metterlo qui:",
  typeof uniqueSym
);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Gaetano";

console.log('ES2. La variabile "name" contiene il valore: ' + name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 12;
const b = 20;
const somma = a + b;

console.log('ES3. La variabile "somma" contiene il valore: ' + somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12;

console.log('ES4. La variabile "x" contiene il valore: ' + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Montalto";
const ETA = 28;
//ETA = 10; // TypeError

console.log(
  'ES5. La variabile "ETA" dà un "TypeError: Assignment to constant variable."'
);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const sottrazione = x - 4;

console.log(
  'ES6. La variabile "sottrazione" contiene il valore: ' + sottrazione
);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john";
const name2 = "John";

const areEqual1 = name1 !== name2;
console.log("ES7. name1 !== name2: ", areEqual1);

const areEqual2 = name1 !== name2.toLowerCase();
console.log("ES7. name1 !== name2: ", areEqual2);

console.log(
  'ES7. Le variabili "name1" e "name2" danno "' +
    areEqual1 +
    '" se comparate con "!==" (quindi sono diverse tra loro),\nmentre danno "' +
    areEqual2 +
    '" (quindi uguali tra loro), se "name2" diventa "lowercase".'
);

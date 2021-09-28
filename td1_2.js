console.log("Exercice 2.1");

let x = ['blabla',
    "blabla",
    `blabla {$x}`,
    9,
    2.5,
    true,
    undefined,
    null,
    [1, 2, 3],
    new Array(),
    {},
    { "promo": "lpwmce", "nb": 25 },
    new Date(),
    //function() {alert('toto') };
    42n];

function variable() {
    console.log(typeof x);
}
variable();

/**Lorsque qu'on met la déclaration (avec un let) à la fin de la fonction,
 * la variable est inconnue. Lorsqu'elle est remplacée par un var, elle est "indéfinie", or on souhaite 
 * que la console nous renvoie une erreur.
 */

/**
 * 2.2 Déclaration
*/

//var x = 'blabla;'

/**
 * 2.3 Conversions de type
*/
console.log("Exo 2.3");
let nb = 15;
let nbfloat = 22.6;
let texte = '15';
console.log(nb.toString());
console.log(parseInt(nbfloat));
console.log(parseFloat(nbfloat));
console.log(Math.floor(nbfloat));
console.log(Math.ceil(nbfloat));
console.log(Math.round(nbfloat));

/**
 * 2.4 Tests d'égalité
*/
console.log("Exo 2.4");
let b = false;
let n = 0;
let s = '0';
let tab = [];
let o = {};

console.log(n == s);
console.log(n === s);
console.log(b == s);
console.log(b === s);
console.log(tab == s);
console.log(tab === s);
console.log(o == s);
console.log(o === s);
console.log(n == s);
console.log(n === s);
console.log(b == n);
console.log(b === n);





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

/**
 * 3. Les chaînes 
 */


console.log("Exo 3");
//3.1
/*function est_maj() {
    let text;
    do {
        text = window.prompt("Veuillez saisir une chaine en majuscule");
    } while (text !== text.toUpperCase());

    if (text === text.toUpperCase()) {
        window.alert("Votre chaine est bien en majuscule !");
    }
}

est_maj();
*/
//3.2
console.log("Exo 3.2");
/*
function rand_maj() {
    for (rand = 0; rand < 5; rand++) {
        let rand = String.fromCharCode(65 + Math.random() * (123 - 65));
        let randmaj = rand.toUpperCase();
        console.log(randmaj);
    }
    do {
        text = window.prompt("Veuillez saisir une chaine en majuscule");
        text = rand_maj;
    }
    while (text !== text.toUpperCase());

    if (text === text.toUpperCase()) {
        window.alert("Votre chaine est bien en majuscule !");
    }
}*/

//3.3, ne génère qu'un caractère et pas une chaîne

/*function tab_voyelle() {
    let tabvoy = ['a', 'e', 'i', 'o', 'u'];
    let randomvoy;
    for (let i = 0; i < 5; i++) {
        randomvoy = tabvoy[Math.floor(Math.random() * tabvoy.length)];

        return randomvoy;
    }
}

console.log(tab_voyelle());
*/

//3.4, manque avec les prénoms composés
/*function NomPrenom() {
    let nom;
    let prenom;

    nom = window.prompt("Veuillez saisir un nom");
    prenom = window.prompt("Veuillez saisir un prénom");
    console.log(nom.toUpperCase().concat(' ', prenom.charAt(0).toUpperCase() + prenom.slice(1)));

}
NomPrenom();
*/

//3.5
/*
let texterep;
function replace() {
    texte = window.prompt("Veuillez saisir votre texte");
    texterep = texte.replace('a', '4').replaceAll('A', '4').replace('e', '3').replace('E', '3').replace('g', '6').replace('i', '1').replace('o', '0').replace('s', '5').replace('z', '2').replace('G', '6').replace('I', '1').replace('O', '0').replace('S', '5').replace('Z', '2');
    console.log(texterep);
}
replace();*/

//3.6 Marche
/*
let listerep;
function jazz() {
    let nb;
    nb = window.prompt("Veuillez saisir votre une valeur maximale : ");
    for (let i = 0; i <= nb; i++) {
        mod3 = i % 3 === 0;
        mod5 = i % 5 === 0;
        if (mod3 && mod5) {
            console.log("Jazz Bundle");
        } else if (mod3) {
            console.log("Jazz");
        } else if (mod5) {
            console.log("Bundle");
        } else if (!mod3 && !mod5) {
            console.log(i);
        }
    }
}
jazz();
*/

console.log("Partie 4");

// exo 4.1
console.log("Exo 4.1")
// Prog Algorithmique

const tabnum = [1, 2, 3, 4];
let somme = 0;
for (let i = 0; i < tabnum.length; i++) {
    somme += tabnum[i];
}
console.log("La somme des entiers est de : " + somme);

// Prog Fonctionnelle
let tabnum1 = [1, 3, 2, 4];

function sumprog() {
    let tabnum2 = tabnum(elt => tabnum1 += somme);
    console.log("La somme des entiers est de : " + tabnum2);
}
sumprog();


// exo 4.2 compte juste
console.log("exo 4.2");
function pair() {
    let array = [1, 2, 3, 4, 5, 6];
    let nb = 0;
    newFunction();

    function newFunction() {
        for (i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                nb++;
            }
            console.log(nb + " entiers pairs présents dans le tableau");
        }
    }
}
pair();

//exo 4.3 
// Prog Algorithmique
console.log("Exo 4.3 tri + fusion")
function fusionTabEtTri() {
    let tab1 = [1, 3, 5];
    let tab2 = [2, 4, 6];
    let res = [];

    for (i = 0; i < tab1.length; i++) {
        if (tab1[i] < tab2[i]) {
            res.push(tab1[i], tab2[i]);
        } else {
            res.push(tab2[i], tab1[i]);
        }
    }

    console.log(res);
}

fusionTabEtTri();
// Prog Fonctionnelle 

// exo 4.4 Dichotomie
console.log("Exo 4.4");
// Prog algorithmique
// Prog Fonctionnelle 

// exo 4.5

/*function rest(...valeurs) {
    for (i = 0; i < 100; i++) {
        console.log(Math.max(i % 2 === 0));
    }
    valeurs.sort(function (a, b) {
        return a - b;
    });

}
rest(1, 3, 500001, 499, 500, 2021, 2022, 1000, 1940);

pair();
*/
function rechDico() {
    let tableau = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let debut = 1;
    let fin = tableau.length;
    let milieu;
    let valeurCherchee = 60;

    do {
        milieu = Math.round((debut + fin) / 2);
        if (valeurCherchee == tableau[milieu]) {
            console.log(valeurCherchee + " se trouve en " + milieu + "ème position");
        } else if (tableau[milieu] < valeurCherchee) {
            Math.round(debut = milieu + 1);
        } else {
            fin = Math.round(milieu - 1);
        }
    } while ((valeurCherchee != tableau[milieu]) && debut <= fin);
}

rechDico();
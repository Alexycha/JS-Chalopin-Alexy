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
}
rand_maj();*/

//3.3
console.log("Exo 3.3");
/*
function tab_voyelle() {
    let tabvoy = ['a', 'e', 'i', 'o', 'u'];
    let randomvoy;
    for (let i = 0; i < 5; i++) {
        randomvoy = tabvoy[Math.floor(Math.random() * tabvoy.length)];

        return randomvoy;
    }
}

console.log(tab_voyelle());
*/

//3.4
console.log("Exo 3.4");
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
console.log("Exo 3.5");
/*
let texterep;
function replaceAll() {
    texte = window.prompt("Veuillez saisir votre texte");
    texterep = texte.replaceAll('a', '4').replaceAll('A', '4').
        replaceAll('e', '3').replaceAll('E', '3').
        replaceAll('g', '6').replaceAll('i', '1').
        replaceAll('o', '0').replaceAll('s', '5').
        replaceAll('z', '2').replaceAll('G', '6').
        replaceAll('I', '1').replaceAll('O', '0').
        replaceAll('S', '5').replaceAll('Z', '2');
    console.log(texterep);
}
replaceAll();
*/

//3.6 
console.log("Exo 3.6");
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

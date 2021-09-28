console.log("\nPartie 4");

// exo 4.1
console.log("\nExo 4.1 Algorithmique")

const tabnum = [1, 2, 3, 4];
let somme = 0;
for (let i = 0; i < tabnum.length; i++) {
    somme += tabnum[i];
}
console.log("la somme des entiers est de : " + somme);


// exo 4.2 
console.log("\nExo 4.2 Algorithmique : ")

let tabpair = [1, 2, 3, 4];
let nbpair = 0;
for (i = 0; i < tabpair.length; i++) {
    if (tabpair[i] % 2 == 0) {
        nbpair++;
    }
}
console.log(nbpair + " entiers pairs dans le tableau.");



//exo 4.3 
console.log("\nExo 4.3 Algorithmique")
function fusiontri() {
    let tab1 = [1, 5];
    let tab2 = [2, 3, 4];
    let res = [];

    if (tab1.length > tab2.length) {
        maxLength = tab1.length;
    }
    else {
        maxLength = tab2.length;
    }

    for (i = 0; i < maxLength; i++) {
        if (tab1[i] < tab2[i]) {
            if (tab1[i] == undefined) {
                res.push(tab2[i]);
            } else if (tab2[i] == undefined) {
                res.push(tab1[i]);
            } else {
                res.push(tab1[i], tab2[i]);
            }
        } else {
            if (tab1[i] == undefined) {
                res.push(tab2[i]);
            } else if (tab2[i] == undefined) {
                res.push(tab1[i]);
            } else {
                res.push(tab2[i], tab1[i]);
            }
        }
    }

    console.log(res);
}

fusionTabEtTri();

// exo 4.4 Dichotomie
console.log("\nExo 4.4 Algorothmique");

function Dico() {
    let tab = [1, 2, 3, 9, 27, 36];
    let beg = 1;
    let mid;
    let end = tab.length;
    let search = 36;
    do {
        mid = Math.round((beg + end) / 2);
        if (search == tab[mid]) {
            console.log(search + " se trouve en " + mid + "ème position");
        } else if (tab[mid] < search) {
            Math.round(beg = mid + 1);
        } else {
            end = Math.round(mid - 1);
        }
    } while ((search != tab[mid]) && beg <= end);
}
Dico();

// exo 4.5
console.log("\nexo 4.5 Algorithmique")
function restPar(...vals) {
    let pairs = [];
    let bigger;

    vals.sort(function (a, b) { return a - b; });

    for (i = 0; i < vals.length; i++) {
        if (vals[i] % 2 == 0) {
            pairs.push(vals[i]);
            bigger = Math.max(...pairs);
        }
    }
    console.log(bigger);
    return vals;
}
restPar(1, 8, 20, 41, 98, 62);

//exo 4.6
console.log("\nexo 4.6 Algorithmique")
function tabAssoc(texte) {
    let tab = texte.split(' ');
    let occ = [];
    for (i = 0; i < tab.length; i++) {
        occ[tab[i]] = (occ[tab[i]] || 0) + 1;
    }
    console.log(occ);
}
tabAssoc("Voici ma phrase");

//4.1
console.log("\nExo 4.1 Prog Fornctionnelle : ")
const tabsum = [1, 2];
let sum = 0;
tabsum.forEach(item => {
    sum += item;
});
console.log("La somme des entiers est de : " + sum);

//4.2
console.log("\nExo 4.2 prog Fonctionnelle : ")

const tabpairfonc = [1, 2];
let nbpairfonct = 0;
tabpairfonc.forEach(item => {
    if (item % 2 == 0) {
        nbpairfonct++;
    }
});
console.log(nbpairfonct + " entiers pairs dans le tableau.");

//4.5
console.log("\nexo 4.5 Prog Fonctionnelle")
function restFonct(...vals) {
    let pairs = [];
    let bigger;

    vals.sort(function (a, b) {
        return a - b;
    });
    vals.forEach(item => {
        if (item % 2 == 0) {
            pairs.push(item);
            bigger = Math.max(...pairs);
        }
    });
    console.log(bigger);
    return vals;
}
restFonct(1, 2, 9, 50, 2000, 82);

//4.6
console.log("\nexo 4.6 Prog Fonctionnelle");
let textefonct = "Voici ma phrase";
let tabfonct = textefonct.split(' ');
let occ = [];
tabfonct.forEach(item => {
    occ[item] = (occ[item] || 0) + 1;
})
console.log(occ);
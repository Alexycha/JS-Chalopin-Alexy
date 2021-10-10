import { getSum41, getNumberOfEven42, binarySearch44, getMaxEven45 } from "./fctExp.js";

let nb = 1;
let resultat;

function display() {
    resultat = document.getElementById('res').style.display = "none";
}
display();

function nbel() {
    nb = nb + 1
}

document.getElementById("add").addEventListener("click", function () {
    nbel()
    let elm = document.getElementById("elements")
    let lbl = document.createElement('label')
    let txtlbl = document.createTextNode("Element " + nb + " ")
    lbl.setAttribute("for", "Element")
    let texte = document.createElement('input')
    texte.setAttribute("type", "number");
    let br = document.createElement("br")
    elm.appendChild(lbl)
    lbl.appendChild(txtlbl)
    elm.appendChild(texte)
    elm.appendChild(br)
    texte.setAttribute("id", "el")
})

let nbval
let valeur
let val
document.getElementById("search").addEventListener("click", function () {
    let tab = []
    resultat = document.getElementById('res').style.display = "block";
    val = document.getElementById("elements").querySelectorAll("input");
    let search = document.getElementById("elsearch").querySelector("input");
    let input;
    for (let i = 0; i < val.length; i++) {
        input = val[i];
        if (input.value) {
            valeur = input.value
            nbval = parseInt(valeur)
            tab.push(nbval)
        }
    }
    let valsearch = search.value
    let nbvalsearch = parseInt(valsearch)

    document.getElementById('sum').innerHTML = "Somme des éléments : " + getSum41(tab)
    document.getElementById('pair').innerHTML = "Nombre de pairs : " + getNumberOfEven42(tab)
    document.getElementById('bigpair').innerHTML = "Plus grand élément pair : " + getMaxEven45(...tab)
    document.getElementById('dicho').innerHTML = "Position de l'élément dans la table : " + binarySearch44(tab, nbvalsearch)
})

document.getElementById("reset").addEventListener("click", function () {
    location.reload();
})


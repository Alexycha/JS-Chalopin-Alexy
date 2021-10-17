import { classeMorpion } from "../classeMorpion.js";
import { classeMorpionSimple } from "../classeMorpionSimple.js";

let morpion;
let nbCoups;
let joueur;
let symbole;
let scores = [0, 0];
let taille;
let modeJeu;
let zoneMessage;

const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', recommence);

function recommence() {
    zoneMessage = document.getElementById('messages');
    taille = Number.parseInt(document.getElementById('taille').value);
    modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';
    try {
        const table = document.getElementById('table_morpion');
        for (let l = table.rows.length - 1; l >= 0; l--) {
            table.deleteRow(l);
        }
       if (modeJeu == 'simple'){
            morpion = new classeMorpionSimple(taille);
            console.log('simple mode')
       }else if (modeJeu == 'complet'){
                morpion = new classeMorpion(taille);
                console.log('hardcore')
            }
          

        for (let i = 0; i < taille; i++) {
            const ligne = table.insertRow(i);
            for (let j = 0; j < taille; j++) {
                const id = '' + ((i + 1) * 10 + (j + 1));
                const cell = ligne.insertCell(j);
                cell.innerHTML = "<input type='button' class='case' id='" + id + "' />";
                cell.firstChild.addEventListener("click", () => clicBouton(cell.firstChild, i, j));
                document.getElementById(id).value = '';
            }
        }

        nbCoups = 0;
        joueur = 1;
        symbole = 'x';
        zoneMessage.innerHTML = 'Joueur 1, à toi !';
        document.getElementById('btn_reset').disabled = true;
    } catch (e) {
        console.log(e);
        zoneMessage.innerHTML = 'Taille invalide !';
    }
}

function clicBouton(uneCase, y, x) {
    if (morpion.setSymbole(symbole, y, x)) {
        uneCase.value = symbole;
        uneCase.classList.add('joueur' + joueur);
        nbCoups++;
    } else {
        clicBouton(symbole, y, x);
    }

    const victoire = morpion.aGagne(symbole, y, x);

    if (victoire) {

        zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
        desactiveEcouteurs();
        symbole === 'x' ? scores[0]++ : scores[1]++;
        zoneMessage.innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];

    } else if (morpion.matchNul(nbCoups)) {

        zoneMessage.innerHTML = 'Match nul !';
        desactiveEcouteurs();

    } else {

        if (symbole === 'x') {
            symbole = 'o';
            joueur = 2;
        } else {
            symbole = 'x';
            joueur = 1;
        }

        zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';

    }
}

function desactiveEcouteurs() {
    for (let i = 0; i < taille; i++) {
        for (let j = 0; j < taille; j++) {
            document.getElementById('' + ((i + 1) * 10 + (j + 1))).removeAttribute('onclick');
        }
    }
    document.getElementById('btn_reset').disabled = false;
}

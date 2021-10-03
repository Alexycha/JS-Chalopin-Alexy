//let j1 = window.prompt("Veuillez saisir le nom du premier joueur : ");
//let j2 = window.prompt("Veuillez saisir le nom du deuxième joueur : ");

//let d = Number(window.prompt("Veuillez saisir la taille du morpion : "));
//console.log(d)
let nb = 3,
    EMPTY = '',
    grilles = [],
    tour = 'X',
    score,
    dep;

document.getElementById('jeu').style.display = "none";

function jouer() {
    document.getElementById('jeu').style.display = "inline-block";
    document.getElementById('select').style.display = "none";
}

/*function val() {
    nb = document.getElementById("grille").value;
    nb = parseInt(nb);
    console.log(typeof nb);
    return nb;
}*/
function init() {
    let grille = document.createElement('table');
    for (let i = 0; i < nb; i++) {
        let ligne = document.createElement('tr');
        grille.appendChild(ligne);
        for (let j = 0; j < nb; j++) {
            let carre = document.createElement('td');
            carre.classList.add('col' + j, 'ligne' + i);
            if (i == j) {
                carre.classList.add('diag1');
            }
            if (j == nb - i - 1) {
                carre.classList.add('diag2');
            }
            carre.addEventListener('click', jeu);
            ligne.appendChild(carre);
            grilles.push(carre);
        }
    }
    document.getElementById('morpion').appendChild(grille);
    nouveauJeu();
}

function nouveauJeu() {
    score = {
        'O': 0,
        'X': 0
    };
    dep = 0;
    tour = 'X';
    grilles.forEach(function (carre) {
        carre.innerHTML = EMPTY;
    });
}

function gagne(selectio) {
    // Get all carre classes
    let memberOf = selectio.className.split(" ");
    for (let i = 0; i < memberOf.length; i++) {
        let testClass = '.' + memberOf[i];
        let items = contains('#morpion ' + testClass, tour);
        // gagnening condition: tour == d
        if (items.length == 3) {
            return true;
        }
    }
    return false;
}

function contains(selector, text) {
    let elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

function jeu() {
    if (this.innerHTML !== EMPTY) {
        return;
    }
    this.innerHTML = tour;
    dep = dep + 1
    score[tour] = score[tour] + this.identifiant;
    if (gagne(this)) {
        alert('Vainqueur : ' + tour);
        nouveauJeu();
    } else if (dep === nb * nb) {
        alert('Egalité !');
        nouveauJeu();
    } else {
        tour = tour === 'O' ? 'X' : 'O';
        document.getElementById('tour').textContent = 'Joueur ' + tour;
    }
}
function change() {
    location.reload();
}
init();

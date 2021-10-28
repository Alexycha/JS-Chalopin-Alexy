let select_reg = document.getElementById("reg");
let select_dep = document.getElementById("dep");
let select_com = document.getElementById("com");
let optionreg;

function callReg() {
    fetch('https://geo.api.gouv.fr/regions', {
        method: 'get'
    }).then(response => response.json()
    ).then(json => json.forEach(element => {
        optionreg = document.createElement("option");
        optionreg.innerText = element.nom;
        optionreg.value = element.code;
        select_reg.appendChild(optionreg);
    })).catch(err => console.log("Erreur : " + err));
}
callReg()

select_reg.addEventListener("change", callDep);
let reg;
function callDep() {
    reg = select_reg.value;
    fetch('https://geo.api.gouv.fr/regions/' + reg + '/departements', {
        method: 'get'
    }).then(response => response.json()
    ).then(json => json.forEach(element => {
        optiondep = document.createElement("option");
        optiondep.innerText = element.nom;
        optiondep.value = element.code;
        select_dep.appendChild(optiondep);
    })).catch(err => console.log("Erreur : " + err));
}
callDep();

select_dep.addEventListener("change", callCom);
let dep;
function callCom() {
    dep = select_dep.value;
    fetch('https://geo.api.gouv.fr/departements/' + dep + '/communes', {
        method: 'get'
    }).then(response => response.json()
    ).then(json => json.forEach(element => {
        optioncom = document.createElement("option");
        optioncom.innerText = element.nom;
        optioncom.value = element.code;
        select_com.appendChild(optioncom);
    })).catch(err => console.log("Erreur : " + err));
}
callCom();


select_com.addEventListener("change", displayPop);
function displayPop() {
    let allpop = [];
    dep = select_dep.value;
    let population = document.getElementById("population")
    fetch('https://geo.api.gouv.fr/departements/' + dep + '/communes', {
        method: 'get'
    }).then(response => response.json()
    ).then((response) => {
        let comselected;
        for (let i = 0; i < response.length; i++) {
            if (response[i].code == select_com.value) {
                comselected = response[i];
                population.innerHTML = "Population : " + comselected.population + " habitants";
            }
        }
        response.forEach(select_com => {
            if (displayByCp(comselected.codesPostaux, select_com.codesPostaux) !== -1) {
                let codePostal = displayByCp(comselected.codesPostaux, select_com.codesPostaux);
                let tableCP = document.getElementById("tablecity");
                let descri = tableCP.insertRow();
                let nom = descri.insertCell();
                let cp = descri.insertCell();
                let pop = descri.insertCell();

                nom.innerHTML = select_com.nom;
                cp.innerHTML = codePostal;
                pop.innerHTML = select_com.population;
                tableCP.appendChild(descri);

                allpop.push(select_com.population)
                let reducer = (previousValue, currentValue) => previousValue + currentValue;
                populationtot.innerHTML = " Population totale : " + allpop.reduce(reducer);
            }
        });

        localStorage.setItem('city', comselected.nom);
    }).catch(err => console.log("Erreur : " + err));
}
displayPop()

let btnmeteo = document.getElementById("seeWeather")
btnmeteo.addEventListener("click", seeweather);
function seeweather() {
    location.href = "TD5meteo.html";
}

function displayByCp(select, filtrer) {
    for (let i = 0; i < select.length; i++) {
        for (let j = 0; j < filtrer.length; j++) {
            if (select[i] == filtrer[j]) {
                return select[i];
            }
        }
    }
    return -1;
}






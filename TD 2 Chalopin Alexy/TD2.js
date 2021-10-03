const test = document.querySelector('body');

function ex1() {
    const titre = document.createElement('h2');
    titre.textContent = 'Article 0';
    test.appendChild(titre);
}
ex1();

function ex2() {
    const texte = document.createElement('p');
    texte.textContent = 'Il est interdit de me doubler sous peine de discalification.';
    test.appendChild(texte);
}
ex2();

function ex3() {
    const titreh2 = document.querySelectorAll('h2');
    const tab = [];
    let articles;

    titreh2.forEach(item => {
        item.innerHTML = item.innerHTML.toUpperCase();
        item.innerHTML.split('');
        tab.push(item.innerHTML);
    });
    console.log(tab);

}
ex3();


function ex4() {
    const titre = document.querySelector('h2');
    const arti = document.querySelector('p');

}
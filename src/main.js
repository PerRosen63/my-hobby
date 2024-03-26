import './scss/style.scss';

const main = document.getElementById('main');

const btns = document.querySelectorAll('nav ul li');

const startBtn = document.getElementById('startBtn');
const pepoBtn = document.getElementById('pepoBtn');
const maximaBtn = document.getElementById('maximaBtn');
const moschataBtn = document.getElementById('moschataBtn');

startBtn.addEventListener('click', printStart);
pepoBtn.addEventListener('click', printPepo);
maximaBtn.addEventListener('click', printMaxima);
moschataBtn.addEventListener('click', printMoschata);

function printStart() {
    main.innerHTML = '';
    const startContainer = document.createElement('div');
    startContainer.setAttribute('id', 'startContainer');
    main.appendChild(startContainer);
    const startTitle = document.createElement('h2');
    startTitle.innerText = 'Vad är pumpa?';
    startContainer.appendChild(startTitle);

    /* const startImg = document.createElement('img');
    startImg.setAttribute('src', 'src/images/20231001_153319.jpg');
    startContainer.appendChild(startImg); */
}
function printPepo() {
    console.log('pepo');
}
function printMaxima() {
    console.log('maxima');
}
function printMoschata() {
    console.log('moschata');
}


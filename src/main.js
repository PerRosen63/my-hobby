import './scss/style.scss';

const start = document.getElementById('start');
const pepo = document.getElementById('pepo');
const maxima = document.getElementById('maxima');
const moschata = document.getElementById('moschata');

start.addEventListener('click', printStart);
pepo.addEventListener('click', printPepo);
maxima.addEventListener('click', printMaxima);
moschata.addEventListener('click', printMoschata);

function printStart() {
    console.log('start');
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


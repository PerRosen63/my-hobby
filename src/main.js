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

document.querySelectorAll('nav ul li').forEach(li => {
    console.log(li);

    li.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        li.classList.add('active');
    });
});

main.innerHTML = '';
const startContainer = document.createElement('div');
startContainer.setAttribute('id', 'startContainer');
main.appendChild(startContainer);

const imgContainer = document.createElement('div');
imgContainer.setAttribute('id', 'imgContainer')
startContainer.appendChild(imgContainer);


const startTitle = document.createElement('h2');
startContainer.appendChild(startTitle);

const textDivStart = document.createElement('div');
    textDivStart.setAttribute('id', 'textDivStart');
    startContainer.appendChild(textDivStart);
    console.log(textDivStart);

function printStart() {

    startTitle.innerText = 'Vad är pumpa?';
    imgContainer.innerHTML = '';

    /* const textDivStart = document.createElement('div');
    textDivStart.setAttribute('id', 'textDivStart');
    startContainer.appendChild(textDivStart);
    console.log(textDivStart); */
    textDivStart.innerHTML = `<p>Pumpasläktet tillhör familjen gurkväxter. De vanligaste arterna som används i matlagning är Curcubita pepo, Curcubita maxima och Curcubita moschata</p><h3>Kärt barn har många namn.</h3><p>Squash. Butternut. Zucchini. Vintersquash. Jättepumpa. Halloweenpumpa. Vad är vad, egentligen? Det beror lite på vem du frågar? Det råder en viss begreppsförvirring. Allt är dock pumpa. Här reder vi ut det hela!</p><p>En zucchini och en halloweenpumpa tillhör faktiskt samma art, Curcubita pepo. Förutom form och storlek så är den kanske viktigaste skillnaden att halloweenpumpan har ett tjockare skal och därför lämpar sig bättre för lagring, därför kallas den ofta även för vintersquash. På våra breddgrader låter vi den mogna inomhus under senhöst/vinter. Sommarsquashen/zucchinin skördas istället omogen under sommaren. Därför kan man lika gärna använda sig av begreppen sommarpumpa och vinterpumpa. Det är alltså samma sak som sommarsquash och vintersquash.</p>`;

}

printStart();


function printPepo() {
    startTitle.innerText = 'Curcubita pepo';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/Rondini 2.jpg"><img width="150" height="150" src="src/images/Zucchini 500x500zugeschnitten.jpg"><img width="150" height="150" src="src/images/lilpumkemon.jpg">`
    textDivStart.innerHTML = `<p>Vestibulum fringilla pede sit amet augue. Etiam ut purus mattis mauris sodales aliquam. Duis leo. Nunc nec neque. Nam pretium turpis et arcu.</p>`;
}
function printMaxima() {
    startTitle.innerText = 'Curcubita maxima';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/Rondini 2.jpg"><img width="150" height="150" src="src/images/Zucchini 500x500zugeschnitten.jpg"><img width="150" height="150" src="src/images/lilpumkemon.jpg">`
    textDivStart.innerHTML = `<p>Vestibulum fringilla pede sit amet augue. Etiam ut purus mattis mauris sodales aliquam. Duis leo. Nunc nec neque. Nam pretium turpis et arcu.</p>`;
}
function printMoschata() {
    startTitle.innerText = 'Curcubita maxima';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/Rondini 2.jpg"><img width="150" height="150" src="src/images/Zucchini 500x500zugeschnitten.jpg"><img width="150" height="150" src="src/images/lilpumkemon.jpg">`
    textDivStart.innerHTML = `<p>Vestibulum fringilla pede sit amet augue. Etiam ut purus mattis mauris sodales aliquam. Duis leo. Nunc nec neque. Nam pretium turpis et arcu.</p>`;
}


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
    textDivStart.innerHTML = `<p>Bland Curcubita pepo hittar vi både sommar- och vintervarianter. Sommarpumpor är t ex de avlånga sorterna som vi skördar späda och ofta kallar för zucchini. Dessa finns i olika färger och former, t ex runda eller tefatsformade. Några av sommarvarianterna går att skörda som vintervarianter, dvs de får växa färdigt. En sådan sort är den lilla rondinipumpan som är utsökt ungsbakad, hel som halvmogen och som mogen på vintern i halvor, då med kärnorna avlägsnade eftersom de hunnit bli sega.</p><p>Exempel på andra sorter är spagettipumpan vars fruktkött trådar sig vid tillagning och äts som spagetti samt nakenfröpumpan som odlas för sina frön. Det är från dessa pumpor vi får de pumpafrön som går att köpa i butiker. Fröna saknar "skal" och är därför ätfärdiga.</p><p>Fler Curcubita pepo-sorter är de lite lyxigare Acorn med nötig smak eller minipumpan Jack be Little, endast 10 cm i diameter. Dess motsats i storlek,Halloween-pumpan, kanske inte platsar på denna sida eftersom den i första hand används för dekoration. Vissa sorter går att använda, men kanske i första hand till soppa eller i bakverk.</p>`;
}
function printMaxima() {
    startTitle.innerText = 'Curcubita maxima';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/112620.jpg"><img width="150" height="150" src="src/images/Solor.jpg"><img width="150" height="150" src="src/images/091780.jpg">`
    textDivStart.innerHTML = `<p>Vestibulum fringilla pede sit amet augue. Etiam ut purus mattis mauris sodales aliquam. Duis leo. Nunc nec neque. Nam pretium turpis et arcu.</p>`;
}
function printMoschata() {
    startTitle.innerText = 'Curcubita moschata';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/133340.jpg"><img width="150" height="150" src="src/images/Mieluna 500x500 2.jpg"><img width="150" height="150" src="src/images/Tromba d Albegna.jpg">`
    textDivStart.innerHTML = `<p>Vestibulum fringilla pede sit amet augue. Etiam ut purus mattis mauris sodales aliquam. Duis leo. Nunc nec neque. Nam pretium turpis et arcu.</p>`;
}


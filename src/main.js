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
    textDivStart.innerHTML = `<p>Pumpasläktet tillhör familjen gurkväxter. De vanligaste arterna som används i matlagning är Curcubita pepo, Curcubita maxima och Curcubita moschata</p><h3>Kärt barn har många namn.</h3><p>Squash. Butternut. Zucchini. Vintersquash. Jättepumpa. Halloweenpumpa. Vad är vad, egentligen? Det beror lite på vem du frågar? Det råder en viss begreppsförvirring. Allt är dock pumpa. Här reder vi ut det hela!</p><p>En zucchini och en halloweenpumpa tillhör faktiskt samma art, Curcubita pepo. Förutom form och storlek så är den kanske viktigaste skillnaden att halloweenpumpan har ett tjockare skal och lämpar sig bättre för lagring. Därför kallas ibland de pumpasorter som vi på våra breddgrader pga frostrisken låter eftermogna inomhus under senhöst/vinter för vintersquash. Sommarsquashen/zucchinin skördas istället omogen under sommaren och skulle därför även kunna kallas sommarpumpa. Squash och pumpa är alltså samma sak, fast det finns sommar- och vintervarianter. Den första skördas omogen på sommaren. Den andra färdigväxt på hösten för konsumtion på vintern. Ja, ibland kan de, om de lagras svalt, kunna hålla sig till långt in på våren eller t o m midsommar.</p>`;

}

printStart();


function printPepo() {
    startTitle.innerText = 'Curcubita pepo';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/Rondini 2.jpg"><img width="150" height="150" src="src/images/Zucchini 500x500zugeschnitten.jpg"><img width="150" height="150" src="src/images/lilpumkemon.jpg">`
    textDivStart.innerHTML = `<p>Bland Curcubita pepo hittar vi så gott som alla sommarvarianter och en spretig samling vintervarianter. De avlånga sorterna som vi skördar späda och ofta kallar för zucchini är en typ av sommarpumpa. Dessa finns i olika färger och former, t ex runda eller tefatsformade. Några av sommarvarianterna går även att skörda som vintervarianter, dvs de får växa färdigt. En sådan sort är den lilla rondinipumpan som är utsökt ungsbakad, hel som halvmogen eller som mogen på vintern i halvor, då med kärnorna avlägsnade eftersom de hunnit bli sega.</p><p>Exempel på andra sorter är spagettipumpan vars fruktkött trådar sig vid tillagning och äts som spagetti samt nakenfröpumpan som odlas för sina frön. Det är från dessa pumpor vi får de pumpafrön som går att köpa i butiker. Fröna saknar "skal" och är därför ätfärdiga.</p><p>Fler Curcubita pepo-sorter är de lite lyxigare Acorn med nötig smak eller minipumpan Jack be Little, endast 10 cm i diameter. Dess motsats i storlek, Halloween-pumpan, kanske inte platsar på denna sida eftersom den i första hand används för dekoration. Vissa sorter går att använda, men kanske i första hand till soppa eller i bakverk.</p>`;
}
function printMaxima() {
    startTitle.innerText = 'Curcubita maxima';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/112620.jpg"><img width="150" height="150" src="src/images/Solor.jpg"><img width="150" height="150" src="src/images/091780.jpg">`
    textDivStart.innerHTML = `<p>Bland arten C maxima kanske man med tanke på det latinska namnet i första hand förväntar sig jättepumpor. Det stämmer inte riktigt. Här finns pumpor i alla storlekar, från småttingar på ett halvkilo till bjässar på ett halvt ton. De sistnämnda duger i bästa fall till soppa, om man mäktar ta hand om allt vill säga.</p><p>Uchiki Kuri är en populär och lättodlad s k Hokkaidopumpa. Den har ett mörkorange fruktkött, vilket även stämmer in på de vackra Kabocha-sorterna. Banana Pink är en stor avlång och omtyckt matpumpa som inte sällan kan väga 15 kg. Vi hittar även den lustigt formade minipumpan Aladdins Turban bland C maxima.</p>`;
}
function printMoschata() {
    startTitle.innerText = 'Curcubita moschata';
    imgContainer.innerHTML = `<img width="150" height="150" src="src/images/133340.jpg"><img width="150" height="150" src="src/images/Mieluna 500x500 2.jpg"><img width="150" height="150" src="src/images/Tromba d Albegna.jpg">`
    textDivStart.innerHTML = `<p>Vestibulum fringilla pede sit amet augue. Etiam ut purus mattis mauris sodales aliquam. Duis leo. Nunc nec neque. Nam pretium turpis et arcu.</p>`;
}


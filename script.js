let variantuSkaits;
//let ciparuSkaits;
//let papildusVards;
const vardi1=['jautrs' , 'priecīgs', 'smieklīga','kautrīgs','gara']
const vardi2=['koks','akmens','lapsa','zilonis','žirafe']
const vardi3=['dejo','smejas','gaudo','lido','ēd']
let tabulasRindas= document.querySelector('.rindas');

function randFunc(maxCipars){
    let random1=Math.floor(math.random() * maxCipars);
    return random1;
}

function generet(){
    
    tabulasRindas.innerHTML =``;

for (let i = 0 ;i < variantuSkaits; i++) {
 console.log(parole);
    let parole=vardi1[0]+vardi2[0]+vardi3[0];
    let rand1 = randFunc(vardi1.length);
    let rand2 = randFunc(vardi2.length);
    let rand3 = randFunc(vardi3.length);

    let parole1 = vardi1[rand1];
    let parole2 = vardi2[rand2];
    let parole3 = vardi3[rand3];

    parole = parole1 + parole2+parole3;

    tabulasRindas.innerHTML +=`
    <tr>
    <td>${i+1}</td>
    >td>${parole}</td>
    </tr>`
}}

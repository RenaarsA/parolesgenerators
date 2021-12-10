let variantuSkaits=5;
//let ciparuSkaits;
//let papildusVards;
const vardi1=['jautrs' , 'priecīgs', 'smieklīga','kautrīgs','gara']
const vardi2=['koks','akmens','lapsa','zilonis','žirafe']
const vardi3=['dejo','smejas','gaudo','lido','ēd']
let rindas= document.querySelector('.rindas');

function randFunc(maxCipars){
    let random1=Math.floor(Math.random() * maxCipars);
    return random1;
}

function generet(){
    
    rindas.innerHTML =` `;

for (let i = 0 ;i < variantuSkaits; i++) {
 
    
    
    
    let rand1 = randFunc(vardi1.length);
    let rand2 = randFunc(vardi2.length);
    let rand3 = randFunc(vardi3.length);

  

let parole=vardi1[rand1]+vardi2[rand2]+vardi3[rand3];
console.log(parole);
    // parole = parole1+parole2+parole3;
   
    rindas.innerHTML +=`
    <tr>
    <td>${i+1}</td>
    <td>${parole}</td>
    </tr>`
}} 
// <button class="button" onclick="izlozet()">Ģenerēt</button>

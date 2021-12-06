let variantuSkaits=5;
const vardi1=['jautrs' , 'priecīgs', 'smieklīga','kautrīgs','gara']
const vardi2=['koks','akmens','lapsa','zilonis','žirafe']
const vardi3=['dejo','smejas','gaudo','lido','ēd']
let tabulasRindas= document.querySelector('.rindas');

function randFunc(MaxCipars){
    let random1=(Math.random());
    return random1;
}

for (let i = 0 ;i < variantuSkaits; i++) {
 let rand=randFunc(parole.length);
    let parole=vardi1[random1]+vardi2[random1]+vardi3[random1];
    console.log(parole);

    tabulasRindas.innerHTML +=`
    <tr>
    <td>${i+1}</td>
    >td>${parole}</td>
    </tr>`
}


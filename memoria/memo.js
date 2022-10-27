contenedor = document.querySelector(".contenedor");
comenzar = document.getElementById("comenzar");

let imga = ["🚑", "🚒", "🚨", "👩🏻‍🚒", "🧑🏿‍🚒", "🩺", "💉", "💊"];

comenzar.addEventListener("click", comenzarjuego);


let primeracarta = null;
let segundacarta = null;
let cartasrestantes = 8;


function comenzarjuego() {
    primeracarta = null;
    segundacarta = null;
    cartasrestantes = 8;
    creargrid();

}

function creargrid() {
    contenedor.innerHTML = "";
     mezclar = duplicar(imga);
     mezclar.sort(function() { return Math.random() - 0.5 });
    for (i = 0; i < mezclar.length; i++) {
        contenedor.innerHTML += `<div class="carta">${mezclar[i]}
        <div onclick="clickcarta(this, '${mezclar[i]}')" class="carta carta-rellenar"></div>
    </div>`;
    }
    console.log(mezclar)

}

function duplicar(imga) {
    let vector = [];
    for (i = 0; (i < imga.length * 2); i++) {
        if (i <= 7) {
            vector.push(imga[i])
        }
        if (i >= 8) {
            vector.push(imga[i - imga.length])
        } 
    }
   console.log(vector)
    return(vector)
}   
function clickcarta(elemento,ima){
    if (primeracarta== null){
        primeracarta=cualcarta(ima,elemento);
        primeracarta.carta.style.animationName="voltear";
    }else{
        if(primeracarta.carta==elemento){
            return;
        }
        if(segundacarta==null){
            segundacarta=cualcarta(ima,elemento);
            segundacarta.carta.style.animationName="voltear";
            if(primeracarta.ima==segundacarta.ima){
                console.log("Wiii");
                primeracarta.carta.onclick=null;
                segundacarta.carta.onclick=null;
                primeracarta=null;
                segundacarta=null;
                cartasrestantes--;
                if(cartasrestantes==0){
                    console.log("Ganates");
                }
            }
            else{
                setTimeout(ocultarcarta,1000);
            }
        }
    }
}
function cualcarta(ima, elemento){
    let carta = {ima: ima, carta: elemento};
    return carta;
}

function ocultarcarta(){
    primeracarta.carta.style.animationName="ocultar";
    segundacarta.carta.style.animationName="ocultar";
    primeracarta = null;
    segundacarta = null;
}


    
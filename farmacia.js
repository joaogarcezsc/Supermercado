function mais() {

var valor = document.getElementById("precoid"); 
 
var promocao = document.getElementById("spanid"); 

var newpromo = parseFloat(valor.value) * 2;

var arredondado = Math.floor(newpromo);

promocao.innerHTML = `<p> Promoção de R$ ${arredondado},00 <p> ` ;

}

function valor(){
    var valor = document.getElementById("valorporminuto");

    var tempo= document.getElementById("tempo");

    var modulo= parseFloat(tempo.value % 15);

    if(modulo == 0){

        total = (tempo.value / 15).valorporminuto
    }

}

function promocao(){

    var nome = document.getElementById("produto");

    var valor = document.getElementById("valores"); 

    var promocao3 = document.getElementById("spanid3");

    var valor3 = (valor.value) / 2;

    var total= ((valor.value) * 2) + valor3;

    promocao3.innerHTML = `<p> Promoção leve 3 unidades de ${nome.value} por R$ ${total} <p> ` ;
 
}
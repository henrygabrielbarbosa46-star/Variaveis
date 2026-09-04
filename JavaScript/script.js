document.getElementById("demo").innerHTML = "Elevadô"

let x,y,z;

x=5;
y=2;
z = x*y;

document.getElementById("resultado").innerHTML = z;

let a,b;

a=3;
b=(100+50)*a;

document.getElementById("resultado2").innerHTML =b;

function pegarValor(){
    let renan = document.getElementById("meuInput");

    let ValorDigitado = renan.value;

    document.getElementById("olá").innerHTML= ValorDigitado;
}
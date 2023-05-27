"use strict"

const btn = document.querySelector("button");

btn.onclick = function alertOne(){
    alert("julia")
}

btn.onclick = function alertOne(){
    alert("Donadelli")
}

// no caso de ter duas funções sobre o mesmo botão, apenas 
// o ultimo sera acionado 
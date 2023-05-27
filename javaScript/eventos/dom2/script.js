const btn = document.querySelector("#botao")

btn.addEventListener("click", mudarCorBk)


function mudarCorBk(){
    document.querySelector("body").style.background = "red"
}

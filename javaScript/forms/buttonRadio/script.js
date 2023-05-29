"use strict"

const form = document.forms.namedItem("select-radio")
const submit = document.querySelector('#submit')
const change = document.querySelector('#change')

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const radio = form.radio;

    console.log(radio.value)
    console.log("submitado")

    submit.innerHTML = radio.value

   /* radio.forEach( (res) => {
        if (res.checked){
            console.log(res)
        }
    })*/
});

form.radio.forEach(res => {
    res.addEventListener('change', (event) => {
        console.log(res.value)
        if(event.target.checked){
            
            console.log("marcado")
        }
    })
});
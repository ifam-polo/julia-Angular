const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    link: {a : 'a', b: {c: 'c'}}
}

//hasOwnProperty | propertyName

console.log(Tenis.hasOwnProperty("link"))

if(Tenis.hasOwnProperty("link")){
    console.log("A classe tenis tem o objeto link")
}


let Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    link: {a : 'a', b: {c: 'c'}}
}

//alterando o valor de um objeto

Tenis.tamanho = 32;

//adicionando um novo atributo


Tenis.preco = 42;
tenis["preco"] = 42;


//deletando atributos;

delete Tenis.estoque

// clonando o obj

let clone1 = Tenis;
console.log(clone1)

//mesclando obj

n = { n : { a : 'a'}, b: { c: 'c'}};

let mesclar1 =Object.assign(Tenis, n)
console.log(mesclar1)

let mesclar2 = {...Tenis, ...n}
console.log(mesclar1)

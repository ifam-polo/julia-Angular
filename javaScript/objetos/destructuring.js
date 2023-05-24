const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    link: {a : 'a', b: {c: 'c'}}
}

console.log(Tenis)

//destructuring 

/*é possivel setar um valor para o atributo. Se no dicionario não possuir */

const { tamanho, estoque, marcas = "Não possui marca!"} = Tenis;

console.log(tamanho, estoque, marcas)

//para mudar o nome do atributo

const {tamanho : tam} = Tenis

console.log(tam)

//consutando um obj dentro de outro obj

console.log(Tenis.link.a)

const { link } = Tenis;
console.log(link.b.c)
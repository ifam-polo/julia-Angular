// for of 

const arr = ['item1','item2', 'item3']

for (item of arr){

    if(item == 'item'){
        continue;
    }
    if(item == "item2"){
        break;
    }
    console.log(item)

    
}

console.log("saiu do loop for of")
for(item in arr){
    console.log(item)
}

//ForEach

arr.forEach((element,i) => {
    console.log(i, element)
});


//simulando continue com foreach

arr.forEach((element,i) => {
   return console.log(i, element);
});


//MAP

const pedidos = [
    {
      id: 420,
      nome: "Dener",
      alimento: "Sandubão de Bacon",
      bebida: "Suco Limão",
    },
    {
      id: 152,
      nome: "Naiady",
      alimento: "Sandubão Vegano",
      bebida: "Suco de Laranja",
    },
    { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
    {
      id: 33,
      nome: "Isabel",
      alimento: "Sandubão de Picanha",
      bebida: "Refrigerante",
    },
    { id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante" },
  ];
  
  /**
   * O método Map além de iterar todo o Array ele é muito bom para editar o iterado ( resumindo o Array ).
   **/
  
  pedidos.map((element, index) => {
    if (element.id === 29 && element.alimento === "Coxinha") {
      return (element.alimento = "kibe");
    }
  });
  
  console.log(pedidos);


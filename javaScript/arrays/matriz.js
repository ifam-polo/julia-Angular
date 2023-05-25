const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arr);
console.log(arr[0][1])


//destructuring

const [a, b, c] = ["Arroz", "Feijão", "Bife"]


//spread operator

const num = [1, 2, 3,4, 5];
console.log(...num)
console.log(Math.max(...num));

//adc no final do arr

arr.push(6); //adc no final da arr

arr.unshift(0); //adc no inicio da arr

console.log(arr)

//remover elementos 

arr.shift(); //remove do inicio da arr

arr,pop() //remove do final da arr


/* Uma closure ocorre normalmente quando uma função 
é declarada dentro do corpo de outra, e a função interior 
referencia variávies locais da função exterior */

function calculadora(n1, n2){
    const msg = 'Resultado: '

    const soma = () => {
        return `${msg}${n1 + n2}`;
    }

    const sub = () => {
        return `${msg}${n1 - n2}`;
    }

    return {
        soma : soma(),
        sub : sub()
    }
}

console.log(calculadora(1, 2))
console.log(calculadora(1, 2).soma)
console.log(calculadora(1, 2).sub)
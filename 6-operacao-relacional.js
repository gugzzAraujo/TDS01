// Operadores relacionais 
// Esses operadores são usados para comparar dois valores e retornar um valor
// Lógico (verdadeiro = true / falso = false)

let num1 = 35
let num2 = 5 

// Igual a (==): Verifica se dois valores são igauis
let igualdade = num1 == num2 
console.log(igualdade);


console.log(5 == "5");  // true (A string "5" é convertida para número 5)
console.log(true == 1); // true (true é convertido para 1)
console.log(null == undefined) // true (ambos são considerados iguais, sem valor atribuido)
console.log(false == 0); // false (false é convertido para 0)


// igual a valor e tipo: Verifica se dois valores são iguais e do mesmo tipo
let igualdadeValorTipo = num1 === num2
console.log(igualdadeValorTipo)


console.log(5 === "5"); // false (numero !== string)
console.log(true === 1); // false (booleano !== numero)
console.log(null === undefined) // false (null !== undefined)
console.log(false === 0); // false (numer !== booleano)


// Diferente de (!=): Verifica se dois valores são diferentes
let diferente = num1 != num2; 
console.log(diferente);

console.log(5 != "5"); // false
console.log(true != 1); // false


// Diferente valor e tipo de (!==): Verifica se dois valores são diferentes e do mesmo tipo.
let diferenteValorTipo = num1 !== num2;

console.log(5 !== "5"); // true
console.log(true !== 1); // true

// maior que (>): Verifica se um valor é maior que outro
let maiorQue = num1 > num2
console.log(maiorQue)
 
//menor que (<): Verifica se um valor é menor que outro
let menorQue = num1 < num2
console.log(menorQue)
 
// Maior ou igual a (<=): verifica se um valor é menor ou igual ao outro
let maiorIgual = num1 <= num2
console.log(menorIgual)


// Menor ou igual a (<=): Verifica se um valor é menor ou igual ao outro
let menorIgual = num1 <= num2
console.log(menorIgual)
 
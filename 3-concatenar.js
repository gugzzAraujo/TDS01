// 1. Usando o operador de concatenção (+)

let String1 = "Olá, ";
let String2 = "mundo!";

console.log(String1 + String2 + " blabla");

// 2. Usando o método concat()

let String3 = "Olá, ";
let resultado = String3.concat(string4);

console.log(resultado)

// 3.Usando template literais (templete string)

let string5 = "Olá, ";
let string6 = "mundo!";

let resultado2 = `${string5}${string6}`
console.log(resultado2)

//4. Usando a função join()
 
let sobrenome = "lizeth";
 
let resultado3 = ['Miriam', sobrenome].join(' ');
console.log(resultado3)
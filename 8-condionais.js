let idade = 22//prompt("Digite sua idade: ");
let cnh = false;

// if(idade >= 18){
//     console.log("Voce pode dirigir");
// }else{
//     console.log("Você não pode dirigir! ");
// }

if(idade >= 18){
    if(cnh == true){
        console.log("Você pode dirigir! ");
    }else{
        console.log("Você é maior de idade mas não tem cnh e não pode dirigir ");
    }
}else{
    console.log("Você é menor de idade e não pode dirigir! ");
}

//sorteio de numeros
//pensa em um número 1 ao 100

var numeroPensado = Math.round(Math.random() * 100);

console.log(numeroPensado)




//condicional alinhada

let nota = 6;

if(nota >= 7){
    console.log("Aprovado");
}else if(nota >= 5){
    console.log("recuperação");
}else{
    console.log("Reprovado");
}



let permicao = prompt("Você tem permissão? (sim ou não)").toLocaleUpperCase();
//let permicao = prompt("Você tem permissão? (sim ou não)").toLocaleLowerCase();

console.log(permicao)

if(permicao == "SIM"){
    console.log("Você tem permissão");
}else if(permicao == "NAO"){
    console.log("você não tem permissão");
}else {
    console.log("Resposta inválida");
} 

// switch...case


var fruta = "mamão";

switch(fruta){
    case "morango":
        console.log("temos morango");
    break;    
    case "mamão" :
        console.log("temos mamão");
    break;
    case  "uva":
    break;
        console.log("temos uva!!");
    break;
    default:
        console.log("Não temos essa fruta!!")           
}



console.log(new Date().getDay())

numeroDia = new Date().getDay();

switch(numeroDia){
    case 0:
        console.log("Domingo!!");
        break;
    case 1: 
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sabádo");
        break;    
}
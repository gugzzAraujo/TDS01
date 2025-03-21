// Objeto Date

//O objeto Date é usado para representar datas e horaios.
// ele permite criar, manipular e formatar datas.

// Data atual 

var dataAtual = new Date();
console.log(dataAtual);

// Data especifica (ano, mês, dia, hora minuto,segundo )
var dataEspecifica = new Date(1991,10-1,25,14,30,0)
console.log(dataEspecifica)

// Métodos úteis do Date()

//getFullYear(): Retornar o ano (4 digitos)
//getMonth(): Retorne o mês (0-11, onde 0 é janeiro)
//getDate(): Retorna o dia do mês (1-31)
//getDay(): Retorna o dia da semana(o-6, onde 0 é o domingo)
//getHours(): Retorna a hora (0-23)
//getMinutes(): Retorna os minutos (0-59)
//getSeconds(): retorna os segundos (0-59)
//getMilliseconds(): Retorna os milisegundos (0-999)
//getTime(): retorna o timestamp(milisegundos desde 1 de janeiro de 1970)

var data = new Date();
console.log(data.getFullYear() - 2023) // ano atual
console.log(data.getMonth() + 1) //Mês Atual (adiciona 1 porque janeiro é 0)
console.log(data.getDate()) // dia do mês 1 - 31
console.log(data.getDay()) // dia da semana 0 - 6


//Timestamp

//o timestamp é um numero que representa a quantidade de milissegundos desde 1 de janeiro de 1970
//(conhecido como "Unix epoch")


var timestamp = Date.now(); // Retorna o timestamp atual
console.log(timestamp)


var timestamp = 16973928000000;
var data = new Date(timestamp);
console.log(data);

var timestamp = Date.now(); // retorna o time stamp atual
var data = new Date(timestamp);
console.log(data);



// Formatação de datas
var data = new Date();
console.log(data.toLocaleDateString())


var data = new Date();
var dia = data.getDate();
var mes = data.getMonth() + 1
var ano = data.getFullYear();

var dataFormatada = `${dia}/${mes}/${ano}`;
console.log(dataFormatada);



// Diferença entre datas

var data1 = new Date(2023,9,15);
var data2 = new Date(2023,9,20);

var diferenca = data2 - data1; // Diferença em milisegundos
console.log(diferenca)

var dias = diferenca / (1000 * 60 * 60 * 24);
console.log(dias);
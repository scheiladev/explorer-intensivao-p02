/*
  1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/
alert("Hello World!");

/* 
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. 
*/
console.log('=== Exercício 02: ===');
let sumNumber1 = 5;
let sumNumber2 = 10;
let sum = sumNumber1 + sumNumber2;
console.log(`A soma de ${sumNumber1} e ${sumNumber2} é ${sum}.`);

/* 
3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
  Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". 
  Para saber o tipo de dado você pode usar o operador `typeof`
*/
console.log('=== Exercício 03: ===');
let isNumber = 524;
let resultTypeNumber = typeof isNumber === "number" ? "é um número" : "não é um número";
console.log(`O conteúdo da variável 'isNumber' ${resultTypeNumber}, e seu valor é ${isNumber}.`);
    
/* 
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
  Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/
console.log('=== Exercício 04: ===');
let isString = 'Scheila';
let resultTypeString = typeof isString === "string" ? "é uma string" : "não é uma string";
console.log(`O conteúdo da variável 'isString' ${resultTypeString}, e seu valor é ${isString}.`);

/* 
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
  Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". 
*/
console.log('=== Exercício 05: ===');
let isBoolean = false;
let resultTypeBoolean = typeof isBoolean === "boolean" ? "é um boolean" : "não é um boolean";
console.log(`O conteúdo da variável 'isBoolean' ${resultTypeBoolean}, e seu valor é ${isBoolean}.`);

/* 
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. 
*/
console.log('=== Exercício 06: ===');
let subtactionNumber1 = 25;
let subtactionNumber2 = 12;
let subtaction = subtactionNumber1 - subtactionNumber2;
console.log(`A subtração de ${subtactionNumber1} e ${subtactionNumber2} é ${subtaction}.`);

/* 
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. 
*/
console.log('=== Exercício 07: ===');
let multiplicationNumber1 = 50;
let multiplicationNumber2 = 10;
let multiplication = multiplicationNumber1 * multiplicationNumber2;
console.log(`A multiplicação de ${multiplicationNumber1} e ${multiplicationNumber2} é ${multiplication}.`);

/* 
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. 
*/
console.log('=== Exercício 08: ===');
let divisionNumber1 = 96;
let divisionNumber2 = 3;
let division = divisionNumber1 / divisionNumber2;
console.log(`A divisão de ${divisionNumber1} e ${divisionNumber2} é ${division}.`);

/* 
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. 
  Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". 
*/
console.log('=== Exercício 09: ===');
let isEven = 1978;
let resultIsEven = isEven % 2 === 0 ? 'é um número par' : 'não é um número par';
console.log(`${isEven} ${resultIsEven}.`);

/* 
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
  Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". 
*/
console.log('=== Exercício 10: ===');
let isOdd = 1975;
let resultIsOdd = isOdd % 2 !== 0 ? 'é um número ímpar' : 'não é um número ímpar';
console.log(`${isOdd} ${resultIsOdd}.`);
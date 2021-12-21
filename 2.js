// let muitosOutrosDigitos = /\d+/;

// console.log(muitosOutrosDigitos.test('123'));
// console.log(muitosOutrosDigitos.test('123456789'));
// console.log(muitosOutrosDigitos.test(''));


// let opcional = /prova\s?\d?/;
// let opcional2 = /prova\s\d/;

// console.log(opcional.test('prova'));
// console.log(opcional2.test('prova'));
// console.log(opcional.test('prova 1'));
// console.log(opcional2.test('prova 1'));
// console.log(opcional.test('prova 2'));
// console.log(opcional2.test('prova 2'));

const padrao =  /abacax?i/;

console.log(padrao.test('abacaxi'));
console.log(padrao.test('abacai'));
// let frutas = /\d+ (bananas|maças|laranjas)/;

// console.log(frutas.test('10 bananas'));
// console.log(frutas.test('25 batatas'));
// console.log(frutas.test('8 laranjas'));
// console.log(frutas.test('2 maças'));

// let validarDominio = /www.\w+\.com|com.br/;

// console.log(validarDominio.test('www.google.com'));
// console.log(validarDominio.test('www.teste'));
// console.log(validarDominio.test('teste.com'));
// console.log(validarDominio.test('www.horadecodar.mona.com.br'));


let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test('manomona2@hotmail.com.br'));
console.log(validarEmail.test('maiamona.garcia@jupiter.co.ao'));
console.log(validarEmail.test('email@email'));
console.log(validarEmail.test('email.com'));

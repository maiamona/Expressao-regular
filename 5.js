let validarDataDeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
// let validarDataDeNasc2 = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
let validarDataDeNasc2 = /[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/;

console.log(validarDataDeNasc.test('25/12/2015'));
console.log(validarDataDeNasc2.test('25/12/2015'));
console.log(validarDataDeNasc.test('25/12/15'));
console.log(validarDataDeNasc2.test('25/12/15'));
console.log(validarDataDeNasc.test('2/2/2015'));
console.log(validarDataDeNasc2.test('2/2/2015'));
console.log(validarDataDeNasc.test('30/02/1999'));
console.log(validarDataDeNasc2.test('30/02/1999'));
console.log(validarDataDeNasc2.test('99/99/9999'));
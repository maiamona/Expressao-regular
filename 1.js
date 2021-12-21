let reg1 = new RegExp('teste');
let reg2 = /teste/;
let text = 'tem teste na quinta-feira'

// console.log(reg1.test('ttttttesteeeeee'));
// console.log(reg2.test('ttttttestabc'));
// console.log(reg2.test(text));

// console.log(/123/.test('existe 123 aqui?'));
// console.log(/[3-9]/.test('O numero 4 esta presenteaui?'));

// let ano = /\d\d\d\d/;
// console.log(ano.test('05'));
// console.log(ano.test('2021'));
// console.log(ano.test('opa'));

// let palavraTresLetras = /\w\w\w/;
// console.log(palavraTresLetras.test('dia'));
// console.log(palavraTresLetras.test('ano'));
// console.log(palavraTresLetras.test('oi'));
// console.log(palavraTresLetras.test('teste') && 'teste'.length == 4);

console.log(/[^3-9]/.test('O numero 5 esta presenteaui?'));

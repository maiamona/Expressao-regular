let teste = /\d+/.exec('o numero 100');
let teste2 = /\d+/.exec('o numero');
let teste3 = 'o numero 100'.match(/\d+/);
let teste4 = 'o numero'.match(/\d+/);

console.log(teste);
console.log(teste.index);
console.log(teste2);
console.log(teste3);
console.log(teste3.index);
console.log(teste4);
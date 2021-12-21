// let letrasMaiusculas = /[A-Z]/;

// console.log(letrasMaiusculas.test('mona'));
// console.log(letrasMaiusculas.test('Mona'));
// console.log(letrasMaiusculas.test('MONA'));

// let caracter = /\w+ID\b/;

// console.log(caracter.test('monaID'));
// console.log(caracter.test('MonaID'));
// console.log(caracter.test('mona'));
// console.log(caracter.test('555ID'));
// console.log(caracter.test('555IDa3'));


// let marca = /Marca: (Nike|Adidas|Puma|Asics)\b/;

// console.log(marca.test('Marca: Nike'));
// console.log(marca.test('Marca: Adidas'));
// console.log(marca.test('Marca: Puma'));
// console.log(marca.test('Marca: Asics'));
// console.log(marca.test('Marca: timberlake'));
// console.log(marca.test('Marcas: Nike'));



// let ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

// console.log(ip.test('127.0.0.1'));
// console.log(ip.test('255.255.255.255'));



// let validaNomes = /^(?m.{3,16}$)[a-z0-9-_]/;
let validaNomes = /^[a-z0-9-_]{3,16}$/;

console.log(validaNomes.test('mateus_123123456'));

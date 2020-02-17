const fs = require('fs');   // require recebe via string o modulo que vc quer importar.
let moment = require('moment');
const superHerois = require('./superHerois'); // ./ pq foi um modulo criado por mim
let cachorro = require('./cachorro/cachorro');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8'); // serve para ler o arquivo, dirname traz do c: até a pasta
let data = moment().format('MMM do YYYY');
 

console.log(dados);
console.log(data);
console.log(superHerois[0]);
console.log(cachorro);
console.log("O cachorro se chama "+cachorro.nome +" e tem " + cachorro.idade +" anos")
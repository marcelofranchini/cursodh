let listaCompras = [{nome: "pão", tipo: "leite", ob:"fralda"}];

console.log(listaCompras[1]);

let converterJson = JSON.stringify(listaCompras);
console.log("--------------");
console.log(converterJson); // json é um array de caracteres.

let converterObjeto = JSON.parse(converterJson);

console.log("--------------");
console.log(converterObjeto);


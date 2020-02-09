let pessoa = ["Marcelo", 31, 1.77, true, ["Música", "Futebol"]];

console.log(pessoa[4][1], pessoa.length);


// Metodos array

//push -> Add valores ao fim do array;

let lista1 = ["Marcelo", "Marcelo"];

lista1.push(18, 10, "Olá");
console.log('----------------------------------')
console.log(lista1);

//pop() -> Retira o ultimo valor do array (e guarda);

let excluido = lista1.pop();
console.log('----------------------------------')
console.log(lista1);
console.log(excluido);


//unshift -> add valore ao ínicio do array
lista1.unshift("Abc", "CDF");
console.log('----------------------------------')
console.log(lista1);

// shift -> retira o 1 valor do array (e guarda)

let incluido = lista1.shift();
console.log('----------------------------------')
console.log(lista1);
console.log(incluido);


// indexOf() localiza o valor indicado no array, caso não encontre retorna -1;

console.log('----------------------------------')
console.log(lista1.indexOf("Marcelo"));
console.log(lista1.indexOf("Mar"));

// includes() retorna bolleano caso encontre o valor
console.log('----------------------------------')
console.log(lista1.includes("Marcelo"));


//lastindexOf() indica a posição do último resultado

console.log('----------------------------------')
console.log(lista1.lastIndexOf("Marcelo"));
console.log(lista1.lastIndexOf("Mar"));


// join() retorna uma string com delimitador indicado(, como padrao)

console.log('----------------------------------')

console.log(lista1);
console.log(lista1.join(" - "));
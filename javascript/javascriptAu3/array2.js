// map recebe uma funcao callback e altera todos elementos do array

let numerosPares = [2,4,6,8,10,12,14,16,18,20];

let dobro = numerosPares.map(function(dobro){
    return dobro * 2
})

console.log(dobro);

// filter filtra informações com uma regra

let numerosFiltrados = numerosPares.filter(function(numeros){
    return numeros < 12;
})
console.log("-----------------")
console.log(numerosFiltrados);

// reduce retornar em um unico valor (soma e etc) declaras um contador e numero

let somarVetor = numerosPares.reduce(function(contador, numeros){
    return contador + numeros;
})
console.log("-----------------")
console.log(somarVetor);

// forEach percorre o vetor e faz o que se quer

numerosPares.forEach(function(valor, indice){
    console.log("o indice " + indice +" tem o valor: " + valor);
})


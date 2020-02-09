// ... 

let frutas =["Maça", "banana", "Uva"]

let frutas2 = ["Laranja", "Abacate", "Goiaba"]

let listaCompleta = [...frutas,...frutas2]

console.log(listaCompleta);


let pessoa = {
    nome: "Marcelo",
    idade: 31,
}

let infPessoal = {
    tel : 123243434,
    rg: 234245345,
    ...pessoa
}

console.log(infPessoal);


function letras (...param){

    console.log(param);
}

letras("a","b","c");

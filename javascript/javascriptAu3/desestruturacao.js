let nomes = ["Marcelo", "Mariana", "Pedro"]

let [nome1,nome2] = nomes; // desestruturacao

let nome11 = nomes[0]
console.log(nome11)

console.log(nome1);

console.log(nomes);
console.log("---------------------------------")


let pessoa = {
    nome: "Pedro",
    idade: 1,
}

let {nome, idade} = pessoa;

console.log(nome, idade)


let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [ ,bariloche, ,china] = destinosIncriveis

console.log(barilhoche,china);
// for in percorre objetos literais

let carros = {
    nome: "Fox",
    ano: 2016,
    cor: "Preto",
}

for (let prop in carros) {
    console.log(prop, carros[prop]);
}

console.log("-----------------------")


// for off percorre arrays e strings

let nomes = ["Marcelo", "Mariana", "Pedro"];

for (let i of nomes) {
    console.log(i);
}
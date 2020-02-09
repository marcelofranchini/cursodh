let data = new Date;

console.log(data);

console.log(data.getDay()); // retorna o numero referente ao dia da semana -  0 dom ..

console.log(data.getDate()); // retorna o dia do mes

console.log(data.getMonth()+ 1); // retorna o mes - 0 janeiro .. + 1 para dar o mes extado 

console.log(data.getFullYear()); // retorna o ano exato

console.log("------------------------------------") 

//---------------------------------------------------------------------------
// sempre referente a data do objeto

let meuAniversario = new Date("2020-02-03")
console.log(meuAniversario);


let data2 = new Date("1988-03-04")

data2.setYear(2020)
data2.setMonth(11)
data2.setDate(22)

console.log(data2);
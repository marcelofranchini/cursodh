// const somar = (num1, num2) => num1 + num2;

// const multiplicar = (num1, num2) => num1 * num2;

// const calculadora = (num1, num2, operacao) => operacao(num1,num2);

// console.log(calculadora(2,20,somar));
// console.log(calculadora(2,20,multiplicar));

// console.log(calculadora(20,2, (num1,num2)=> num1/num2));

const somar = (num1, num2) => num1+num2;
const subtrair = (num1, num2) => num1-num2;
const multiplicar= (num1, num2) => num1*num2;
const dividir = (num1, num2) => num1/num2;

const calculadora = (num1,num2,callback) => callback(num1,num2);

console.log(calculadora(2,4,somar));
console.log("--------------");



function adicionarHttp(url) {
    return  "http://" + url;
}



function processar(array, callback){
     return callback(array.map(callback));
}
    


console.log(processar(["www.uol.com.br","www.globo.com","www.lancenet.com.br"], adicionarHttp));





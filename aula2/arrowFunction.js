// funcoes anonimas  const soma = function(num){return num + 2}

const saudacao = numero => console.log("Estou em uma arrow function " + numero);

const somar = (num1, num2) => 
{aux = num1 + num2;
    return aux;
}

saudacao(10);
console.log(somar(2,6));
console.log("---------------");

let horaAtual = () =>{
    let data = new Date();
    return data.getHours + ":" + data.getMinutes;
}

console.log(horaAtual());



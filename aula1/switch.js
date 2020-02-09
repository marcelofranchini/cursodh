let i = 1;
let numero = 0;
let mult = 0;
function tabelaDeMultiplicacao(numero) {
    while(i <= 10){
 	mult = numero * i ;
	 console.log(numero + " * " + i +" = " + mult);
	 i ++;
}
}



console.log(tabelaDeMultiplicacao(7));
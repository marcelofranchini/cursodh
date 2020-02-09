function naoPareDeContarImparesAte(numero){
    let impares= 0;
    for(let i = 0; i < numero; i++){
         if(i %2 === 1){
             impares += 1 ;
         }
        }
    
     return impares;
}



console.log(naoPareDeContarImparesAte(8));

// replace troca palavras de uma string.. 2 parametros 
let nome = "br.digitalhouse.com";
function dominio (nome){
    return nome.replace("", "http://www.");
}

console.log(dominio(nome));  


// length retorna o tamanho do array.
let texto = "Boa tarde, Marcelo"
console.log(texto.length);


// split()

// Este método divide uma string em várias strings, utilizando a
// string que passamos como separador.

// Retorna um array com as partes da string original.

var musica = 'And bingo was his name, oh!';

musica.split(' ') //retorna

['And', 'bingo', 'was', 'his', 'name', ',' , 'oh!']

//------------------------------------------------------
// .indexOf()

// Este método procura na string onde é aplicado, a string que recebe
// como parâmetro.

// Caso o encontre, retorna à primeira posição onde encontrou o
// elemento.

// No caso de não encontrá-lo, retorna -1.

var saudacao = '‘Olá! Estamos programando';

saudacao.indexOf('Estamos'); // retorna 5

saudacao.indexOf('vamos'); // retorna -1, ao não
encontra-lo

saudacao.indexOf('o'); // encontra a letra 'o' que está na posição 10, retorna 10 e para a execução.




//.slice()

// Este método pega partes definidas de uma string e retorna onde
// se aplica.

// Recebe 2 números como parámetros:

// O índice de onde começa o corte.

// O índice para onde fazer o corte e é opcional.

// Ambos índices podem receber números negativos.

var frase = 'Breaking Bad Rules!';

frase.slice(9,12); // retorna 'Bad'

frase.slice(13); // retorna 'Rules!'

frase.slice(-10); // O que retorna ?



// .trim()

// Este método elimina os espaços que estão no início e no fim de
// uma string.

// Se houver espaços no meio, não os remova.

// Não recebe parâmetros.

var nombreCompleto = ' Homero Simpson ';

nombreCompleto.trim(); // devuelve 'Homero Simpson'

var nombreCompleto = ' Homero Simpson ';

nombreCompleto.trim(); // devuelve 'Homero Simpson'

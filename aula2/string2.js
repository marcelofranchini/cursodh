function substituicaoRapida(texto, palavra, subs){
    return texto.replace(palavra, subs);
    }

    //console.log(substituicaoRapida('boa tarde', 'tarde', 'noite'));

    function menciona(texto, palavra){
        return texto.indexOf(palavra) !== -1 ? true : false;
    }

    console.log(menciona("temos pizza hoje", "pizza"));


let texto = "Olá, sou Carlos!"
let nomeUsuario = texto.slice(9,15);
console.log(nomeUsuario);
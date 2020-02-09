function saudacao(nome){
    let menssagem = "olá, ";

    function juntaNome(){
        return menssagem + nome+"!";
    }

    return juntaNome();

}

console.log(saudacao("Marcelo Franchini"));
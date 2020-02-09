let pessoa = {
    nome: "Marcelo",
    idade: 31,
    vacinado: true,
};

let converterJson = JSON.stringify(pessoa);

console.log(converterJson);

let converterParaObjeto = JSON.parse(converterJson);

console.log(converterParaObjeto);

// json cadeia de texto simples que permite transmitir informações entre apliacações web... objeto, aspas duplas no nome e sem metodo.


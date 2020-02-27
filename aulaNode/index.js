const http = require('http'); // primeiro as nativas
const url = require('url');

const petshop = require("./petshop");

http.createServer((req,res)=>{ //servidor criado
    //console.log(req.url);
        let urlCompleta = url.parse(req.url,true); // true para objeto
        let rota = urlCompleta.pathname; // url
        let dados = urlCompleta.query; // objeto
    if(rota == '/'){
        res.write("sejabem vindo a página inicial\n") // pode executar várias msg
        res.end("Você acessou um servidor"); // end finaliza
    }else if( rota == '/contato'){
        res.write("você acesso a página de contato");
        res.end();
    }else if (rota == '/listadepets'){
        let conteudo = petshop.listarPets();
        res.write(conteudo);
        res.end();
    }else if (rota == '/cadastrarpet'){
        let resultado = petshop.addPet(dados.pet)
        res.write(resultado);
        res.end();
    }

}).listen(3000, 'localhost',()=> console.log("servidor rodando na porta: 3000")); //porta
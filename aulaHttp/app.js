const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/plain"});

    switch(req.url){

        case "/":
            res.end("Você está na home");
            break;
        case "/contatos":
            res.end("Você está em contatos");
            break;
        default:
            res.end("erro")
            break;
    }
    res.end("Meu Primeiro Servidor");
}).listen(3000, 'localhost'); // porta 3000 e 'localhost'
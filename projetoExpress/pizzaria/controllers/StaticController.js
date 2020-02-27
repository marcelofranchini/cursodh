function home(req,res) {
    return res.send("Bem-vindo a pizzaria sc05")
}

function sobre(re,res){
   return res.send("Há 84 anos produzimos a melhor pizza de sampa")
}

module.exports = {home,sobre};


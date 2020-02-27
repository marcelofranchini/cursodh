const pizzas = require('../dataBase/pizzas') // ele ja faz o JSON parse e retorna array.
function listar(req, res){
    res.send(pizzas)
}

function busca(req,res){
   let busca = req.params.busca
   const resultado = pizzas.filter((pizza => {
       return pizza.nome.includes(busca)
   }))
   return res.send(resultado)
}

module.exports = {listar,busca}
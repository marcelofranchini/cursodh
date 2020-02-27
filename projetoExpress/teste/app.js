const express = require('express');
const app = express();

const rotasProdutos = require('./routes/produtos');


app.use('/produtos', rotasProdutos);

let produto = {
    tipoProdudo: null,
    preco: null,
    quantidade: null,
}
app.get( "/teste1", (req,res)=>{res.send("oi");})
app.get( "/teste", (req,res)=>{res.send(produto);})
app.get('produto/:id?',(req,res) =>{
    let {id} = req.params; //seria por desestruturacao do noda
    //let id = req.params.id
    res.send("Eu tenho um produto do o id:" + id);
})

// criando um servidor ele retorna a msg no req
app.listen(3030, ()=> console.log("servidor rodando na porta 3030"));

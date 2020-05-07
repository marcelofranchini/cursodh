let ProdutoController = {
    viewForm:(req,res) =>{
        return res.render('produto') //view produto
    },

    salvarForm: (req,res) =>{
        //console.log(req.body)
        let {nomeProduto, precoProduto} = req.body
        res.send('O Produto '+ nomeProduto + "foi criado com sucesso")

       // res.redirect('produtos/sucesso') encaminha para outra pag (criar metodo sucesso render abaico e nova rota puxando este metodo)
    },

    viewAttForm: (req,res) =>{
        let{id} = req.params;
        let produtos =[
            {id:1, produto:"Produto x", preco: 25},
            {id:2, produto:"Produto y", preco: 12},
        ]
        res.render('editarProduto', {produto: produtos[id]});
    }
}

module.exports = ProdutoController


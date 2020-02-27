const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController')

router.get('/criar',ProdutoController.criarProduto);
router.get('/deletar',(req,res)=>{ res.send("deletando um produto")});

router.get('/detalhe/:id?',(req,res)=>{ 
    let{id} = req.params
    res.send(id);
});

module.exports = router;
var express = require('express');
var router = express.Router();

let ProdutoController = require('../controllers/ProdutoController');


router.get('/criar', ProdutoController.viewForm)
router.post('/criar', ProdutoController.salvarForm)
router.get('/:id/editar', ProdutoController.viewAttForm)
router.put()

module.exports = router;
const express = require('express')
const router = express.Router()

const PizzasController = require('../controllers/PizzasController')


router.get('/pizzas', PizzasController.listar)
router.get('/pizzas/:busca?',PizzasController.busca)

module.exports = router;
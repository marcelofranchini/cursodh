const express = require('express')
const usuarioController = require('../controllers/usuarioController')

let route = express.Router()

route.get('/cadastro', usuarioController.viewFormCadastro)
route.post('/cadastro', usuarioController.salvarCadastro)


module.exports = route;

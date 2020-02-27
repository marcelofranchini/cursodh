// incluindo o express
const express = require('express')

//criando o router
const router = express.Router();

// incluindo o controller
const StaticController = require("../controllers/StaticController")

// criando rota para raiz
router.get('/', StaticController.home)


// rota para /sobre
router.get("/sobre",StaticController.sobre)

module.exports = router;


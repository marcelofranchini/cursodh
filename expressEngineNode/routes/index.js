var express = require('express');
var router = express.Router();
var ContatoControler = require("../controllers/ContatoContoller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("index",ContatoControler.index);

module.exports = router;

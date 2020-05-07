const UsuarioController = require('../models/Usuario');

let usuarioController = {
    viewFormCadastro : (req, res)=>{
         return res.render('auth/cadastroUsuario')
    },

    salvarCadastro : (req, res)=>{
        res.render('login')
    }
    
}
 
module.exports = usuarioController
// funcoes do login

const fs = require('fs')
const path = require('path')
const db = path.join('login.json')

function login(){
    let login = fs.readFileSync(db, {encoding:'utf-8'})
    listaCardapio = JSON.parse() 
    return 
}


module.exports = {login}
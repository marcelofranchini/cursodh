// incluir o express
const express = require('express');
// criar app
const app = express();

// incluir todos os roteadores
const staticRoutes = require('./routes/staticRoutes')
const pizzasRoutes = require('./routes/pizzasRoutes')

// utilizando um roteador
app.use('/', staticRoutes)
app.use('/',pizzasRoutes) // (/pizzas foi declarado em routes)

// servidor web
app.listen(3000, () => console.log("servidor rodando!!"))
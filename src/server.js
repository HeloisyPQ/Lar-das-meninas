// Importar dependências. 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//console.log(pages)

// Iniciando o express. 
const server = express()
server
// Utilizando os arquivos estáticos. 
.use(express.static('public'))

// Configurar template engine. 
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
// Criar rotas da aplicação. 
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)

    // console.log(request.query)
    // return response.sendFile(path.join(__dirname, 'views', 'index.html'))
    // return response.sendFile(__dirname + '/views/index.html')

// Ligar o servidor. 
server.listen(5500)
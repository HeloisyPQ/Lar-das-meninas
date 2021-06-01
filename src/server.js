// Importar dependências. 
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//console.log(pages)

// Iniciando o express. 
const server = express()
server

// Utilizar body do req.
.use(express.urlencoded({extended: true}))

// Utilizando os arquivos estáticos. 
.use(express.static('public'))

// Configurar template engine. 
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
// Criar rotas da aplicação. 
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/update', pages.update)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)



    // console.log(request.query)
    // return response.sendFile(path.join(__dirname, 'views', 'index.html'))
    // return response.sendFile(__dirname + '/views/index.html')

// Ligar o servidor. 
server.listen(5500)
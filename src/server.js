
const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const { routes } = require('./routes')

// configurando a template engine
nunjucks.configure("src/views", {
	express: app,
	noCache: true
})

// configurar o servidor para apresentar arquivos estáticos
app.use(express.static('public'))

// habilitar body do formulário
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// liga o servidor e permitir o acesso na porta 3001
app.listen(3001, () => {
	console.log(`Servidor rodando na porta 3001`)
})
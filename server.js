// configurando o servidor
const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

// configurar conexão com banco de dados
const pool = mysql.createPool({
    host: 'localhost',
    user: 'geovaneborba',
    password: 'admin',
    database: 'doe'
})

// configurar o servidor para apresentar arquivos estáticos
app.use(express.static('public'))

// habilitar body do formulário
app.use(express.urlencoded({ extended: true }))

// configurando a template engine
const nunjucks = require('nunjucks')
nunjucks.configure("./", {
    express: app,
    noCache: true
})

// configurar a apresentação da página
app.get("/", (req, res) => {
    
    pool.getConnection((err, connection) => {
        connection.query(`select * from donors`, (err, rows) => {
            connection.release()
            if(err) {
                throw err
            }
            const donors = rows
            res.render('index.html', { donors })
        })
    })
})


app.post("/", (req, res) => {
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.select

    // Se algum campo estiver vazio
    if (name === '' || email === '' || blood == '') {
        return res.send('Todos os campos são obrigatórios')
    }

    // Colocando valores dentro do banco de dados
    const query = `insert into donors (id_donor, nome, email, blood) values(null, "${name}", "${email}", "${blood}");`

    pool.getConnection((err, connection) => {
        connection.query(query, (err, rows) => {
            connection.release()
            if(err) {
                throw err
            }
            return res.redirect("/")
        } )
    })

})

// liga o servidor e permitir o acesso na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
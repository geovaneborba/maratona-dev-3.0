const { pool } = require('../config/db')

module.exports = {
  async index(req, res) {
    try {
      const { rows: donors } = await pool.query('SELECT * FROM donors')
      
      return res.render('index.html', { donors })
    } catch (err) {
      return res.status(500).json(err.message)
    }
  },

  async create(req, res) {
    try {
      //pegar dados do formulário
      const name = req.body.name
      const email = req.body.email
      const blood = req.body.select
  
      // Se algum campo estiver vazio
      if (name === '' || email === '' || blood == '') {
        return res.send('Todos os campos são obrigatórios')
      }
  
      // Montando a query
      const query = `INSERT INTO donors (name, email, blood) VALUES($1, $2, $3);`
  
      // Colocando valores dentro do banco de dados
      await pool.query(query, [name, email, blood])
  
      return res.redirect("/")
  
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
  }
}
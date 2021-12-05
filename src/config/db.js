const { Client } = require('pg')

const pool = new Client({
	host: 'localhost',
	database: 'doe',
	user: 'postgres',
	password: 'docker',
	port: 5432,
})
pool.connect()

module.exports = {
  pool
}
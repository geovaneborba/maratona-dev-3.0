const { Router } = require('express')
const donorsController = require('../controller/donorsController')

const routes = Router()

routes.get("/", donorsController.index)
routes.post("/", donorsController.create)

module.exports = {
  routes
}
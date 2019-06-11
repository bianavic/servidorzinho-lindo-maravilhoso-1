const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/comidas', async (request, response) => {
  response.send(controller.getAll())
})

servidor.post('/comidas', (request, response) => {
  response.status(200).send(controller.add(request.body))
})

servidor.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(204)
})

servidor.patch('/comidas/:id', (request, response) => {
const id = request.params.id
const sucesso = controller.update(id, request.body)
  if (sucesso) {
    response.sendStatus(204)
    } else {
      response.status(404)
    }
})

servidor.get('comidas/:id', (request, response) => {
  const id = request.params.id
  response.send(controller.getById(id))
})

servidor.listen(5000)
console.log("servidorzinho rodando na porta 5000")

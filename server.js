const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get('/comidas', (request, response) => {
  response.send(controller.getAll())
})

servidor.post('/comidas', (request, response) => {
  const novaComida = controller.add(request.body)
  response.status(200).send(novaComida)
})

servidor.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(204)
})

servidor.patch('/comidas/:id', (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
  response.sendStatus(204)
})

servidor.listen(5000)
console.log("servidorzinho rodando na porta 5000")

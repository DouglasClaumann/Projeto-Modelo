const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

/**
 * responsavel por fazer a interpretação dos dados de um submit
 */
server.use(bodyParser.urlencoded({extended: true}))

/**
 * interpretação do json em um objeto
 */
server.use(bodyParser.json())

/**
 * permitir requisições de outras origens
 */
server.use(allowCors)

server.listen(port, function(){
  console.log("Backend is running on port " + port)
})

module.exports = server

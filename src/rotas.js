const express = require('express')
const { listarInstrutores, obterInstrutor, cadastrarInstrutor } = require('./controladores/instrutores')


const rotas = express()


rotas.get('/instrutores', listarInstrutores)
rotas.get('/instrutores/:id', obterInstrutor)
rotas.post('/instrutores', cadastrarInstrutor)

module.exports = rotas
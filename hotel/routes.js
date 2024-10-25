const express = require('express')
const router = express.Router()

const clientes = require('./controller/controller_clientes')
const estacionamento = require('./controller/controller_estacionamento')
const quartos = require('./controller/controller_quartos')
const reservas = require('./controller/controller_reservas')
const telefone = require('./controller/controller_telefone')


router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.post('/estacionamento', estacionamento.create);
router.get('/estacionamento', estacionamento.read);
router.post('/quartos', quartos.create);
router.get('/quartos', quartos.read);
router.post('/reservas', reservas.create);
router.get('/reservas', reservas.read);
router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);

module.exports = router;
const express = require('express');
const route = express.Router();

const FuncoesHome = require('../controllers/homeController');

route.get('/', FuncoesHome.loadPageHome);
route.post('/create-incident', FuncoesHome.createIncident);

module.exports = route
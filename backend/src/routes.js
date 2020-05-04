const express = require('express');
const servidor = require('./util/servidor');
const routes = express.Router();

const usuario = require('./controller/controllerUsuario');
const marca = require('./controller/controllerMarca');
const veiculo = require('./controller/controllerVeiculo');
const chaveAcesso = require('./controller/controllerChaveAcesso');

//Testar servidor
routes.get('/', servidor.testarServidor);

//Usuario
routes.get('/usuario', usuario.index);
routes.get('/usuario/:email', usuario.user);
routes.get('/login/:email/:senha', usuario.login);
routes.post('/usuario', usuario.create);
routes.put('/usuario', usuario.update);
routes.delete('/usuario/:id', usuario.delete);

//Marca
routes.get('/marca', marca.index);
routes.get('/marca/:nome', marca.marca);
routes.post('/marca', marca.create);
routes.put('/marca', marca.update);
routes.delete('/marca/:id', marca.delete);

//Veiculo
routes.get('/veiculo', veiculo.index);
routes.get('/veiculo/:id', veiculo.veiculo);
routes.post('/veiculo', veiculo.create);
routes.put('/veiculo', veiculo.update);
routes.delete('/veiculo/:id', veiculo.delete);

//Chaves acesso
routes.get('/chaveAcesso/:chaveAcesso/:idUsuario', chaveAcesso.chaveAcesso);
routes.post('/chaveAcesso', chaveAcesso.create);
routes.delete('/chaveAcesso/:idUsuario', chaveAcesso.delete);

module.exports = routes;
const knex = require('knex');
const configuracao = require('./knexfile');

const conexao = knex(configuracao.bancoConfig);

module.exports = conexao;
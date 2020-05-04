const conexao = require('../dbSettings/connection');

module.exports = {
    async create(require, response){

        const {idUsuario, chaveAcesso, validade} = require.body;

        await conexao('chaveAcesso').insert({
            idUsuario,
            chaveAcesso,
            validade
        });

        return response.send('Chave cadastrada com sucesso!');

    },
    async chaveAcesso(require, response){
        const chaveAcesso = require.params.chaveAcesso;
        const idUsuario = require.params.idUsuario;

        const resultado = await conexao('chaveAcesso').where({ chaveAcesso: chaveAcesso, idUsuario: idUsuario }).select('*');

        return response.json(resultado);
    },
    async delete(require, response){

        const idUsuario = require.params.idUsuario;

        await conexao('chaveAcesso').where('idUsuario', idUsuario).del();

        return response.send('Chave acesso deletada para este usuario');

    }
}
const conexao = require('../dbSettings/connection');

module.exports = {
    async index(require, response){

        const users = await conexao('marca').select('*');

        return response.json(users);

    },
    async create(require, response){

        const {nome, pais, anoFundacao, urlLogo} = require.body;

        await conexao('marca').insert({
            nome,
            pais,
            anoFundacao,
            urlLogo
        });

        return response.send('Marca cadastrada com sucesso!');

    },
    async marca(require, response){

        const nome = require.params.nome;

        const marca = await conexao('marca').select('*').where('nome', nome);

        return response.json(marca);

    },
    async update(require, response){

        const {id, nome, pais, anoFundacao, urlLogo} = require.body;

        await conexao('marca').where('id', id).update({
            nome: nome,
            pais: pais,
            anoFundacao: anoFundacao,
            urlLogo: urlLogo
        });

        return response.send('Marca atualizada com sucesso!')

    },
    async delete(require, response){

        const id = require.params.id;

        await conexao('marca').where('id', id).del();

        return response.send('Marca deletada com sucesso!');

    }
}
const conexao = require('../dbSettings/connection');

module.exports = {
    async index(require, response){

        const users = await conexao('usuario').select('*');

        return response.json(users);

    },
    async create(require, response){

        const {nome, sobrenome, idade, dataNascimento, cpf, email, senha} = require.body;

        await conexao('usuario').insert({
            nome,
            sobrenome,
            idade,
            dataNascimento,
            cpf,
            email,
            senha
        });

        return response.send('Usuario cadastrado com sucesso!');

    },
    async user(require, response){

        const email = require.params.email;

        const user = await conexao('usuario').select('*').where('email', email);

        return response.json(user);

    },
    async login(require, response){
        
        const email = require.params.email;
        const senha = require.params.senha;

        const user = await conexao('usuario').where({email:  email, senha: senha}).select('*');

        return response.json(user);
    },
    async update(require, response){

        const {nome, sobrenome, idade, dataNascimento, cpf, email, senha} = require.body;

        await conexao('usuario').where('email', email).update({
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            dataNascimento: dataNascimento,
            cpf: cpf,
            senha: senha
        });

        return response.send('Usuario atualizado com sucesso!')

    },
    async delete(require, response){

        const id = require.params.id;

        await conexao('usuario').where('id', id).del();

        return response.send('Usuario deletado com sucesso!');

    }
}
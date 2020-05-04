const conexao = require('../dbSettings/connection');

module.exports = {
    async index(require, response){

        const veiculos = await conexao('veiculo').select('*');

        return response.json(veiculos);

    },
    async create(require, response){

        const {idMarca, idUsuario, nomeMarca, nomeVeiculo, versao, ano, modelo, km, placa, chassis, urlImagemCarro} = require.body;

        await conexao('veiculo').insert({
            idMarca,
            idUsuario,
            nomeMarca,
            nomeVeiculo,
            versao,
            ano,
            modelo,
            km,
            placa,
            chassis,
            urlImagemCarro
        });

        return response.send('Veiculo cadastrado com sucesso!');

    },
    async veiculo(require, response){

        const id = require.params.id;

        const veiculo = await conexao('veiculo').select('*').where('id', id);

        return response.json(veiculo);

    },
    async update(require, response){

        const {id, idMarca, idUsuario, nomeMarca, nomeVeiculo, versao, ano, modelo, km, placa, chassis, urlImagemCarro} = require.body;

        await conexao('veiculo').where('id', id).update({
            idMarca: idMarca,
            idUsuario: idUsuario,
            nomeMarca: nomeMarca,
            nomeVeiculo: nomeVeiculo,
            versao: versao,
            ano: ano,
            modelo: modelo,
            km: km,
            placa: placa,
            chassis: chassis,
            urlImagemCarro: urlImagemCarro
        });

        return response.send('Veiculo atualizado com sucesso!')

    },
    async delete(require, response){

        const id = require.params.id;

        await conexao('veiculo').where('id', id).del();

        return response.send('Veiculo deletado com sucesso!');

    }
}
const CreateTreinadorService = require('../../services/trainer/CreateTreinadorService');
const ListTreinadorService = require('../../services/trainer/ListTreinadorService');
const UpdateTreinadorService = require('../../services/trainer/UpdateTreinadorService');
const DeleteTreinadorService = require('../../services/trainer/DeleteTreinadorService');

const controller = {
    index: (request, response) => {
        const listTreinadores = ListTreinadorService.listTreinadoresService();
        response.json(listTreinadores);
    },
    create: (request, response) => {
        const {
            nome,
            idade, 
            cidadeNatal
        } = request.body;

        if (!nome && !idade) {
            return response.status(400).json({ "erro": "Você não passou o nome nem a idade!" })
        }

        if (!nome) {
            return response.status(400).json({ "erro": "Você não passou o nome do treinador!" })
        }

        if (!idade) {
            return response.status(400).json({ "erro": "Você não passou a idade do treinador!" })
        }

        if (nome.length < 5) {
            return response.status(400).json({ "erro": "Nome precisa conter 5 ou mais characteres!" })
        }

        if (idade <= 15 || idade > 39) {
            return response.status(400).json({ "erro": "A idade precisa ser maior ou igual a 15 anos e menor que 40 anos" })
        }

        if (cidadeNatal != "Pallet" && cidadeNatal != "Vermelion") {
            return response.status(400).json({ "erro": "Serão aceitas somente as cidades Pallet e Vermelion" })
        }

        const treinador = CreateTreinadorService.createTreinador(
            nome,
            idade,
            cidadeNatal
        )

        return response.json(treinador);
    },

    update: (request, response) => {
        const { id } = request.params;
        const { nome, idade, cidadeNatal } = request.body;

        if (!nome && !idade) {
            return response.status(400).json({ "erro": "Você não passou o nome nem a idade!" })
        }
        if (!nome) {
            return response.status(400).json({ "erro": "Você não passou o nome do treinador!" })
        }
        if (!idade) {
            return response.status(400).json({ "erro": "Você não passou a idade do treinador!" })
        }
        if (nome.length < 5) {
            return response.status(400).json({ "erro": "Nome precisa conter 5 ou mais characteres!" })
        }
        if (idade <= 15 || idade > 39) {
            return response.status(400).json({ "erro": "A idade precisa ser maior ou igual a 15 anos e menor que 40 anos" })
        }
        if (cidadeNatal != "Pallet" && cidadeNatal != "Vermelion") {
            return response.status(400).json({ "erro": "Serão aceitas somente as cidades Pallet e Vermelion" })
        }

        const updateTreinador = UpdateTreinadorService.update(
            id,
            nome,
            idade,
            cidadeNatal
        )

        response.json(updateTreinador);
    },
    delete: (request, response) => {
        const { id } = request.params

        const resultado = DeleteTreinadorService.delete(id)

        response.send(resultado)
    }

}

module.exports = controller;
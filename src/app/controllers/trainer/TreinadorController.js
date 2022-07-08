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

        if (!nome || !idade) {
            response.status(400).json({ erro: "O nome e a idade do treinador são obrigatórios" })
        }

        const treinador = CreateTreinadorService.createTreinador(
            nome,
            idade,
            cidadeNatal
        )

        if (!treinador.nome) {
            response.status(400).json({ erro: "O nome do treinador é obrigatório e deve ter pelo menos 5 caracteres" })
        }

        if (!treinador.idade) {
            response.status(400).json({ erro: "A idade precisa ser maior ou igual a 15 anos e menor que 40 anos" })
        }

        if (!treinador.cidadeNatal) {
            response.status(400).json({ erro: "Serão aceitas somente as cidades de Pallet e Vermelion" })
        }

        return response.json(treinador);
    },

    update: (request, response) => {
        const { id } = request.params;

        const {
            nome,
            idade,
            cidadeNatal
        } = request.body;

        if (!nome || !idade) {
            response.status(400).json({ erro: "O nome e a idade do treinador são obrigatórios" })
        }

        const treinador = UpdateTreinadorService.update(
            Number(id),
            nome,
            idade,
            cidadeNatal
        )

        if (!treinador.nome) {
            response.status(400).json({ erro: "O nome do treinador deve ter pelo menos 5 caracteres" })
        }

        if (!treinador.idade) {
            response.status(400).json({ erro: "A idade precisa estar entre 14 e 40 anos" })
        }

        if (!treinador.cidadeNatal) {
            response.status(400).json({ erro: "Serão aceitas somente as cidades de Pallet e Vermelion" })
        }

        response.json(treinador);
    },

    delete: (request, response) => {
        const { id } = request.params

        const resultado = DeleteTreinadorService.delete(id)

        response.send(resultado)
    }
}

module.exports = controller;
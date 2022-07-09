const CreateTreinadorService = require('../../services/trainer/CreateTreinadorService');
const ListTreinadorService = require('../../services/trainer/ListTreinadorService');
const UpdateTreinadorService = require('../../services/trainer/UpdateTreinadorService');
const DeleteTreinadorService = require('../../services/trainer/DeleteTreinadorService');

const controller = {
    index: (request, response) => {
        const listTreinadores = ListTreinadorService.listAll();
        response.json(listTreinadores);
    },

    validityList: (request, response) => {
        const treinadores = ListTreinadorService.validacoes()
        return response.json(treinadores)
    },

    create: (request, response) => {
        const {
            nome,
            idade,
            cidadeNatal
        } = request.body;

        if (!nome || !idade) {
            const notSucceed = {erro: "Os campos 'nome' e 'idade' são obrigatórios"}
            return response.status(400).json(notSucceed.erro)
        }

        const treinador = CreateTreinadorService.create(
            nome,
            idade,
            cidadeNatal
        )

        if (!treinador.succeed) {
            return response.status(400).json(treinador.message)
        }
        
        return response.status(200).json(treinador.message)
    },

    update: (request, response) => {
        const { id } = request.params;

        const {
            nome,
            idade,
            cidadeNatal
        } = request.body;

        if (!nome || !idade) {
            const notSucceed = {erro: "Os campos 'nome' e 'idade' são obrigatórios"}

            return response.status(400).json(notSucceed.erro)
        }

        const treinador = UpdateTreinadorService.update(
            Number(id),
            nome,
            idade,
            cidadeNatal
        )

        if (!treinador.succed) {
            return response.status(400).json(treinador.message)
        }

        return response.status(200).json(treinador.message);
    },

    delete: (request, response) => {
        const { id } = request.params

        const resultado = DeleteTreinadorService.delete(id)

        // response.send(resultado.message)

        if (!resultado.succeed) {
            return response.status(400).json(resultado.message)
        }
        
        response.status(200).json(resultado.message)
    }
}

module.exports = controller;
const CreateTrainerService = require('../../services/trainer/CreateTrainerService');
const ListTrainersService = require('../../services/trainer/ListTrainersService');
const UpdateTrainerService = require('../../services/trainer/UpdateTrainerService');
const DeleteTrainerService = require('../../services/trainer/DeleteTrainerService');

const controller = {
    index: (request, response) => {
        const listTreinadores = ListTrainersService.listAll();
        response.json(listTreinadores);
    },

    create: (request, response) => {
        const { name, age, city } = request.body;

        /* if (!name || !idade) {
            const notSucceed = {erro: "Os campos 'nome' e 'idade' são obrigatórios"}
            return response.status(400).json(notSucceed.erro)
        } */

        const trainer = CreateTrainerService.create(
            name,
            age,
            city
        )

        if (!treinador.succeed) {
            return response.status(400).json(trainer.message)
        }

        return response.status(200).json(trainer.message)
    },

    update: (request, response) => {
        const { id } = request.params;

        const {
            name,
            age,
            city
        } = request.body;

        const trainer = UpdateTrainerService.update(
            Number(id),
            name,
            age,
            city
        )

        return response.status(200).json(trainer.message);
    },

    delete: (request, response) => {
        const { id } = request.params

        const resulte = DeleteTrainerService.delete(id)

        if (!resultado.succeed) {
            return response.status(400).json(resulte.message)
        }

        response.status(200).json(resulte.message)
    }
}

module.exports = controller;
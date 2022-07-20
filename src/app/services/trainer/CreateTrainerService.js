const TrainerModel = require('../../models/trainer/TrainerModel');
const { v4 } = require('uuid');

const CreateTrainerService = {
    create: (
        name,
        age,
        city
    ) => {
        const treinador = new TrainerModel(
            v4(),
            name,
            age,
            city
        );

        return {
            succeed: true,
            message: treinador
        };
    }
}

module.exports = CreateTrainerService;

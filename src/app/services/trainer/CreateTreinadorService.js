const TreinadorModel = require('../../models/trainer/TreinadorModel');
const { v4 } = require('uuid');

const CreateTreinadorService = {
    create: (
        nome,
        idade,
        cidadeNatal
    ) => {
        const treinador = new TreinadorModel(
            v4(),
            nome,
            idade,
            cidadeNatal
        );

        return {
            succeed: true,
            message: treinador
        };
    }
}

module.exports = CreateTreinadorService;

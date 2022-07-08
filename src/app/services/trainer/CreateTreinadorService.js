const TreinadorModel = require('../../models/trainer/TreinadorModel');
const { v4 } = require('uuid');

const CreateTreinadorService = {   
    createTreinador: (
        nome,
        idade,
        cidadeNatal
    ) => {
        const newTreinador = new TreinadorModel(
            v4(),
            nome,
            idade,
            cidadeNatal
        );

        return newTreinador;
    }
}

module.exports = CreateTreinadorService;

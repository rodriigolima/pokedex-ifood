const TreinadorModel = require('../../models/trainer/TreinadorModel');
const { v4 } = require('uuid');

const CreateTreinadorService = {
    createTreinador: (
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

        if (treinador.nome.length < 5) {
            treinador.nome = false
        }

        if (treinador.idade < 15 || treinador.idade > 39) {
            treinador.idade = false
        }

        if (treinador.cidadeNatal != "Pallet" && treinador.cidadeNatal != "Vermelion") {
            treinador.cidadeNatal = false
        }

        return treinador;
    }
}

module.exports = CreateTreinadorService;

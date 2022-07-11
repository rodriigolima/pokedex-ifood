const TreinadorModel = require('../../models/trainer/TreinadorModel');
const { v4 } = require('uuid');

const CreateTreinadorService = {
    create: (
        nome,
        idade,
        cidadeNatal
    ) => {

        if (nome.length < 5) {
            return {
                succeed: false,
                message: "O nome deve ter pelo menos 5 caracteres"
            }
        }

        if (idade < 15 || idade >= 40) {
            return {
                succeed: false,
                message: "A idade deve ser a partir de 15 até 40"
            }
        }

        if (cidadeNatal != "Pallet" && cidadeNatal != "Vermelion") {
            return {
                succeed: false,
                message: "Serão aceitas somente as cidades de Pallet e Vermelion"
            }
        }

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

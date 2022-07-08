const TreinadorModel = require('../../models/trainer/TreinadorModel');

const ListTreinadorService = {
    listTreinadoresService: () => {
        const treinador = new TreinadorModel(
            1,
            "Jackson",
            26,
            "Pallet"
        )
        const treinador2 = new TreinadorModel(
            2,
            "Rodrigo",
            28,
            "Recife"
        )
        const treinador3 = new TreinadorModel(
            3,
            "Daniel",
            45,
            "Vermelion"
        )

        return [treinador, treinador2, treinador3]
    }
}

module.exports = ListTreinadorService;
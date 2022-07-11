const TreinadorModel = require('../../models/trainer/TreinadorModel');

const ListTreinadorService = {
    listAll: () => {
        const treinador1 = new TreinadorModel(
            1,
            "Jack",
            26,
            "Vermelion"
        )

        const treinador2 = new TreinadorModel(
            2,
            "",
            "",
            "Recife"
        )

        const treinador3 = new TreinadorModel(
            3,
            "Daniel",
            32,
            "Vermelion"
        )

        const treinador4 = new TreinadorModel(
            4,
            "Acácio",
            30,
            "Pallet"
        )

        const treinador5 = new TreinadorModel(
            5,
            "Ubirajara",
            "25",
            "Pallet"
        )
        
        const treinador6 = new TreinadorModel(
            6,
            "Luís",
            25,
            "Pallet"
        )
        
        return [treinador1, treinador2, treinador3, treinador4, treinador5, treinador6]
    },

    validacoes: () => {
        const treinadores = ListTreinadorService.listAll()

        for (let i = 0; treinadores.length < i; i++) {
            if (treinadores[i].id === i+1) {
                if (treinadores[i].nome.length < 5) {
                    treinadores[i] = {
                        id: treinadores[i].id,
                        message: "o nome do treinador tem menos que cinco caracteres"
                    }
                }

                if (treinadores[i].idade < 15 || treinadores[i].idade >= 40) {
                    treinadores[i] = {
                        id: treinadores[i].id,
                        message: "o treinador não tem idade apropriada"
                    }
                }

                if (treinadores[i].cidadeNatal === "Pallet" && treinadores[i].cidadeNatal === "Vermelion") {
                    treinadores[i] = {
                        id: treinadores[i].id,
                        message: "a cidade de origem do treinador não está de acordo com os requisitos"
                    }
                    
                }

                treinadores[i] = treinadores[i]
            }

            return treinadores
        }
    }
}

module.exports = ListTreinadorService;
const TrainerModel = require('../../models/trainer/TrainerModel');

const ListTrainersService = {
    listAll: () => {
        const treinador1 = new TrainerModel(
            1,
            "Jack",
            "jackson@digitalhouse.com",
            "123456789",
            26,
            "Vermelion"
        )

        const treinador2 = new TrainerModel(
            2,
            "",
            "rodrigo@digitalhouse.com",
            "123456789",
            "",
            "Recife"
        )

        const treinador3 = new TrainerModel(
            3,
            "Daniel",
            "daniel@digitalhouse.com",
            "123456789",
            32,
            "Vermelion"
        )

        const treinador4 = new TrainerModel(
            4,
            "Acácio",
            "acacio@digitalhouse.com",
            "123456789",
            30,
            "Pallet"
        )

        const treinador5 = new TrainerModel(
            5,
            "Ubirajara",
            "ubirajara@digitalhouse.com",
            "123456789",
            "25",
            "Pallet"
        )

        const treinador6 = new TrainerModel(
            6,
            "Luiz",
            "luiz@digitalhouse.com",
            "123456789",
            25,
            "Pallet"
        )

        return [treinador1, treinador2, treinador3, treinador4, treinador5, treinador6]
    },

    findTrainer: (email, password) => {
        const trainer = ListTrainersService.listAll().find(trainer => trainer.email === email && trainer.password === password)

        return trainer
    }

    /* validacoes: () => {
        const treinadores = ListTreinadorService.listAll()

        for (let i = 0; treinadores.length < i; i++) {
            if (treinadores[i].id === i+1) {
                if (treinadores[i].name.length < 5) {
                    treinadores[i] = {
                        id: treinadores[i].id,
                        message: "o nome do treinador tem menos que cinco caracteres"
                    }
                }

                if (treinadores[i].age < 15 || treinadores[i].age >= 40) {
                    treinadores[i] = {
                        id: treinadores[i].id,
                        message: "o treinador não tem idade apropriada"
                    }
                }

                if (treinadores[i].city === "Pallet" && treinadores[i].city === "Vermelion") {
                    treinadores[i] = {
                        id: treinadores[i].id,
                        message: "a cidade de origem do treinador não está de acordo com os requisitos"
                    }
                    
                }
                treinadores[i] = treinadores[i]
            }
            return treinadores
        }
    } */
}

module.exports = ListTrainersService;
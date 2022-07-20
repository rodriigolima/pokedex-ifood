const ListTrainersService = require("./ListTrainersService");

const UpdateTrainerService = {
    update: (id, name, age, city) => {
        /* if (name.length < 5) {
            return {
                succeed: false,
                message: "O nome deve ter pelo menos 5 caracteres"
            }
        }

        if (age < 15 || age >= 40) {
            return {
                succeed: false,
                message: "A idade deve ser a partir de 15 e até 40"
            }
        }

        if (city !== "Pallet" && city !== "Vermelion") {
            return {
                succeed: false,
                message: "Serão aceitas somente as cidades de Pallet e Vermelion"
            }
        } */

        const treinadores = ListTrainersService.listAll();

        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));
        
        if (treinadorIndice === -1) {
            return {
                succeed: false,
                message: "ID informado não é referente a nenhum treinador cadastrado"
            }
        }

        treinadores[treinadorIndice] = { id, name, age, city };

        return {
            succed: true,
            message: "Treinador atualizado com sucesso"
        }
    }
}

module.exports = UpdateTrainerService;
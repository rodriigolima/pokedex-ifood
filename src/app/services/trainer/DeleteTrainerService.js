const ListTrainersService = require("./ListTrainersService");

const DeleteTrainerService = {
    delete: (id) => {
        const treinadores = ListTrainersService.listAll();
        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));

        if (treinadorIndice === -1) {
            return { 
                succeed: false,
                message: "ID informado não é referente a nenhum treinador cadastrado"
            }
        }

        treinadores.splice(treinadorIndice, 1)

        return { 
            succeed: true,
            message: "Treinador excluído com sucesso"
        }
    }
}

module.exports = DeleteTrainerService;
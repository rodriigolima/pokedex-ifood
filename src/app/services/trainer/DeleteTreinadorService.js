const ListTreinadorService = require("./ListTreinadorService");

const DeleteTreinadorService = {
    delete: (id) => {
        const treinadores = ListTreinadorService.listAll();
        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));

        if (treinadorIndice === -1) {
            return { message: "Treinador não cadastrado" }
        }

        treinadores.splice(treinadorIndice, 1)

        return { message: "Treinador deletado com sucesso" }
    }
}

module.exports = DeleteTreinadorService;
const ListTreinadorService = require("./ListTreinadorService");

const DeleteTreinadorService = {
    delete: (id) => {
        const treinadores = ListTreinadorService.listTreinadoresService();
        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));
        
        if (treinadorIndice === -1) {
            return { erro: "Treinador não está cadastrado!"}
        }

        treinadores.splice(treinadorIndice, 1)

        return { mensagem: "Treinador deletado com sucesso!"}
    }
}

module.exports = DeleteTreinadorService;
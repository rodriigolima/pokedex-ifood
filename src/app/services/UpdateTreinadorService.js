const ListTreinadorService = require("./ListTreinadorService");

const UpdateTreinadorService = {
    update: (id, nome, idade, cidadeNatal) =>{
        const treinadores = ListTreinadorService.listTreinadoresService();
        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));

        if (treinadorIndice === -1) {
            return { erro: "Treinador não está cadastrado!" }
        }
        
        treinadores[treinadorIndice] = {
            nome,
            idade,
            cidadeNatal
        }
        
        return {
            id,
            ...treinadores[treinadorIndice]
        }
    }
}

module.exports = UpdateTreinadorService;
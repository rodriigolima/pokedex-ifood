const ListTreinadorService = require("./ListTreinadorService");

const UpdateTreinadorService = {
    update: (
        id,
        nome,
        idade,
        cidadeNatal
    ) => {
        const treinadores = ListTreinadorService.listTreinadoresService();
        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));

        if (treinadorIndice === -1) {
            return { erro: "Treinador não está cadastrado!" }
        }

        treinadores[treinadorIndice] = {
            nome,
            idade,
            cidadeNatal
        };

        if (treinadores[treinadorIndice].nome.length < 5) {
            treinadores[treinadorIndice].nome = false
        }

        if (treinadores[treinadorIndice].idade < 15 || treinadores[treinadorIndice].idade > 39) {
            treinadores[treinadorIndice].idade = false
        }

        if (treinadores[treinadorIndice].cidadeNatal != "Pallet" && treinadores[treinadorIndice].cidadeNatal != "Vermelion") {
            treinadores[treinadorIndice].cidadeNatal = false
        }

        return {
            id,
            ...treinadores[treinadorIndice]
        }
    }
}

module.exports = UpdateTreinadorService;
const ListTreinadorService = require("./ListTreinadorService");

const UpdateTreinadorService = {
    update: (
        id,
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

        if (cidadeNatal !== "Pallet" && cidadeNatal !== "Vermelion") {
            return {
                succeed: false,
                message: "Serão aceitas somente as cidades de Pallet e Vermelion"
            }
        }

        const treinadores = ListTreinadorService.listTreinadoresService();

        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id));
        
        if (treinadorIndice === -1) {
            return {
                succeed: false,
                message: "Treinador não cadastrado"
            }
        }

        treinadores[treinadorIndice] = {
            id,
            nome,
            idade,
            cidadeNatal
        };

        return {
            succed: true,
            message: "Treinador atualizado com sucesso"
        }
    }
}

module.exports = UpdateTreinadorService;
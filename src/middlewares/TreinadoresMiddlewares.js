const yup = require('yup')

async function TrainerValidator(request, response, next) {
    const {
        nome,
        idade,
        cidadeNatal
    } = request.body

    const schema = yup.object().shape({
        nome: yup.string().required('Nome é obrigatório'),
        idade: yup.number().required("Idade é obrigatório").positive("Idade, obviamente, deve ser um número positivo, bocó!"),
        cidadeNatal: yup.string().required("Cidade Natal é obrigatório")
    })

    await schema.validate({ nome, idade, cidadeNatal }).catch(err => {
        return response.status(400).json({
            message: err.errors
        })
    })

    next()
}

module.exports = TrainerValidator
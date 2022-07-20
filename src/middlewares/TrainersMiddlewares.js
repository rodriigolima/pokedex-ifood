const yup = require('yup')

async function TrainerValidator(request, response, next) {
    const schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        age: yup.number().required("Idade é obrigatório").positive(),
        city: yup.string().required("Cidade Natal é obrigatório")
    })

    await schema.validate(request.body).catch(err => {
        return response.status(400).json({
            message: err.errors
        })
    })

    next()
}

module.exports = TrainerValidator
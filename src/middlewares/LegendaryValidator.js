/* function legendaryValidator(req, res, next) {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ error: "Nome é obrigatório" })
    }

    next()
}
*/


/* const { body } = require('express-validator')

const legendaryValidatorList = [] */

const yup = require('yup')

function legendaryValidator(req, res, next) {
    const schema = yup.object().shape({
        name: yup.string().required('Name é obrigatório'),
        type: yup.string().require('Type é obrigatório'),
        description: yup.string().require().min(10)
    })

    if (schema.isValidSync(req.body)) {
        return res.status(400).json({ error: 'Não foi possível cadastrar o legendary, verifique os campos obrigatórios' })
    }

    next()
}

module.exports = legendaryValidator; 
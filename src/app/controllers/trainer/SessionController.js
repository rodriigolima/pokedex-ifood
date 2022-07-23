const jwt = require('jsonwebtoken')
const ListTrainerService = require('../../services/trainer/ListTrainersService')

const SessionController = {
    create: (request, response) => {
        const { email, password } = request.body

        const trainer = ListTrainerService.findTrainer(email, password)

        if (!trainer) { return response.status(401).json({ error: "Trainer not found" }) }

        const { id, name, age, city } = trainer

        return response.json({ trainer: { id, name, age, city, email }, token: jwt.sign({ id }, 'a07bda8fd5e39462b4c3d860a36f6b4d', { expiresIn: '5d' })
        })
    }
}

module.exports = SessionController
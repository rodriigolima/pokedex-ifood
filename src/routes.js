const Router = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const trainerController = require('./app/controllers/trainer/TrainerController')
const legendaryController = require('./app/controllers/legendary/LegendaryController');
const uploadFileController = require('./app/controllers/util/UploadFileController');
const LegendaryValidator = require('./middlewares/LegendaryValidator')
const TrainersMiddlewares = require('./middlewares/TrainersMiddlewares');
const SessionController = require('./app/controllers/trainer/SessionController');

const uploadFile = multer({ storage: multerConfig })

const routes = new Router();

//routes.get('/legendaries', legendaryController.index);
routes.get('/legendaries', legendaryController.ListData);
routes.post('/legendaries', LegendaryValidator, legendaryController.create);
routes.put('/legendaries/:id', legendaryController.update);
routes.delete('/legendaries/:id', legendaryController.delete);

routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

routes.get('/trainers', trainerController.index);
routes.post('/trainers', TrainersMiddlewares, trainerController.create);
routes.put('/trainers/:id', TrainersMiddlewares, trainerController.update);
routes.delete('/trainers/:id', trainerController.delete);

routes.post('/session', SessionController.create)

module.exports = routes;
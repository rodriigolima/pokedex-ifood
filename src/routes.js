const Router = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const treinadorController = require('./app/controllers/trainer/TreinadorController')
const legendaryController = require('./app/controllers/legendary/LegendaryController');
const uploadFileController = require('./app/controllers/util/UploadFileController');

const uploadFile = multer({ storage: multerConfig })

const routes = new Router();

//routes.get('/legendaries', legendaryController.index);
routes.get('/legendaries', legendaryController.ListData);
routes.post('/legendaries', legendaryController.create);
routes.put('/legendaries/:id', legendaryController.update);
routes.delete('/legendaries/:id', legendaryController.delete);
routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

routes.get('/treinadores', treinadorController.index);
routes.post('/treinadores', treinadorController.create);
routes.put('/treinadores/:id', treinadorController.update);
routes.delete('/treinadores/:id', treinadorController.delete);

module.exports = routes;
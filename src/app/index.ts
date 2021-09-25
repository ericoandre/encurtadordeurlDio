import express, { Request, Response } from 'express';
import morgan from "morgan";

import { UrlController } from './controllers/url_controller';
import { MongoConnection } from './databases/mongo_database';

const api = express();

api.use(morgan('dev'));
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new UrlController();
api.post('/ecurtar', urlController.encurtador);
api.get('/:hash', urlController.redireciona);

export default api;
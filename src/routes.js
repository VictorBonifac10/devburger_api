import { Router } from 'express';
import UserController from './app/controllers/UserController';
//import { request } from './app';

const routes = new Router();

//----------------------------
//ROTA GET
//----------------------------

routes.post('/users', UserController.store);

export default routes;

import { Router } from 'express';
//import { request } from './app';

const routes = new Router();

//----------------------------
//ROTA GET
//----------------------------

routes.get('/', (_request, response) => {
  return response.status(200).json({ message: 'Hello World!' });
});

export default routes;

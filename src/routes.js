import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';

import authMiddleware from './app/middlewares/auth';
import OrderController from './app/controllers/OrderController';
//import { request } from './app';

const routes = new Router();

const upload = multer(multerConfig);

//=====GERAL==========//

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); //Tudo que estiver abaixo, será necessario a autenticação!

//=====PRODUCTS==========//

routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);
routes.put('/products/:id', upload.single('file'), ProductController.update);

//=====CATEGORIES==========//

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

//=====ORDERS==========//

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

export default routes;

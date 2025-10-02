import express from 'express';
import { resolve } from 'node:path';
import routes from './routes';
import cors from 'cors'

import './database';

const app = express();

//=====MIDDLEWARES==========//

app.use(express.json());

app.use(cors())

app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));

app.use('/category-file', express.static(resolve(__dirname, '..', 'uploads')));

//=====ROUTES==========//

app.use(routes);

export default app;

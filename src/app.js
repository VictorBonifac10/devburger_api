import express from 'express';
import { resolve } from 'node:path';
import routes from './routes';

import './database';

const app = express();

// Middlewares
app.use(express.json());
app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));

// Rotas
app.use(routes);

export default app;

import express from 'express';
import routes from './routes';

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use(routes);

export default app;

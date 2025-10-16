import path from "path";
import dotenv from "dotenv";

// 🔹 carrega o .env a partir do mesmo diretório do server.js
dotenv.config({ path: path.resolve("./src/.env") });

// teste:
console.log("🔑 STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);

import app from './app';

app.listen(3001, () => console.log('Servidor rodando na porta 3001!'));

import express from 'express';
import http from 'http';
import router from './router.mjs';
import config from './config.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurações de caminhos (Necessário para o Render encontrar as pastas)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 4000;

// Conexão Mongo
mongoose.connect(config.db)
    .then(() => console.log('Conexão bem-sucedida com o MongoDB'))
    .catch((err) => console.error('Erro de conexão:', err));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- A MUDANÇA IMPORTANTE ESTÁ AQUI ---
// Diz ao servidor para usar a pasta 'build' dentro de 'tf-app'
app.use(express.static(path.join(__dirname, 'tf-app', 'build')));

// As suas rotas de API (Login, etc)
app.use(router);

// Qualquer outra rota devolve o React (resolve o erro Cannot GET)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'tf-app', 'build', 'index.html'));
});
// --------------------------------------

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Servidor a rodar na porta ${port}`);
});
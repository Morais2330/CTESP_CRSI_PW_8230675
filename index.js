import express from 'express';
import http from 'http';
import router from './router.mjs';
import config from './config.js';
import mongoose from 'mongoose';

// Configuração da porta
const port = process.env.PORT || 4000;

// Conexão ao MongoDB
mongoose.connect(config.db)
    .then(() => console.log('Conexão bem-sucedida com o MongoDB'))
    .catch((err) => console.error('Erro de conexão:', err));

const app = express();

// --- NOVO: Configurações essenciais ---

// 1. Permite ao servidor ler dados de formulários (Login/Registo)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. DIZ AO SERVIDOR ONDE ESTÁ O SEU SITE (HTML/CSS)
// A pasta chama-se 'tf-app' segundo o seu print
app.use(express.static('tf-app'));

// --------------------------------------

app.use(router);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Servidor a rodar na porta ${port}`);
});
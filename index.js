import express from 'express';
import http from 'http';
import router from './router.mjs'; 
import config from './config.js';
import mongoose from 'mongoose';

// ALTERAÇÃO 1: Remover o hostname fixo (127.0.0.1 bloqueia o acesso externo)
// const hostname = '127.0.0.1'; <--- Isto apaga-se

// ALTERAÇÃO 2: A porta deve vir do sistema (process.env.PORT) ou usar 4000 se for local
const port = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão bem-sucedida com o MongoDB'))
    .catch((err) => console.error('Erro de conexão:', err));

const app = express();

app.use(router);

const server = http.createServer(app);

// ALTERAÇÃO 3: No listen, removemos o hostname para aceitar conexões de qualquer lugar
server.listen(port, () => {
    console.log(`Servidor a rodar na porta ${port}`);
});
// router.mjs
import express from 'express';
const router = express.Router();

// Rota GET para página inicial
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Rota POST para registro de usuário
router.post('/auth/register', (req, res) => {
    console.log(req.body); // Verifica se está recebendo os dados corretamente
    res.send('Registrado com sucesso!');
});

export default router;

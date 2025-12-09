// router.mjs
import express from 'express';
const router = express.Router();

// Apaguei a rota GET '/' daqui para não bloquear o seu site

// Rota POST para registro de usuário
router.post('/auth/register', (req, res) => {
    console.log(req.body);
    res.send('Registrado com sucesso!');
});

export default router;
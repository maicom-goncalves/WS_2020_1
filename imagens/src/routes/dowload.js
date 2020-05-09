const express = require('express');

const dowloadCtrl = require('../controller/DowloadController');

const router = express.Router();


router.get('/listar', dowloadCtrl.listarTodasImagens);
router.get('/:id',dowloadCtrl.realizarDowload);

//atividade
/*router.get('/:id/normal',dowloadCtrl.realizarDowloadNormal);
router.get('/:id/tumblr',dowloadCtrl.realizarDowloadTumblr);*/

module.exports = router;
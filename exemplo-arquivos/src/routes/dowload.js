const express = require('express');

const dowloadCtrl = require('../controller/DowloadController');

const router = express.Router();


router.get('/listar', dowloadCtrl.listarTodosArquivos);
router.get('/:id',dowloadCtrl.realizarDowload);

module.exports = router;
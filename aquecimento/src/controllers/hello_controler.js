const express =required ('express');

const helloCtrl = require('../controllers/helo');

const router = express.Router();

const cors =require ('cors');

const appp =require()

//Web service/endpoint

router.get('/',helloCtrl.sendHello);

appp.use
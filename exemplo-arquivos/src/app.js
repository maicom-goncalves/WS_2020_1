const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const FileUpload = require('express-fileupload');

require('./config/db');

const app = express();

app.use(cors());
app.use(logger('dev'));

/**
*Habilita o uso de arquivos
*/
app.use(FileUpload());

app.use('/upload', require('./routes/upload'));
app.use('/dowload', require('./routes/dowload'));

module.exports=app;
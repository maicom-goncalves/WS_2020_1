const mongoose = require('mongoose');

const URI_DB = process.env.+ || 'mongodb://localhost/agenda';

mongoose
.connect(URI_DB,{ userNewUrlParser : true})
    .then(()=> console.log('MongoDB Conectado'))
    .catch(erro => console.log(erro));
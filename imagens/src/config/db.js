const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/imagens';

mongoose.connect(dbURI,{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected',() => console.log('Mongoose! Conectado em ' +dbURI));

mongoose.connection.on('disconnected', () => console.log('Mongoose! Desconectado de ' +dbURI));

mongoose.connection.on('error' ,(erro) => console.log('Mongoose! Erro na conexão: ' +erro));

process.on('SIGINT', () =>{
	mongoose.connection.close(() =>{
		console.log('Mongoose! Desconectado pelo termino da aplicação');
		process.exit(0);
	});
});
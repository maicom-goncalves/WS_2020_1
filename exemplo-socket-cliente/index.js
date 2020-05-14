const socket = io('http://localhost:3000');

const renderizarMensagem = objetoMensagem =>{
	const novaLinha =`
	<div>
		<b>${objetoMensagem.usuario}</b>:${objetoMensagem.mensagem}
	</div>`;

	$('#mensagensChat').append(novaLinha);
};
socket.on('mensagemRecebida', objetoMensagem =>{
	renderizarMensagem(objetoMensagem);
});

socket.on('mensagensAnteriores',
mensagens => mensagens.forEach(m =>renderizarMensagem(m))
);

$('form').submit(event =>{
	event.preventDefault();

	const usuario = $('#usuario').val();
	const mensagem = $('#mensagem').val();
	$('#mensagem').val('');

	const objetoMensagem = { usuario, mensagem};
	socket.emit('enviarMensagem', objetoMensagem);
	renderizarMensagem(objetoMensagem);
});
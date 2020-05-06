const controller = {

    realizarDowload: (req, res) =>{
        const id = req.params.id;
        Imagem.findById(id, (erro, anexo) =>{
            if (erro) {
                console.log(erro);
                res.status(500).json({ menssagem: 'Erro ao tentar fazer dowload'})
            }else{
                if(anexo) {
                    const nomeImagem = anexo.filename;
                    const readStream = anexo.read();
                   
                    res.attachment(nomeImagem);
                    readStream.pipe(res);
                } else {
                    res.status(404).json({menssagem : 'Imagem não encontrada'});
                }
            }
        });
    },

    listarTodasImagens: (req, res) =>{

        const Imagem = require('../models/Imagem');
        Imagem.find()
        .then(resposta => {
            const imagens = resposta.map(
                imagem =>{
                    return{
                        tamanhoEmBytes: imagem.length,
                        nome: imagem.filename,
                        dataUpload: imagem.uploadDate,
                        tipo: imagem.contentType,
                        id: imagem._id
                    };
                }
            );
            res.json(imagens);
        })
            
        .catch(erro =>{
            console.log(erro);
            res.status(500).json({ menssagem: 'Erro ao listar as imagens'});
        });
    }
};

module.exports = controller;
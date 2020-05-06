const fs = require('fs');

const controller = {

    realizarUpload: (req, res) =>{
        const { name,mimetype, data } = req.files['imagem'];
        const nomeImagem = `${new Date().getTime()}`; 
        console.log(nomeImagem);

        fs.writeFileSync(nomeImagem, data);
        
        const readStream = fs.createReadStream(nomeImagem);

        const Imagem = require('../models/Imagem');
        const metadados = {
            filename: name, 
            contentType: mimetype
        };
        Imagem.write(metadados, readStream, (erro, imagem)=>{
            fs.unlinkSync(nomeImagem);
            if(erro){
                console.log(erro);
                res.status(500).json({erro: 'Erro ao tentar salvar a imagem'});
            } else{
                res.status(201).json({mensagem: 'imagem salva', id: imagem._id });
            }  
        });    
    }
};

module.exports = controller; 
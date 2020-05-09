const fs = require('fs');
const multer = require('multer');

const controllers = {


    realizarUpload: (req, res) => {
        const { name, mimetype, data } = req.files['imagem'];
        multer({
            storage: multer.diskStorage({

                destination: (req, file, cb) => {

                    cb(null, './app');
                },

                filename: (req, file, cb) => {


                    cb(null, Date.now().toString() + '-' + file.originalname);

                }

            }),
            fileFilter: (req, file, cb) => {

            const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

            if (isAccepted) {
                fs.writeFileSync(nomeImagem, data);
                return cb(null, true);

            }

            return cb(null, false);
        }

        
        });

        //fs.writeFileSync(nomeImagem, data);

        const readStream = fs.createReadStream(nomeImagem);
        const Imagem = require('../models/Imagem');
        const metadados = { filename: name, contentType: mimetype }


        Imagem.write(metadados, readStream, (erro, arquivo) => {
            if (erro) {
                console.log(erro);
                res.status(500).json({ erro: 'Erro ao tentar salvar a imagem' });
            } else {
                res.status(201).json({ mensagem: 'Imagem foi salva', id: arquivo._id })
            }
        });
    },

};

module.exports = controllers; 

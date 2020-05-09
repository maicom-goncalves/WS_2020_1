const { createModel } = require('mongoose-gridfs');
const resizeImg = require('resize-img');

const Imagem = createModel(
    { modelName: 'Imagem' }
);

(async () => {
    const image = await resizeImg(fs.readFileSync(Imagem), {
        width: 128,
        height: 128
    });

    fs.writeFileSync(Imagem, image);
})();

module.exports = Imagem;
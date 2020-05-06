const controller = {
    realizarUpload: (req, res) =>{
        console.log(req.files);
        res.send('ok');
    }
};

module.exports = controller;
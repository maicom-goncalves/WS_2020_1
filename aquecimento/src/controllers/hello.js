const express =required('express');

const controler = {
    sendHeloo:(req,res ) =>{
        const msg = `Hello ${new Date()}`;
        res.json(msg)
    }

};


module.exports = controllers;
const express = require('express')
const Router = express.Router();
const SHOPMODEL = require('../../model/Shop.model')

Router.get('/info', async (req, res)=>{
    let details = await SHOPMODEL.find({});
    res.json(details);
})



module.exports = Router;
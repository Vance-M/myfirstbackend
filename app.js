const express = require('express');
const cors = require('cors');
const app = express();
const { doughnuts } = require('./donuts.js');
app.use(cors());


app.get('/doughnuts', (req, res) =>{
    res.json({ results: doughnuts });
});

module.exports = {
    app
};
const express = require('express');
const cors = require('cors');
const app = express();
const { doughnuts } = require('./donuts.js');
app.use(cors());


app.get('/doughnuts', (req, res) =>{
    res.json({ results: doughnuts });
});
app.get('/doughnuts/:id', (req, res) =>{
    const id = Number(req.params.id);
    const selectedDoughnut = doughnuts.find((doughnut) => doughnut.id === id);
    res.json({ results: selectedDoughnut });
});
module.exports = {
    app
};
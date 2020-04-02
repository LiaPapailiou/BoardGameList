const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/boardgames', (req, res) =>{
  fetch(`https://bgg-json.azurewebsites.net/hot`)
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.get('/api/boardgames/description/:gameId',  (req,res) => {
   fetch(`https://bgg-json.azurewebsites.net/thing/${req.params.gameId}`)
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.listen(9000);

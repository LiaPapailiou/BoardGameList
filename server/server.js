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

// get ID from second API
app.get('/api/boardgames/:name', (req, res) => {
  fetch(`https://www.boardgameatlas.com/api/search?name=${req.params.name}&client_id=GRYCkBFss8`)
    .then((res) => res.json())
    .then((data) => {
    const id = JSON.stringify(data.games[0].id);
    res.send(id);
  });
});

// get video with the previous ID
app.get('/api/boardgames/video/:gameId', (req, res) => {
  fetch(`https://www.boardgameatlas.com/api/game/videos?limit=20&client_id=GRYCkBFss8&game_id=${req.params.gameId}`)
    .then((res) => res.json())
    .then((data) => {
      const video = JSON.stringify(data.videos[0].url);
      res.send(video);
    });

});
app.listen(9000);

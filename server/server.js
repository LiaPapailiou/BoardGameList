const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/boardgames', (req, res) =>{
  // fetch(`http://localhost:9000/mock.json`)
 fetch(`https://bgg-json.azurewebsites.net/hot`)
    .then((res) => res.json())
    .then((data) => {
      if(!data) {
        res.status(404).send('Resource Not Found');
        return;
      }
      res.send(data);
    });
});

app.get('/api/boardgames/description/:gameId',  (req,res) => {
  // fetch(`http://localhost:9000/thing.json`)
   fetch(`https://bgg-json.azurewebsites.net/thing/${req.params.gameId}`)
    .then((res) => res.json())
    .then((data) =>  {
       if(!data) {
      res.status(404).send('Resource Not Found');
      return;
    }
    res.send(data);
  });
});

// TODO
// Get ID from second API
app.get('/api/boardgames/:name', async (req, res) => {
  await fetch(`https://www.boardgameatlas.com/api/search?name=${req.params.name}&client_id=GRYCkBFss8`)
    .then((res) => res.json())
    .then((data) => {
      if(!data) {
        res.status(404).send('Resource Not Found');
        return;
      }
    // const id = JSON.stringify(data.games[0].id);
    res.send(data.games[0].id);
  });
});

// Get video with the previous ID
app.get('/api/boardgames/video/:gameId', (req, res) => {
  fetch(`https://www.boardgameatlas.com/api/game/videos?limit=20&client_id=GRYCkBFss8&game_id=${req.params.gameId}`)
    .then((res) => res.json())
    .then((data) => {
      if(!data) {
        res.status(404).send('Resource Not Found');
        return;
      }
      // const videoLink = JSON.stringify(data.videos[0].url);
      res.send(data.videos[0].url);
    });
});

// GLOBAL ERROR HANDLER
app.use((req, res, next) => {
  const error = new Error('Internal Server Error');
  error.status = 500;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.send(err.message);
  next();
});

app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`);
});

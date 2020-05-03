const express = require('express');
const cors = require('cors');

const app = express();
const port = 4200;

const { hats, sneakers, jackets, womens, mens } = require('./data');

app.use(cors());

app.get('/catalog', function(req, res) {
  res.send([
    {
      id: 1,
      title: 'Hats',
      url: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      url: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      url: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      url: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Mens',
      url: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png'
    }
  ]);
});

app.get('/catalog/collections', function (req, res) {
  res.send([
    {
      id: 1,
      name: 'Hats',
      rest: '/hats'
    },
    {
      id: 2,
      name: 'Jackets',
      rest: '/jackets'
    },
    {
      id: 3,
      name: 'Sneakers',
      rest: '/sneakers'
    },
    {
      id: 4,
      name: 'Womens',
      rest: '/womens'
    },
    {
      id: 5,
      name: 'Mens',
      rest: '/mens'
    }
  ]);
});

app.get('/catalog/hats', function(req, res) {
  res.send(hats);
});

app.get('/catalog/hats/:limit', function(req, res) {
  res.send(hats.slice(0, req.params.limit));
});

app.get('/catalog/sneakers', function (req, res) {
  res.send(sneakers);
});

app.get('/catalog/sneakers/:limit', function(req, res) {
  res.send(sneakers.slice(0, req.params.limit));
});

app.get('/catalog/jackets', function (req, res) {
  res.send(jackets);
});

app.get('/catalog/jackets/:limit', function(req, res) {
  res.send(jackets.slice(0, req.params.limit));
});

app.get('/catalog/womens', function (req, res) {
  res.send(womens);
});

app.get('/catalog/womens/:limit', function(req, res) {
  res.send(womens.slice(0, req.params.limit));
});

app.get('/catalog/mens', function (req, res) {
  res.send(mens);
});

app.get('/catalog/mens/:limit', function(req, res) {
  res.send(mens.slice(0, req.params.limit));
});

app.listen(port, function() {
  console.log(`Listening http://localhost:${port}`);
});

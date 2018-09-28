const express = require('express');

const app = express();
const port = 3000;

function firstMiddleware(req, res, next) {
  res.write('<div style="font-size:5em">Middleware 1</div>');
  next();
  res.write('<div style="font-size:5em">Middleware 1 AGAIN</div>');
  res.end();
}

function secondMiddleware(req, res, next) {
  res.write('<div style="font-size:5em">Middleware 2</div>');
  next();
  res.write('<div style="font-size:5em">Middleware 2 AGAIN</div>');
}

function helloMiddleware(req, res, next) {
  res.write('<div style="font-size:5em">Hello World!</div>');
}

app.use(firstMiddleware, secondMiddleware);

app.get('/hello', helloMiddleware);

app.use(function(req, res, next) {
  res.write('<div style="font-size:5em">Middleware 3</div>');
});

app.listen(port, () => console.log(`Sample App listening on port ${port}!`));

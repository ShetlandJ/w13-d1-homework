//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require("express");
var filmRouter = new express.Router();

filmRouter.get('/', function(req, res) {
  res.json({films});
});

filmRouter.get("/index", function(req, res){
  res.json({data: {films}})
})

filmRouter.post('/', function(req, res) {
  films.push(req.body.film)
  res.json({data:films})
});

filmRouter.get('/:id', function(req, res) {
  res.json({films: films[req.params.id]});
});

filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({films})
});

filmRouter.put('/new-review/:id', function(req, res){
  var film = films[req.params.id];
  film.reviews.push(req.body);
  films[req.params.id] = film;
  res.json({ data: films });
});

filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1)
  res.json({data:films})
});

module.exports = filmRouter;

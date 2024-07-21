var express = require("express");
var router = express();

router.get('/', function(req, res) {
  res.render('index', {title: "Home"});
});

router.get('/status', function(req, res) {
  res.render('status', {title: "Status"});
});

router.get('/status/thelasttornado', function(req, res) {
  res.render('status/thelasttornado', {title: "The Last Tornado"});
});

router.get('/uploads', function(req, res) {
  res.render('uploads', {title: "Uploads"});
});

module.exports = router;
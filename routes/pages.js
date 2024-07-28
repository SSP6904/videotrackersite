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

router.get('/uploads/list', function(req, res) {
  fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3Is6u3hFiIhc5glfOUJLOA&type=video&key=AIzaSyBsXVudQPZyVZMcgtYJBsI7RFc3c_Dzd1o&maxResults=100000&order=date")
  .then((res)=> res.json())
  .then((data)=>res.json(data))
  .catch((err)=>{
    console.log("error occured", err)
    res.json("error occured", err);
  });
});

module.exports = router;
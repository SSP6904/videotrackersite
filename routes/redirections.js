var express = require("express");
var router = express();

router.get('/requestform', function(req, res) {
  res.redirect('https://forms.gle/Fk2C4abMqHr6fsrXA');
});

module.exports = router;
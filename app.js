var express = require('express');
var app = express();
var pagelnks = require('./routes/pages');
var redirections = require('./routes/redirections');
var port = process.env.PORT || 2031;

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(pagelnks);
app.use(redirections);

app.listen(port);
console.log(`Server is listening on port ${port}`);
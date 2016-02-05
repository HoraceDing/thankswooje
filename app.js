
var express = require('express');
var app = express();
var exphbs = require('express handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT);
});


var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var superagent = require('superagent');

app.set('port', (process.env.PORT || 8080));
app.engine('html', require('ejs').renderFile);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/ct/*', function(req, res) {
  var url = "http://results.chronotrack.com/mobile/results/" + req.params['0'];

  superagent
    .get(url)
    .accept('json')
    .end(function(err, resp) {
      if(err) {
        return res.json({
          is_success: false,
          error: err
        });
      }

      res.json(resp.body);
    });
});

app.get('/*', function(req, res) {
  res.render('index.html');
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

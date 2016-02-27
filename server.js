// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var googleTranslate = require('google-translate')("AIzaSyA80zdEIei8jP04pnU2RJjetjaqATL_2Fw");
var lingoCtrl = require('./controllers/lingoCtrl.js');
var quizCtrl = require('./controllers/quizCtrl.js');
var answerCtrl = require('./controllers/answerCtrl');
var asyncSeries = require('async-series');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
	res.sendFile('translate.html', {root: __dirname + '/public/html'})
  //res.send('Hello')
});

app.get('/quizify', function(req, res){
	res.sendFile('quizify.html', {root: __dirname + '/public/html'})
  //res.send('Hello')
});


app.post('/translator', lingoCtrl.createTranslate)
app.post('/quiz', quizCtrl.createQuiz)
app.post('/answers', answerCtrl.createAnswer)



googleTranslate.translate('Your mother was a hampster', 'es', function(err, translation) {
  console.log(translation.translatedText);
  // =>  Mi nombre es Brandon
});


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
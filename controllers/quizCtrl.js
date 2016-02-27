var async = require('async');

var googleTranslate = require('google-translate')("AIzaSyA80zdEIei8jP04pnU2RJjetjaqATL_2Fw");

var words = [
{
	word : "dog"
},
{
	word : "cat"
},
{
	word : "rabbit"
},
{
	word : "goldfish"
},
{
	word : "earthquake"
},
{
	word : "apple"
},
{
	word : "water"
},
{
	word : "mustache"
},
{
	word : "tornado"
},
{
	word : "telephone"
}]




function createQuiz (req, res) {

	tasks = [];
	happyTime = [];

	for (var i=0; i < words.length; i++){
		(function (i) {
			tasks.push(function (nextWord) {
				googleTranslate.translate(words[i].word, req.body.from,
					function(err, translation){
						console.log(err, translation)
						happyTime.push(translation.translatedText)
						nextWord()
					}
				)
			})
		})(i)
	};

	toDo = [];
	partyTime = [];

	for (var i=0; i < words.length; i++){
		(function (i) {
			toDo.push(function (nextWord) {
				googleTranslate.translate(words[i].word, req.body.to,
					function(err, translation){
						console.log(err, translation)
						partyTime.push(translation.translatedText)
						nextWord()
					}
				)
			})
		})(i)
	};

	async.series(tasks, function (err) {
		async.series(toDo, function (err) {		
			res.send({
				happyTime : happyTime,
				partyTime : partyTime
			})
		}) 
	});
}

	// async.series(tasks, function () {
	// 	async.series(toDo, function () {
	// 		res.send ({partyTime: partyTime, happyTime: happyTime})
	// 	)}
	// };


	module.exports = {
		createQuiz : createQuiz
	}
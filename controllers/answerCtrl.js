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

function createAnswer (req, res) {
	// if (req.body.one === words[0].word) {
	// 	console.log('this worked')
	// }


	// tasks = [];
	// partyTime = [];

	// for (var i=0; i < words.length; i++){
	// 	(function (i) {
	// 		tasks.push(function (nextWord) {
	// 			googleTranslate.translate(words[i].word, req.body.to,
	// 				function(err, translation){
	// 					console.log(err, translation)
	// 					partyTime.push(translation.translatedText)
	// 					nextWord()
	// 				}
	// 			)
	// 		})
	// 	})(i)
	// };

	// async.series(tasks, function (err) {
	// 	console.log(partyTime)
	// 	res.send('Thanks')
	// });
}

module.exports = {
	createAnswer : createAnswer
}
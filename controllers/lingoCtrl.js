var googleTranslate = require('google-translate')("AIzaSyA80zdEIei8jP04pnU2RJjetjaqATL_2Fw");

function createTranslate (req, res) {
	// console.log(req.body);
	// res.send('OK');	
	googleTranslate.translate(req.body.translation, req.body.translateFrom, req.body.translateTo, function(err, translation){
			console.log(translation.translatedText);
			res.send(translation.translatedText)
		});
	// googleTranslate.translate('Your mother was a hampster', 'es', function(err, translation) {
 //    	console.log(translation.translatedText);
 //  	});	


	
  	// res.send(word);


}




module.exports = {
	createTranslate		: createTranslate
}
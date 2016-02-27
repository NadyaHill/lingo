angular.module('Lingo')
	.controller("lingoController", ["$scope", "$http", function($scope, $http){


		$scope.translationizing = function(newTranslate){
			console.log(newTranslate);
			$http.post('/translator', newTranslate)
				.then(function(returnData){
					$scope.translatedWord = returnData.data
				})

		}




		$scope.quiz = function(newQuiz) {
			console.log(newQuiz);
			$http.post('/quiz', newQuiz)
				.then(function(returnData){
					console.log(returnData)
					$scope.quizList = returnData.data.happyTime
					$scope.quizAnswers = returnData.data.partyTime 
				}
			)
		}

		$scope.quizSubmit = function(newAnswer) {
			console.log(newAnswer)
			console.log($scope.quizAnswers)

			// if (newAnswer === $scope.quizAnswers)
			// 	console.log("Hell Yeah...I'm out")
			// else {
			// 	console.log("Im still out")
			// }


			// console.log(newAnswer);
			// console.log("I saw this!");
		}





	}])
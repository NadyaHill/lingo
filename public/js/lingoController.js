angular.module('Lingo')
	.controller("lingoController", ["$scope", "$http", function($scope, $http){


		$scope.translationizing = function(newTranslate){
			console.log(newTranslate);
			$http.post('/translator', newTranslate)
				.then(function(returnData){
					$scope.translatedWord = returnData.data

				})

		}






	}])
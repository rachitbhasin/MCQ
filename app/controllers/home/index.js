var mcqApp = angular.module('MCQ');

mcqApp.controller('HomeController', ['$scope', '$state', function(scope, state){

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}
}])
var mcqApp = angular.module('MCQ');

mcqApp.controller('CreateController', ['$scope', '$state', function(scope, state){
	scope.title = "asdfa";
	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}
}])
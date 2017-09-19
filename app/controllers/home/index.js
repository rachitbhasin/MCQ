var mcqApp = angular.module('MCQ');

mcqApp.controller('HomeController', ['$scope', '$state', 'getMcqList', function(scope, state, getMcqList){

	scope.mcqList = getMcqList;

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}

}])
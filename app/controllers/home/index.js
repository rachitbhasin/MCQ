var mcqApp = angular.module('MCQ');

mcqApp.controller('HomeController', ['$scope', '$state', 'getMcqList', function(scope, state, getMcqList){

	scope.mcqList = getMcqList;

	scope.imagePath = "http://lorempixel.com/output/abstract-q-c-120-120-1.jpg";

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}

}])
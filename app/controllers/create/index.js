var mcqApp = angular.module('MCQ');

mcqApp.controller('CreateController', ['$scope', '$state', function(scope, state){

	scope.mcqData = {
		title: "",
		technology: "",
		questions: [
		]
	};

	scope.onAddClicked = function(){
		scope.mcqData.questions.push({
			question: "",
			code: "",
			answers: [
				{answer: "", isSelected: false},
				{answer: "", isSelected: false},
				{answer: "", isSelected: false},
				{answer: "", isSelected: false},
			]
		});
	}

	scope.onSaveClicked = function() {
		console.log(scope.mcqData);
	}

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}

	scope.onCodeChange = function(event){
		console.log(event);

		console.log(arguments);
	}
}])
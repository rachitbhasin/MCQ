angular.module('MCQ').controller('CreateController', ['$scope', '$state', function(scope, state){

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
			link:"",
			correctAnswer: undefined,
			answers: [
				{text: ""},
				{text: ""},
				{text: ""},
				{text: ""},
			]
		});
	}

	scope.onSaveClicked = function(event) {
		event.preventDefault();
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
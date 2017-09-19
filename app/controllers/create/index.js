angular.module('MCQ').controller('CreateController', ['$scope', '$state', 'mcqService', function(scope, state, mcqService){

	scope.mcqData = {
		title: "",
		technology: "",
		questions: [
		]
	};

	scope.onAddClicked = function(event){
		event.stopPropagation();
    	event.preventDefault();
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
		console.log("onAdd")
	}

	scope.onSaveClicked = function(event) {
		event.stopPropagation();
    	event.preventDefault();
    	console.log("onSave");
		console.log(scope.mcqData);
		mcqService.createMcq(angular.copy(scope.mcqData));
		state.go('home');
	}

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}
}])
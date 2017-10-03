angular.module('MCQ').controller('CreateController', ['$scope', '$state', 'mcqService','$mdToast', function(scope, state, mcqService, mdToast){

	scope.mcqData = {
		title: "Test",
		technology: "java",
		questions: [
		]
	};

	scope.onAddClicked = function(event){
		event.stopPropagation();
    	event.preventDefault();
		scope.mcqData.questions.push({
			question: "question_" + (scope.mcqData.questions.length + 1),
			code: "test fucntion_" + (scope.mcqData.questions.length + 1),
			link:"Link_" + (scope.mcqData.questions.length  + 1),
			correctAnswer: Math.floor(Math.random() * 4),
			answers: [
				{text: "Ans_1"},
				{text: "Ans_2"},
				{text: "Ans_3"},
				{text: "Ans_4"},
			]
		});
		console.log("onAdd")
	}

	scope.onSaveClicked = function(event) {
		event.stopPropagation();
    	event.preventDefault();
		if(scope.mcqForm.$invalid){
			mdToast.show(
		      mdToast.simple()
		        .textContent('Incomplete form!')
		        .position('top right')
		        .hideDelay(3000)
		    );
		}else{
			mcqService.createMcq(angular.copy(scope.mcqData));
			state.go('home');	
		}
		
	}

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}
}])
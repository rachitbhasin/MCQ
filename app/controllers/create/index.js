angular.module('MCQ').controller('CreateController', ['$scope', '$state', 'mcqService','$mdToast', function(scope, state, mcqService, mdToast){

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
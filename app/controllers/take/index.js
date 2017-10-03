angular.module('MCQ').controller('TakeController', ['$scope', '$state', 'getMcqByIndex', '$mdToast', function(scope, state, getMcqByIndex, mdToast){
	scope.mcqData = getMcqByIndex;

	scope.onSubmitClicked = function(event) {
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
			console.log("save");
			// mcqService.createMcq(angular.copy(scope.mcqData));
			// state.go('home');
			scope.mcqData.isSubmitted = true;	
		}
	}

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}
}])
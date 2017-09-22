angular.module('MCQ').controller('UpdateController', ['$scope', '$state', 'getMcqByIndex', '$mdToast', function(scope, state, getMcqByIndex, mdToast){
	scope.mcqData = getMcqByIndex;

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
			console.log("save");
			// mcqService.createMcq(angular.copy(scope.mcqData));
			// state.go('home');	
		}
		
	}

	// @param nextState 
	scope.gotoState = function(nextState){
		state.go(nextState);
	}
}])
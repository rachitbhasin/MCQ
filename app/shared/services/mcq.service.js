angular.module('MCQ').service('mcqService', [function(){
	
	this.mcqList = [];

	this.createMcq = function(mcq){
		this.mcqList.push(mcq);
	}

	this.getMcqList = function() {
		return this.mcqList;
	}

	this.getMcqByIndex = function(index){
		return this.mcqList[index]
	}

	this.deleteMcqByIndex = function(index){
		this.mcqList = this.mcqList.filter((mcq, i) => i !== index);
		return this.mcqList;
	}
}]);
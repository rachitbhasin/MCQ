'use strict'

var mcqApp = angular.module('MCQ', ['ui.router', 'ui.ace', 'ngMaterial', 'ngMessages']);


mcqApp.config(['$compileProvider',function(compileProvider){
	// pass true as argument for development environment
        compileProvider.debugInfoEnabled(true);
        // we don't need to compile comment and css class directives
        compileProvider.commentDirectivesEnabled(false);
        compileProvider.cssClassDirectivesEnabled(false);
}]);

// Routes configuration
mcqApp.config([
	'$stateProvider', 
	'$locationProvider', 
	'$urlRouterProvider', 
	(stateProvider, locationProvider, urlRouterProvider) => {

	locationProvider.html5Mode(true);

	urlRouterProvider.otherwise('/notFound');

	var notFound = {
		name: 'notFound',
		url: '/notFound',
		template: '<h3>Page notFound </h3>'
	}

	var homeState = {
		name: 'home',
		url: '/home',
		templateUrl: './controllers/home/index.html',
		controller: 'HomeController',
		resolve: {
			getMcqList: function(mcqService) {
				return mcqService.getMcqList();
			}
		}
	}

	var createState = {
		name: 'create',
		url: '/create',
		templateUrl: './controllers/create/index.html',
		controller: 'CreateController',
	}

	var updateState = {
		name: 'update',
		url: '/update',
		templateUrl: './controllers/update/index.html',
		controller: 'UpdateController',
		params: {
			index: null
		},
		resolve: {
			getMcqByIndex: ['$stateParams', 'mcqService', function(stateParams, mcqService){
				if(stateParams.index >= 0){
					return mcqService.getMcqByIndex(stateParams.index);
				}
			}]
		}
	}

	stateProvider.state(homeState);
  	stateProvider.state(createState);
  	stateProvider.state(notFound);
  	stateProvider.state(updateState);
}]);
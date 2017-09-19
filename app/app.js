'use strict'

var mcqApp = angular.module('MCQ', ['ui.router', 'ui.ace', 'ngMaterial']);


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

	var aboutState = {
		name: 'create',
		url: '/create',
		templateUrl: './controllers/create/index.html',
		controller: 'CreateController',
	}

	stateProvider.state(homeState);
  	stateProvider.state(aboutState);
  	stateProvider.state(notFound);
}]);
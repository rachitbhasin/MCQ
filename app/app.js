'use strict'

var mcqApp = angular.module('MCQ', ['ui.router']);

mcqApp.controller('homeController', ['$scope', function($scope){
	$scope.title = 'hello';
}])

mcqApp.config([
	'$stateProvider', 
	'$locationProvider', 
	'$urlRouterProvider', 
	($stateProvider, $locationProvider, $urlRouterProvider) => {

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/notFound');

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
	}

	var aboutState = {
		name: 'create',
		url: '/create',
		templateUrl: './controllers/create/index.html',
		controller: 'CreateController',
	}

	$stateProvider.state(homeState);
  	$stateProvider.state(aboutState);
  	$stateProvider.state(notFound);
}])


'use strict'

var mcqApp = angular.module('MCQ', ['ui.router']);



mcqApp.config(['$stateProvider', ($stateProvider) => {

	var homeState = {
		name: 'home',
		url: '/home',
		template: '<h3>Home</h3>'
	}

	var aboutState = {
		name: 'about',
		url: '/about',
		template: '<h3>About</h3>'
	}

	$stateProvider.state(homeState);
  	$stateProvider.state(aboutState);
}])
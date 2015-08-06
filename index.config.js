

(function(){
	'use strict';
	function config($urlRouterProvider){
		$urlRouterProvider.otherwise('/');
	}

	angular.module('testingApp')
		.config(config)
})();
(function(){
	'use strict';
	function config($stateProvider){
		$stateProvider
	    .state("main", {
	      url: "/",
	      templateUrl: "./app/main/main.html",
	      controller: "main_Ctrl as main"
	    });
	}
	angular.module('testingApp')
		.config(config)
		
})();
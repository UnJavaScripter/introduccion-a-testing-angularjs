(function(){
	'use strict';
	function main_Ctrl(){
		var algo = 23
		angular.extend(this, {
			texto: '¡Funciono!'
		})
	}

	angular.module('testingApp')
		.controller('main_Ctrl', main_Ctrl)
})();
(function(){
	'use strict';
	function meFaltan_directive(){
		var link = function (scope, elem, attr){
			

			scope.$watch('cosas', function(){
				
				scope.faltan = 0;
				
				scope.cosas.forEach(function(elemento){
					if(elemento.completada === false){
						scope.faltan += 1;
					}
				})
			}, true)
		}


		return {
			restrict: 'E',
			template:	'<span ng-if="faltan===0">¡¡¡¡Estoy libre!!!!</span><span ng-if="faltan>0">Tengo {{faltan}} cosas pendientes</span>',
			scope: {
				cosas: '='
			},
			link: link,
		}
	}

	angular.module('testingApp')
		.directive('meFaltan', meFaltan_directive)
})();
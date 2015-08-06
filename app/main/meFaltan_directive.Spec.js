(function(){
	'use strict';
	describe('Testing meFaltan_directive', function(){
		var compile, scope, directiveElem;

		 
		beforeEach(function(){
		  module('testingApp');
		   
		  inject(function($compile, $rootScope){
		    compile = $compile;
		    scope = $rootScope.$new();
		  });
		   
		  directiveElem = getCompiledElement();
		});
		 
		function getCompiledElement(){
			
			var element = angular.element('<me-faltan cosas="[{tarea:\'Probar directiva\', completada: true}]"></me-faltan>');
			var compiledElement = compile(element)(scope);
			scope.$digest();
			return compiledElement;
		}


		it('scope.faltan debería ser === 0 cuando todas las tareas pendientes estén cumplidas', function(){
			expect(directiveElem.isolateScope().faltan).toBe(0);
		});


	})
})();
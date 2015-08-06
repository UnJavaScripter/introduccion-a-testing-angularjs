(function(){
	'use strict';
	describe('Testing main_Ctrl', function(){
		beforeEach(module('testingApp'));

		var Ctrl;

		// Inicializamos el controlador
		beforeEach(inject(
		    function ($controller, $rootScope) {

		        Ctrl = $controller('main_Ctrl', {});
		    })
		);

		it('should show the string "¡Funciono!"', function(){

			expect(Ctrl.texto).toBe('¡Funciono!');
		});


	})
})();
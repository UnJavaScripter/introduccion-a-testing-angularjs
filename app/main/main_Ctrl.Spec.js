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

		it('debería mostrar el string  "¡Funciono!"', function(){

			expect(Ctrl.texto).toBe('¡Funciono!');
		});

		it('listaDeCosas debería tener length de 3', function(){
			expect(Ctrl.listaDeCosas.length).toBe(3);
		});

		it('Si cosaNueva está vacío no se deberían agregar elementos a listaDeCosas', function(){
			Ctrl.cosaNueva = '';
			Ctrl.agregarCosa();
			expect(Ctrl.listaDeCosas.length).toBe(3);
		});
		it('listaDeCosas debería agregar una nueva cosa por hacer', function(){
			Ctrl.cosaNueva = 'Probando, probando, 123';
			Ctrl.agregarCosa();
			expect(Ctrl.listaDeCosas.length).toBe(4);
		});


	})
})();
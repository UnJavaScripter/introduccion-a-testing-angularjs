(function(){
	'use strict';
	function main_Ctrl(){
		
		angular.extend(this, {
			texto : '¡Funciono!',
			listaDeCosas : [
				{ tarea: "Hacer diapositivas", completada: false },
				{ tarea: "Comparar pan", completada: true },
				{ tarea: "Pagar Internet", completada: false}
			],
			agregarCosa : function(){
				if(this.cosaNueva.length > 0){
				
					this.listaDeCosas.push({tarea: this.cosaNueva, completada: false});
				}
				this.cosaNueva = "";
			},
		})

	}

	angular.module('testingApp')
		.controller('main_Ctrl', main_Ctrl)
})();
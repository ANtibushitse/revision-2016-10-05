// Mon fichier Js

// IIFE : Immediately-Invoked Function Expression
(function(){
	console.log('Bienvenue.', 'Ca va ?');
	
	// Hoisting	
	var batiment = "Immeuble 01";

	function freiner(){
		console.log('fonction freiner PRINCIPALE');
	}

	function rouler(){
		console.log('fonction rouler');
		console.log("Batiment: ", batiment);

		var voiture = "vroom vroom";
		console.log("Voiture: ", voiture);

		function bouger(){
			console.log('fonction bouger');
		}

		bouger();// Appelle et exécute la fonction bouger

		freiner();
		
		/* Scope rouler:
			bouger, voiture
			batiment, rouler, freiner

		*/
	}

	rouler();
	freiner();
	// Scope : batiment , rouler, freiner


})();


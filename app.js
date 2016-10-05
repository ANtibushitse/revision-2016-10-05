// Mon fichier Js

// IIFE : Immediately-Invoked Function Expression
(function(){
	var philippe;// undefined
	console.log('Bienvenue.', 'Ca va ?');
	
	// Hoisting	
	var batiment = "Immeuble 01";
	

	
	console.log('fonction freiner PRINCIPALE');
	console.log(philippe);// philippe = undefined
	philippe = "Philippe Maurice";// "Philippe Maurice"
	console.log('fonction freiner PRINCIPALE');
	console.log(philippe);;// philippe = "Philippe Maurice"





	function rouler(){
		console.log('fonction rouler');

		var voiture = "vroom vroom";
		console.log("Voiture: ", voiture);

		function bouger(){
			console.log('fonction bouger');
		}

		function freiner(){
			console.log('fonction freiner ==> SECONDAIRE');
		}

		// bouger();// Appelle et exécute la fonction bouger

		// freiner();

		var batiment = "3";
		console.log("Batiment 2: ", batiment);
		console.log("Batiment 3: ", batiment);

		
		/* Scope rouler:
			bouger, voiture, freiner
			batiment, rouler, freiner

		*/
	}

	rouler();
	// freiner();
	// Scope : batiment , rouler, freiner


})();


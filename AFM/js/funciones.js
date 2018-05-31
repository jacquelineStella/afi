$(document).ready(function(){
	$('#contRegistro').hide();


		Observador();

		var nombre= $('#inpNombre').val();
		var email=$('#inpEmail').val();
		var contraseña=$('#inpPassword-1').val();
		var contraseña2=$('#inpPassword-2').val();

	 $(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
//REDIRECCIONAR PAGINA
	$('#btnRegistro').click(function(){		
		irRegistrar();
		
	});

// ACCION DE BOTONES INICIAR SESION/REGISTRARSE/CERRAR SESION
	$('#btnRegistrar').click(function(){		
		Registrar();		
	});

	$('#btnIniciar').click(function(){
		IniciarSesion();		
	});



	$('#btnCerrar').click(function(){
		CerrarSesion();		
	});
});

//FUNCIONES INICIAR SESION/REGISTRARSE/CERRAR SESION

function Registrar(){
	var nombre= $('#inpNombre').val();
		var email=$('#inpEmail').val();
		var contrasena=$('#inpPassword-1').val();
		firebase.auth().createUserWithEmailAndPassword(email, contrasena)
		.catch(function(error) {
  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorCode);
		  console.log(errorMessage);
		  
  // ...
});
}

function IniciarSesion(){
	var email=$('#inpEmail').val();
	var contrasena=$('#inpContrasena').val();
	firebase.auth().signInWithEmailAndPassword(email, contrasena).catch(function(error) {
	irPrincipal()
  // Handle Errors here.

  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}


function CerrarSesion(){
	firebase.auth().signOut()
	.then(function() {
  // Sign-out successful.
  	console.log("se cerro");
}).catch(function(error) {
  // An error happened.
  console.log("no cerro");
});
}


//OBSERVADOR DE USUARIOS CON SECCION ACTIVA

function Observador(){


	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	var email= user.email;
  	console.log(email);
  	var uid= user.uid;
  	console.log(uid);
  

  } else {
    // No user is signed in.
    console.log(" No existe"); 
     }
});

}




// NAVEGABILIDAD ENTRE PAGINAS

function irPrincipal() {
		window.location.replace("principal.html");
	}


function irIndex() {
		window.location.replace("index.html");
	}

function irRegistrar() {
		window.location.replace("registrar.html");
	}



 
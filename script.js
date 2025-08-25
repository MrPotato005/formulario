function validar() {
	var nombre1 = document.getElementById("nombre1");
	var nombre2 = document.getElementById("nombre2");
	var cedula = document.getElementById("cedula")
	var apellido1 = document.getElementById("apellido1");
	var apellido2 = document.getElementById("apellido2");
	var correo = document.getElementById("correo");
	var sexo = document.getElementsByName("sexo");
	var seleccionado = false;
	var elementoCHECK = document.getElementById("terminos");


	if (nombre1.value.length == 0) {
		alert("Debe ingresar el Primer Nombre");
		nombre1.focus();
		return false;
	}


	if (nombre2.value.length == 0) {
		alert("Debe ingresar el Segundo Nombre");
		nombre2.focus();
		return false;
	}



	if (apellido1.value.length == 0) {
		alert("Debe ingresar el Apellido Paterno");
		apellido1.focus();
		return false;
	}

	if (apellido2.value.length == 0) {
		alert("Debe ingresar el Apellido Materno");
		apellido2.focus();
		return false;
	}

	if (email.value.length == 0) {
		alert("Por favor, ingrese su Correo Electronico");
		email.focus();
		return false;
	}

	if (cedula.value.length == 0) {
		alert("Debe ingresar la cedula")
		cedula.focus();
		return false;
	}
	
	for (var i = 0; i < sexo.length; i++) {
		if (sexo[i].checked) {
			seleccionado = true;
		}
	}


	if (!elementoCHECK.checked) {
		alert("Debe aceptar los términos y condiciones");
		return false;
	}
	else {
		alert("Datos de formulario enviados exitosamente.");
		document.getElementById("myForm").reset();
		return false;
	}
}
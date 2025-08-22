function validar() {
	var user = document.getElementById("user");
	var apellido = document.getElementById("apellido");;
	var email = document.getElementById("email");
	var sexo = document.getElementsByName("sexo");
	var seleccionado = false;
	var elementoCHECK = document.getElementById("terminos");

	if(user.value.length == 0)
	{
      alert("Debe ingresar el Usuario");
    	user.focus();
    	return false;
	}

if(apellido.value.length == 0)
	{
      alert("Debe ingresar el Apellido");
    	apellido.focus();
    	return false;
	}

	if(email.value.length == 0)
	{
		alert("Por favor, ingrese su Email");
		email.focus();
		return false;
	}
	
	for(var i = 0; i<sexo.length; i++)
	{
		if(sexo[i].checked)
		{
			seleccionado = true;
		}
	}
	
	
	if(!elementoCHECK.checked)
	{
		alert("Debe aceptar los términos y condiciones");
		return false;
	}
  else
  {
    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	  return false;
	}
}
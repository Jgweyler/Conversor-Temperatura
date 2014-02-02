function calcularTemp(){
	var resultado; //Variable que almacenará el resultado.
	var tmp = escritura.value; // Variable que almacenará la cadena recogida en el campo de entrada.
	var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/; // Definimos una expresión regular.

	var m= tmp.match(regexp); //La variable M será un array que contiene las "coincidencias"
                              // con la expresión regular. Se creará una posición por cada "()".
	if (m) {
    	var num = m[1]; //m[1] contiene el número. Lo almacenamos en una variable.
    	var type = m[2];//m[2] contiene el típo de temperatura, Farenheit o Celsius.
    	num = parseFloat(num);

	    if (type == 'c' || type == 'C') { //Si es Celsius hará las operaciones para pasar a F.
	      resultado = (num * 9/5)+32;
	      resultado = resultado.toFixed(1)+" Farenheit"
	    }
	    else { // Si no, será al revés, tratamos con Farenheit para pasar a Celsius.
	      resultado = (num - 32)*5/9;
	      resultado = resultado.toFixed(1)+" Celsius"
	    }
    	salida.innerHTML = resultado; // Se mostrará el resultado en el contenedor con id=salida.
    }
  else { // Si no existe m (no hay coincidencia con la exp. regular) se lanza un error. 
    salida.innerHTML = "ERROR! No se ha introducido correctamente el formato de la temperatura.";
  }
}
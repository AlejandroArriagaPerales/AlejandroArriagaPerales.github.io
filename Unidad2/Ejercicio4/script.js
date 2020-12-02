elegir(prompt("1.- Sacar Potencia , 2.- Sacar Factorial"));
function elegir(opcion){
	if(opcion == 1){
		document.write("Potencia de Numero: " +numpotencia(prompt("Escriba la base: "), prompt("Escriba el exponente")));
	}else if (opcion == 2){
		document.write("Factorial del Numero: "+numfactorial(prompt("Escriba el numero de factorial: ")));
	}
}
 function numpotencia(n1,n2){
	return Math.pow(n1,n2);
 }
 function numfactorial(n1){ 	
	if (n1 == 0){ 
		return 1; 
	}
	return n1 * numfactorial(n1-1); 
}

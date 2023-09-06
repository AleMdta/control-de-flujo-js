/*
Control de flujo

  Brinda la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (elemento o instrucción detonante.)

Condicionales: palabras reservadas para evaluar si una condición se cumple o no. Parten de un true/false.

  palabra reservada if (condición) {
    bloque de código que se hará si se cumple la condición
  }

*/

//Condición simple
// if (camisaLimpia = true){
//   console.log("Felipe va a la fiesta"); //true
// }else{
//   console.log("No vas a la fiesta") //false
// }

// //condición híbrida (anidada)
// if (hambre = true){
//   console.log("Felipe come");
// }else if(chilaquileseVerdes = true){
//   console.log("Felipe come chilaquiles");
// }else{
//   console.log("Felipe no come");
// }

//Escribe un prorama que me ejecuta 3 mensajes diferentes
// 13:00 hrs "vamos a descanso"  /14:30 "vamos a comer" / "Lo siento, sigue programando"

// let hora = prompt("Hola, dime una hora");

// if (hora == 13){
//   console.log("Vamos a descanso");
// }else if(hora == 14){
//   console.log("Vamos a comer");
// }else{
//   console.log("Lo siento, sigue programando");
// }

//Promt -> forma de ingresar datos y hacer uso de ellos
// let dato = prompt("Hola, dime un numero");

//Switch
let opc = parseInt(prompt("¿A cuál piso vas?")); //Promt recibe cadenas de texto, por lo que se debe pasar a entero con la funcion parseInt(), para que el switch evalúe un número.
// piso = parseInt(opc);
switch(opc){
  case 1:
    console.log("Legaste al piso 1");
    break;
  case 2:
    console.log("Legaste al piso 2");
    break;
  case 3:
    console.log("Legaste al piso 3");
    break;
  case 4:
    console.log("Legaste al piso 4");
    break;
  case 5:
    console.log("Legaste al piso 5");
    break;
  default:
    console.log("Opción inválida");
}

//Funciones para un consultorio dental.

//Calcular costo de una consulta
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrec;
let costoExtraccion;

function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrec){

  let tipoServicio = "extraccion";
  tiempoConsulta = 120;
  emergencia = true;
  promocion = .10;
  clienteFrec = true;
  costoExtraccion = 5000;
  promoClienteFrec = 0.10;

  let costoTotal = costoExtraccion - promocion;

  if(clienteFrec == true){
    costoTotal = costoTotal - (promoClienteFrec*costoTotal);
  }
}

//Un ejemplo mas sencillo
function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente){
  let costoTotal = duracionMinutos * costoPorMinuto;


  if (clienteFrecuente){
      costoTotalConDescuento = costoTotal*.9;
  }

  return costoTotalConDescuento;

}

console.log(calcularCostoConsultaDos(45, 15, true));




/*
Switch: Menú de servivios.
elseif: Menú de doctores
if: mayor de edad
*/

//Validar que sea mayor de edad.
let mayorEdad = true;

if(mayorEdad == true){
  console.log("Sí puedes agendar cita");
}else{
  console.log("Trae a un adulto");
}


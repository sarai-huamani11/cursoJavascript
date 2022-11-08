//Funciones por declaración
function saludar() {
     let mensage = "selem"
    console.log(mensage)
  }
  
  saludar(); // 'selem'
  typeof saludar; // 'function'
 
// Funciones por expresión

const suma = function () {
    var a = 11
    var b = 06
    console.log(a+b)
  };
  
  suma();

// Funciones como objetos
const saludarse = new Function;
 var saludo = "hola sarai"
 console.log(saludo)
saludarse(); 

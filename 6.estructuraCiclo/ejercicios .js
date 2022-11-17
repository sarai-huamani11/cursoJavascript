// ESTRUCTURA DE CICLO

 // FOR : Este tipo de ciclo es determinado por la cantidad de datos, que contiene un objeto por ejemplo un arreglo, una matriz, etc.
 
 for (let i =1; i<=20;i++) {
    console.log(i)
   }  
 for (let i =2; i<=20;i+=2) {
    console.log(i)
}
for (let i =1; i<=20;i++) {
    if (i%2==0){
    console.log(i)
  }else {
    console.log(i)
}
}

 let vocales="aeiou"
    console.log (vocales.length)
    for (let i =0; i<vocales.length;i++) {
        console.log(vocales[i])
    }

 let texto= "hola como estas como te llamas"
 console.log(texto.length)
 let contador = 0
 for (let i =0; i<texto.length;i++) {
     if (texto[i]=="a"){
         contador+=1
    console.log(texto[3])
}
}
 console.log ("tienes",contador,"vocales a ")

 let text= "eucalipto"
 console.log(text.length)
 let contadr = 0
 for (let i =0; i<text.length;i++) {
     if (text[i]=="a","e","i","o","u"){
         contadr=5
}
}
 console.log ("tienes",contadr,"vocales a ")
 
 let tex= "eucalipto"
 let vocal ="aeiou"
 let contad = 5
 for (let i =0; i<text.length;i++) {
     switch (vocal) {
        case "a": case "e": case "i": case "o":  case "u":
         contad+=1
}
}
 console.log ("tienes",contad,"vocales  ")

 // WHILE :Este tipo de Ciclos se ejecutan siempre y cuando una condicion especifica sea verdadero (true)
 var i = 0;
 while (i < 20) {
   console.log(i);
   i++;
 }

 // DO WHILE : Variante del ciclo While, este tipo de ciclo primero ejecuta el bloque de código sin importar si la condición es verdadera, en seguida repetirá siempre y cuando la condición se cumpla.
 var z = 11;
do {
   console.log("Contador en " + z);
  z++;
}
while (z < 10);
// hacer un programa que me muestre el factorial de un numero

let numero = 11; 
// Número para calcular el factorial
let r = 1;
for(let i = numero; i>0; i--){
    r *= i;
}
console.log(r);
// hacer un programa que me determine si un texto es palimdromo
function palindromeChecker(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? "es palindromo" : "no es palindromo";
}
console.log(palindromeChecker("efe")); // es palindromo
console.log(palindromeChecker("sarai")); // no es palindromo
console.log(palindromeChecker("ojo")); // es palindromo


// hacer un programa que muestre los n numeros de la serie de fibonacci

// Cantidad de números que deseamos imprimir
var limite = 8;
var fibonacci = [0,1];

for(i=2; i <= limite; i++){
  fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
  console.log(fibonacci[i]);	
}
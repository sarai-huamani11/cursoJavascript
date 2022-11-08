function saluda(nombre,apellido){
   let saluda ="hola como estas" +nombre + apellido
   return saluda
}
console.log(saluda  ("maykol", "marca"))
// function contarvocales(texto){retur cantidadvocales}

function contarVocales(eucalipto){
    let contador=0
    for (let i=0 ; i<eucalipto.length;i++){
             switch(eucalipto[i]){
                 case 'a': case 'e': case 'i' : case 'o' : case 'u':
                 contador+=1
             }
    }
    let contarVocales='cantidad de vocales ' +contador
        return contarVocales
}
console.log(contarVocales('eucalipto'))
// function calculadora(num1, num2,operacion){retur total}
 
function calculadora (num1, num2,operacion){
    if (operacion =="suma"){
        total= num1+ num2
    }
    if (operacion =="resta"){
        total= num1- num2
    }
    if (operacion =="multiplicacion"){
        total= num1* num2
    }
    if (operacion =="division"){
        total= num1/ num2
    }
    return total
}
 console.log(calculadora(11,11,"suma"))

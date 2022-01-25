let respuesta

let pregunta = function () {
     (window.prompt ('¿Cual es el resultado de la cuenta 2 + 2?','Indica aqui tu respuesta')  === 4)
        console.log('Tu respuesta es correcta!!')
    else window.prompt ('No es la respuesta correcta :( ¿Cual es el resultado de la cuenta 2 + 2?', 'Indica aqui tu respuesta')
}; 
pregunta 


let respuesta = 0;
do {
  respuesta = prompt('¿Cual es el resultado de 2 + 2?')
  respuesta *= 1;
} while (!(respuesta === 4))
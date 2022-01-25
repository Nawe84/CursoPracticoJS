const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

//contamos cuantas veces aparece cada elemento en el array
const lista1Count = {};
//dentro del map se crea una funcion donde en el mapeo lo que hace es que si el 
//elemento ya esta, entonces le suma 1
//si el elemento es la primera vez que aparece lo setea como 1
lista1.map(
    function(elemento) {
        if(lista1Count[elemento]){
            // el += 1 lo que hace es sumarle al mismo objeto 1
            //esto evita tener que poner objeto = objeto + 1
            lista1Count[elemento] += 1;     
        } else {
            lista1Count[elemento] = 1;
        }
    }
);
//con todo esto tenemos un objeto con cada elemento del array y la cantidad de veces que aparece
//para poder obtener cual es el que mas veces aparece hay que convertir el 
//el objeto en un array de nuevo con el Object.entries
//luego tengo que ordenar por la segunda posición de cada registro del array
//para es se usa el .sort, y en la resta ponemos la posición del campo por el cual ordenar
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1];
    }
);

//con el array ordenado por la cantidad de veces que se repite cada valor
//busco la moda buscando el ultimo registro
//armo constante poniendole el valor del array en la posición del largo del array - 1
//porque el para la posición se comienza desde 0
const moda = lista1Array[lista1Array.length -1];

const lista1 = [
    200,
    500,
    100,
    4000000,
    3000,
];

//trajimos la funcion de promedio para usarla cuando el array es par
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

//ordeno la lista para poder sacar los valores que realmente estan en el medio
//si al sort no le pongo la funcion, ordena como si fueran strings
function ordenarLista(lista){
    const listaOrdenada = lista.sort(function(a,b){
    return a - b;
})
    return listaOrdenada
}
//uso la funcion parse para quitar los decimales (trunca los decimales)


function esPar(numerito) {
    // usamos el simbolo % que es el módulo (resto) de la división de un 
    // numero dividido otro numero, en este caso el parametro numerito
    // dividido 2
    // si el módulo es 0, entonces es par, devuelvo true
    // si el módulo es diferente a 0, es impar, devuelvo false
    if (numerito % 2 === 0) {
        return true;
    } 
    else {
        return false;
    }
}

let mediana;

//calculamos la mediana si es par o impar
//si es par, calculo el promedio entre los 2 de la mitad

function calcularMediana(listaCalculoMediana) {
    ordenarLista(listaCalculoMediana)
    const mitadLista = parseInt(listaCalculoMediana.length / 2);
    if (esPar(listaCalculoMediana.length)) {
        const elemento1 = listaCalculoMediana[mitadLista];
        const elemento2 = listaCalculoMediana[mitadLista - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ])
    mediana = promedioElemento1y2
    }
    else {
    mediana = listaCalculoMediana[mitadLista]
    }
    return mediana;
}
/* todo esto es con datos fijos

// Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadradro miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();

// Código del triangulo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm."
    );

console.log("La altura del triángulo es de: " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triángulo es de: " + perimetroTriangulo + "cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es de: " + areaTriangulo + "cm2.") 


console.groupEnd();

// Código del círculo
console.group("Círculos")

//Radio
const radioCírculo =4;
console.log("El radio del círculo es: " + radioCírculo + "cm.")

//Diametro
const diametroCirculo = radioCírculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm.")

//PI
const PI = Math.PI;
console.log("PI es: " + PI )

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm.")

//Area
const areaCirculo = PI * (radioCírculo * radioCírculo);
console.log("El área del círculo es: " + areaCirculo + "cm2.")

console.groupEnd

*/

//Para permitir que los datos no sean fijos
//usamos funciones

// Codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrado(lado) {
    return lado * lado;
};

//Código del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return (lado1 + lado2 + base);
};


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

function calculaAlturaTrianguloIsosceles(base, lado) {
    return Math.sqrt((lado * lado) - (base * base) / 4  )
}

// Código del círculo
//Radio

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
};

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//Area
function areaCirculo(radio) {
    return PI * (radio * radio);
}


//conectamos con html
//Funciones para front de cuadrado
function cacularCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const area = areaCuadrado(value);
    const resultadoCuadrado = document.getElementById("ResultadoCuadrado");
    resultadoCuadrado.innerText = "El perímetro del cuadrado es " + perimetro + " cm y el área es de " + area + " cm2.";
}
// la siguiente sección se agregó en un solo boton arriba
// function calcularAreaCuadrado(params) {
//     const input = document.getElementById("InputCuadrado");
//     const value = input.value;
//     const area = areaCuadrado(value);
//     const resultadoCuadrado = document.getElementById("ResultadoCuadrado");
//     resultadoCuadrado.innerText = "El área del cuadrado es " + area
// }

//funciones para front de triangulos
function cacularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTriangulo1");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputTriangulo2");
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    const resultadoPerimetroTriangulo = document.getElementById("ResultadoPerimetroTriangulo");
    resultadoPerimetroTriangulo.innerText = "El perímetro del triangulo es " + perimetro + " cm."
 }

 function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const valueAltura = Number(inputAltura.value);
    const area = areaTriangulo(valueBase, valueAltura);
    const resultadoAreaTriangulo = document.getElementById("ResultadoAreaTriangulo");
    resultadoAreaTriangulo.innerText = "El área del triangulo es " + area + " cm.";
 }

 function calcularAlturaTrianguloIsosceles() {
    const inputLado1 = document.getElementById("InputTriangulo1");
    const valueLado1 = Number(inputLado1.value);
    const inputLado2 = document.getElementById("InputTriangulo2");
    const valueLado2 = Number(inputLado2.value);
    const inputBase = document.getElementById("InputBaseTriangulo");
    const valueBase = Number(inputBase.value);
    let altura;
    const resultadoAlturaTriangulo = document.getElementById("ResultadoAlturaTriangulo");
    // altura = calculaAlturaTrianguloIsosceles(valueBase, valueLado1);
    // alert(altura);
    // }
    if (inputLado1.value != inputLado2.value) {
        alert("Recuerda que en un triángulo isosceles el lado 1 y lado 2 deben ser iguales")
        //resultadoAlturaTriangulo.innerText = "Recuerda que en un triángulo isosceles el lado 1 y lado 2 deben ser iguales";
        //NO SE PORQUE NO FUNCIONA EL INNERTEXT DENTRO DEL IF!!!!!
    }
    else {
        altura = calculaAlturaTrianguloIsosceles(valueBase, valueLado1);
    }
    resultadoAlturaTriangulo.innerText = "La altura del triángulo es de " + altura + " cm.";
 }

 //funciones para front de circulos
 function cacularCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    const area = areaCirculo(value);
    const resultadoCuadrado = document.getElementById("ResultadoCirculo");
    resultadoCuadrado.innerText = "El perímetro del círculo es " + perimetro + " cm y el área es de " + area + " cm2.";
 }

 //se unió el area en la sección de perimetro
//  function calcularAreaCirculo() {
//     const input = document.getElementById("InputRadio");
//     const value = input.value;
//     const area = areaCirculo(value);
//     alert(area);
//  }
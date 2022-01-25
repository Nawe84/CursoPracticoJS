//calculo precio con descuento
/*con constantes
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});
*/


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

let cuponesValidos = ["10OFF", "15OFF", "20OFF"];



function calculaPrecioConDescuento() {
    const resultP = document.getElementById("ResultP");
    const resultCupon = document.getElementById("ResultCupon");
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    let descuento2
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento2);
    switch(discountValue) {
            case cuponesValidos[0]:
                descuento2 = 10;
                resultCupon.innerText = "El cupón es del 10%";
                break;
            case cuponesValidos[1]:
                descuento2 = 15;
                resultCupon.innerText = "El cupón es del 15%";
                break;
            case cuponesValidos[2]:
                descuento2 = 20;
                resultCupon.innerText = "El cupón es del 20%";
                break;
            default:
                descuento2 = 0;
            resultCupon.innerText = "El cupón es inválido";
        }
//en el archivo HTML reservo un parrafo <p> y le asigno un id
//luego defino constante con el id definido al parrafo
 //  return resultP.innerText = "El precio con descuento es " + precioConDescuento;
   return resultP.innerText = precioConDescuento

}


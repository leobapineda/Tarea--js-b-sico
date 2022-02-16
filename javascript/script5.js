let precioOriginal = prompt('Ingresa el precio del producto')
let descuento = prompt('Ingresa el descuento en porcentaje')
let precioDescuento = precioOriginal / (1 + (descuento/100));

alert (`El precio con descuento es ${precioDescuento.toFixed(2)}`)
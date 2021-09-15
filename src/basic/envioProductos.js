import { formatterPeso } from "./functionGlobals.js";
const pesoArticulo = 289;
let tarifaEnvio = 0;
let valorDescuento = 0;
let valorArticulos = 378000;
let dia = "l";
let tipoPago = "t";
const valorTarifaFn = () => {
  if (pesoArticulo < 100) {
    return 20000;
  }
  if (pesoArticulo >= 100 && pesoArticulo <= 150) {
    return 25000;
  }
  if (pesoArticulo > 150 && pesoArticulo <= 200) {
    return 30000;
  }
  if (pesoArticulo > 200) {
    let tarifa = 35000;
    let pesoAdd = pesoArticulo - 200;
    let valorAdd = (2000 / 10) * pesoAdd;
    return tarifa + valorAdd;
  }
  return false;
};
const valorDescuentoFn = () => {
  if (valorArticulos >= 300000 && valorArticulos <= 600000) {
    let valorDesc = valorArticulos * (10 / 100);
    return valorArticulos - valorDesc;
  }
  if (valorArticulos > 600000 && valorArticulos <= 1000000) {
    let valorDesc = valorArticulos * (20 / 100);
    return valorArticulos - valorDesc;
  }
  if (valorArticulos > 1000000) {
    let valorDesc = valorArticulos * (30 / 100);
    return valorArticulos - valorDesc;
  }
  return valorArticulos;
};
const valorPromociones = () => {
  if (dia == "l" && tipoPago == "t") {
    return tarifaEnvio / 2;
  } else {
  }
  if (tipoPago == "e" && valorArticulos > 1000000) {
    return tarifaEnvio / 2;
  } else {
  }
  return false;
};
const validateOfertas = () => {
  let valorOfeta = 0;
  let promocion = valorPromociones();
  if (promocion) {
    valorOfeta = promocion;
  } else {
    valorOfeta = valorDescuentoFn();
  }
  return valorOfeta;
};
export const envioProductos = () => {
  tarifaEnvio = valorTarifaFn();
  valorDescuento = validateOfertas();
  console.log(`
  Peso de los artículos...................: ${pesoArticulo}
  Valor de los artículos..................: ${formatterPeso(valorArticulos)}
  Es lunes [s] Sí [n] No..................: ${dia == "l" ? "s" : "n"}
  Tipo de pago: [e] efectivo [t] tarjeta..: ${tipoPago == "t" ? "t" : "e"}
  tarifa..................................: ${formatterPeso(tarifaEnvio)}
  Promoción...............................: ${formatterPeso(valorDescuento)}
  Total a pagar...........................: ${formatterPeso(tarifaEnvio - valorDescuento)}
  `);
};

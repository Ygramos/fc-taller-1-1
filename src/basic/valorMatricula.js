
import {formatterPeso } from './functionGlobals.js'
const valorCred = 85000;
const nCreditos = 25;
const estrato = 2;

const valorCreditoFn = () => {
  if (nCreditos <= 20) {
    return valorCred * nCreditos;
  }
  if (nCreditos > 20) {
    let desc = nCreditos - 20;
    let valorC = valorCred * 2;
    return valorCred * 20 + valorC * desc;
  }
};
const valorDescuentoFn = (valorCredito) => {
  if (estrato === 1) {
    return valorCredito * 0.8;
  }
  if (estrato === 2) {
    return valorCredito * 0.5;
  }
  if (estrato === 3) {
    return valorCredito * 0.3;
  }
};
const valorSubsidioFn = () => {
  if (estrato === 1) {
    return 200000;
  }
  if (estrato === 2) {
    return 100000;
  }
};

export const valorMatricula = () => {
  let valorCredito = valorCreditoFn();
  let totalMatricula = valorDescuentoFn(valorCredito);
  let subSidio = valorSubsidioFn();
  console.log(`
  Número de créditos.......: ${nCreditos}
  Valor crédito............: ${formatterPeso(valorCred)}
  Estrato del estudiante...: ${estrato}
  Costo de la matrícula....: ${formatterPeso(totalMatricula)}
  Valor del subsidio.......: ${formatterPeso(subSidio)}
  `);
};

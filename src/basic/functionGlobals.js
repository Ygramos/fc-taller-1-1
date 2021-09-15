export const formatterPeso = (price) => {
  const formatterMoney = Intl.NumberFormat("es-CO", {
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return `$${formatterMoney.format(price)}`;
};

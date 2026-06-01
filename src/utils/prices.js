function formatPrice(price) {
  const value = typeof price === "string" ? parseFloat(price) : price;
  if (Number.isNaN(value)) return "";
  return `${value.toFixed(2).replace(".", ",")}€`;
}

export default formatPrice;

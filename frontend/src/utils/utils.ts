export function priceFormatter(price: number): string {
  if (isNaN(price) || price <= 0) return "0";
  return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
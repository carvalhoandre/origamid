/**
 * Recebe string '1.200,50' retorna number: 1200.50
 * @param currency
 * @returns
 */
export default function currencyToNumber(currency: string): number | null {
  const number = Number(currency.replace(".", "").replace(",", "."));

  return isNaN(number) ? null : number;
}

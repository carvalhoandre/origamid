// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function floor(value: number): number;
function floor(value: string): string;
function floor(value: number | string): number | string {
  if (typeof value === "number") {
    return Math.floor(value);
  }

  return Math.floor(parseFloat(value)).toString();
}

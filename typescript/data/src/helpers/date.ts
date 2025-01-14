export function stringToDate(text: string): Date {
  const [date, time] = text.split(" ");

  const [day, month, year] = date.split("/").map(Number);

  const [hour, minute] = date.split(":").map(Number);

  return new Date(year, month - 1, day, hour, minute);
}

export function convertToTimestamp(value: string | number | Date): number {
  const date = new Date(value);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date value: ${value}`);
  }
  return date.getTime();
}

export function splitString(str: string, n: number): string[] {
  const regex = new RegExp(`.{1,${n}}`, "g");
  return str.match(regex) ?? [];
}

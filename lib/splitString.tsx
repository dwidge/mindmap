export function splitString(str: string, n: number): string[] {
  if (n < 1) throw new Error("splitStringE1: n<1");
  const regex = new RegExp(`.{1,${n}}`, "g");
  return str.match(regex) ?? [];
}

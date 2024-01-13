import { splitString } from "./splitString";

export function splitLinesLimit(s: string, maxLineLength: number): string[] {
  const words = s.split(" ");
  const wordsOfMaxLength = words.flatMap((word) =>
    splitString(word, maxLineLength)
  );
  const lines = [];
  let line: string[] = [];
  wordsOfMaxLength.forEach((word) => {
    const newline = [...line, word];
    if (newline.join(" ").length > maxLineLength) {
      lines.push(line.join(" "));
      line = [word];
    } else line = newline;
  });
  if (line.length) lines.push(line.join(" "));
  return lines;
}

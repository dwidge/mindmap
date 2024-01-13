import { describe, it, expect } from "vitest";
import { splitLinesLimit } from "./splitLinesLimit";

describe("splitLinesLimit", () => {
  it("should split a string into lines with a maximum length of 10 characters", () => {
    const s = "The quick brown fox jumps over the lazy dog.";
    const maxLineLength = 10;
    const expected = [
      "The quick",
      "brown fox",
      "jumps over",
      "the lazy",
      "dog.",
    ];
    const actual = splitLinesLimit(s, maxLineLength);
    expect(actual).toEqual(expected);
  });

  it("should split a string into lines with a maximum length of 5 characters", () => {
    const s = "Helloo world!";
    const maxLineLength = 5;
    const expected = ["Hello", "o", "world", "!"];
    const actual = splitLinesLimit(s, maxLineLength);
    expect(actual).toEqual(expected);
  });

  it("should split a string into lines with a maximum length of 1 character", () => {
    const s = "abc de";
    const maxLineLength = 1;
    const expected = ["a", "b", "c", "d", "e"];
    const actual = splitLinesLimit(s, maxLineLength);
    expect(actual).toEqual(expected);
  });
});

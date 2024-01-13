import { describe, it, expect } from "vitest";
import { splitString } from "./splitString";

describe("splitString", () => {
  it("should split the string into segments of n characters", () => {
    expect(splitString("abcdefghijk", 3)).toEqual(["abc", "def", "ghi", "jk"]);
    expect(splitString("abcdefghijk", 4)).toEqual(["abcd", "efgh", "ijk"]);
    expect(splitString("abcdefghijk", 5)).toEqual(["abcde", "fghij", "k"]);
  });

  it("should return an empty array if the input string is empty", () => {
    expect(splitString("", 3)).toEqual([]);
  });
});

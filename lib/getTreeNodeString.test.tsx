// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

// ChatGPT
import { describe, it, expect } from "vitest";
import { getTreeNodeString } from "./getTreeNodeString";

describe("getTreeNodeString", () => {
  it("should return resursive object", () => {
    const input = `
a
  b
    c
  d
`;
    expect(getTreeNodeString(input)).toStrictEqual([
      {
        name: "a",
        children: [
          {
            name: "b",
            children: [
              {
                name: "c",
                children: [],
              },
            ],
          },
          {
            name: "d",
            children: [],
          },
        ],
      },
    ]);
  });

  it("should return empty array for empty input", () => {
    const input = "";
    expect(getTreeNodeString(input)).toStrictEqual([]);
  });

  it("should handle multiple levels of nesting", () => {
    const input = `
a
  b
    c
      d
e
  f
    g
      h
`;
    expect(getTreeNodeString(input)).toStrictEqual([
      {
        name: "a",
        children: [
          {
            name: "b",
            children: [
              {
                name: "c",
                children: [
                  {
                    name: "d",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "e",
        children: [
          {
            name: "f",
            children: [
              {
                name: "g",
                children: [
                  {
                    name: "h",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
  });

  it("should ignore empty lines", () => {
    const input = `
a

  b
    c

  d


`;
    expect(getTreeNodeString(input)).toStrictEqual([
      {
        name: "a",
        children: [
          {
            name: "b",
            children: [
              {
                name: "c",
                children: [],
              },
            ],
          },
          {
            name: "d",
            children: [],
          },
        ],
      },
    ]);
  });

  it("discard orphan lines", () => {
    const input = `
  a
  b
    c
  d
e
`;
    expect(getTreeNodeString(input)).toStrictEqual([
      {
        name: "e",
        children: [],
      },
    ]);
  });
});

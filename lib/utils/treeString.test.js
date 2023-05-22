// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

// ChatGPT

import { treeString } from "./treeString";

describe("treeString", () => {
  it("should return resursive object", () => {
    const input = `
a
  b
    c
  d
`;
    expect(treeString(input)).toStrictEqual([
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
    expect(treeString(input)).toStrictEqual([]);
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
    expect(treeString(input)).toStrictEqual([
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
    expect(treeString(input)).toStrictEqual([
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
    expect(treeString(input)).toStrictEqual([
      {
        name: "e",
        children: [],
      },
    ]);
  });
});

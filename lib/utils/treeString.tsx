// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

export function treeString(input: string, indent = "  ") {
  return build(
    indent,
    input.split("\n").filter((s) => s)
  );
}

export const rootTree = (name: string, children: Item[]) =>
  children.length === 1 ? children[0] : { name, children };

export type Item = { name: string; children: Item[] };

const build = (indent: string, lines: string[]): Item[] => {
  const roots = lines
    .map((s, i) => (s.startsWith(indent) ? -1 : i))
    .filter((i) => i >= 0);

  const groups = roots.map((i, j) => lines.slice(i, roots[j + 1] ?? undefined));

  return groups.map(([name, ...lines]) => ({
    name,
    children: build(
      indent,
      lines.map((s) => s.slice(indent.length))
    ),
  }));
};

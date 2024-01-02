import { TreeNode } from "./TreeNode";

export function getTreeNodeString(input: string, indent = "  "): TreeNode[] {
  return build(
    indent,
    input.split("\n").filter((s) => s)
  );
}

const build = (indent: string, lines: string[]): TreeNode[] => {
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

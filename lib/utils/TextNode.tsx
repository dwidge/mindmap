// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { Item, treeString } from "./treeString";

export type TextNode = {
  name: string;
  children: TextNode[] | string;
};

export function calcTreeTextNode(node: TextNode): Item {
  const { name, children } = node;
  if (typeof children === "string")
    return { name, children: treeString(children, "  ") };
  else return { name, children: children.map(calcTreeTextNode) };
}

export const rootTree = (node: Item) =>
  node.children.length === 1 ? node.children[0] : node;

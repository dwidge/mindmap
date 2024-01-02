import { TreeNode } from "./TreeNode";
import { TextNode } from "./TextNode";
import { getTreeNodeString } from "./getTreeNodeString";

export function getTreeNodeTextNode(node: TextNode): TreeNode {
  const { children, ...data } = node;
  if (!children) return { children: [], ...data };

  if (typeof children === "string")
    return { children: getTreeNodeString(children, "  "), ...data };
  else return { children: children.map(getTreeNodeTextNode), ...data };
}

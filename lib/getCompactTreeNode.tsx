import { TreeNode } from "./TreeNode";

export const getCompactTreeNode = (node: TreeNode): TreeNode =>
  node.children?.length === 1 ? node.children[0] : node;

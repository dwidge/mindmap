import React, { useEffect, useMemo, useState } from "react";
import { getTreeNodeTextNode } from "./getTreeNodeTextNode";
import { TextNode } from "./TextNode";
import { TreeNode } from "./TreeNode";
import MindMap, { MindmapProps } from "./Mindmap";

export const withTextNode =
  (MindMap: React.FC<MindmapProps>) =>
  ({ tree, ...props }: { tree: TextNode } & Omit<MindmapProps, "tree">) => {
    const treeNode = useMemo(() => getTreeNodeTextNode(tree), []);
    return <MindMap tree={treeNode} {...props} />;
  };

export const MindMapText = withTextNode(MindMap);

const replaceNodeInTree =
  (oldNode: TreeNode, newNode: TreeNode) =>
  (parentNode: TreeNode): TreeNode =>
    parentNode === oldNode
      ? newNode
      : {
          ...parentNode,
          children: parentNode.children.map(
            replaceNodeInTree(oldNode, newNode)
          ),
        };

export const withSelector =
  (MindMap: React.FC<MindmapProps>) =>
  ({
    tree,
    resolution,
    onClick = () => {},
    select: [selectNode, setSelectNode],
  }: {
    select: [
      selectNode: TreeNode | undefined,
      setSelectNode: (n?: TreeNode) => void
    ];
  } & MindmapProps) => {
    const [treeNode, setTreeNode] = useState<TreeNode>(tree);
    const [oldNode, setOldNode] = useState<TreeNode>();

    useEffect(() => {
      setTreeNode(tree);
    }, [tree]);

    useEffect(() => {
      if (oldNode && selectNode)
        setTreeNode(replaceNodeInTree(oldNode, selectNode)(treeNode));
      setOldNode(selectNode);
    }, [selectNode]);

    const onSelect = (n: TreeNode) => {
      setOldNode(undefined);
      setSelectNode(n);
      onClick(n);
    };

    return (
      <MindMap
        tree={treeNode}
        resolution={resolution}
        onClick={onSelect}
        transform={(n: TreeNode) =>
          n === selectNode ? { ...n, style: "select" } : n
        }
      />
    );
  };

export const MindMapSelector = withSelector(MindMap);

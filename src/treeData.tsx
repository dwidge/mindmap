import { TextNode } from "../lib/TextNode";
import { TreeNode } from "../lib/TreeNode";

export const mindmapText = `
a
  a1
    a1a
  a2
  a3
b
c
d
  d1 ddddddd ddddddd ddddddddd dddddddddd
  d2 2222222 2222222222 222222222222 2222222222222222222
`;

export const treeNode: TreeNode = {
  name: "Root",
  children: [
    {
      name: "Child 1",
      children: [
        { name: "Grandchild 1", children: [] },
        { name: "Grandchild 2", children: [] },
      ],
    },
    {
      name: "Child 2",
      children: [
        { name: "Grandchild 3", children: [] },
        { name: "Grandchild 4", children: [] },
      ],
    },
  ],
};

export const textNode: TextNode = {
  name: "T",
  children: [
    {
      name: "A",
      children: [
        { name: "A1" },
        { name: "A2" },
        { name: "A3", children: mindmapText },
        {
          name: "C",
          children: [
            {
              name: "C1",
            },
            {
              name: "D",
              children: [
                {
                  name: "D1",
                },
                {
                  name: "D2",
                },
                {
                  name: "D3",
                  children: [treeNode],
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "Z" },
    {
      name: "B",
      children: [{ name: "B1" }, { name: "B2" }, { name: "B3" }],
    },
  ],
};

/*
 * @lc app=leetcode id=297 lang=typescript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

import { TreeNode } from "./226.invert-binary-tree";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
    if (!root) return "[]";

    const res: (string | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            res.push(node.val.toString());
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push(null);
        }
    }

    // Remove trailing nulls
    while (res[res.length - 1] === null) {
        res.pop();
    }

    return "[" + res.join(",") + "]";
}

/**
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
    if (data === "[]") return null;

    const arr = data.substring(1, data.length - 1).split(",");
    const root = new TreeNode(parseInt(arr[0]));
    const queue: TreeNode[] = [root];
    let i = 1;

    while (i < arr.length) {
        const curr = queue.shift()!;

        if (arr[i] !== "" && arr[i] !== "null") {
            curr.left = new TreeNode(parseInt(arr[i]));
            queue.push(curr.left);
        }
        i++;

        if (i < arr.length && arr[i] !== "" && arr[i] !== "null") {
            curr.right = new TreeNode(parseInt(arr[i]));
            queue.push(curr.right);
        }
        i++;
    }

    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

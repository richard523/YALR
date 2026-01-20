/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

export function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;

    function dfs(node: TreeNode | null, maxSoFar: number): number {
        if (!node) return 0;

        let res = 0;
        if (node.val >= maxSoFar) {
            res = 1;
        }

        const newMax = Math.max(maxSoFar, node.val);
        res += dfs(node.left, newMax);
        res += dfs(node.right, newMax);

        return res;
    }

    return dfs(root, root.val);
}
// @lc code=end

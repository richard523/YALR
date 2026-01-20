/*
 * @lc app=leetcode id=124 lang=typescript
 *
 * [124] Binary Tree Maximum Path Sum
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

export function maxPathSum(root: TreeNode | null): number {
    let globalMax = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        // Max sum from left and right subtrees. 
        // We only take them if they are positive.
        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));

        // Compute the max path sum that splits at the current node
        const currentPathSum = node.val + leftMax + rightMax;

        // Update global max
        globalMax = Math.max(globalMax, currentPathSum);

        // Return the max path sum starting from current node and going down one leg
        return node.val + Math.max(leftMax, rightMax);
    }

    dfs(root);
    return globalMax;
}
// @lc code=end

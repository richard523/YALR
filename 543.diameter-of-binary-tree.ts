/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

export function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    function height(node: TreeNode | null): number {
        if (!node) return 0;

        const leftH = height(node.left);
        const rightH = height(node.right);

        // Update diameter: number of edges in path through current node
        maxDiameter = Math.max(maxDiameter, leftH + rightH);

        // Return height of current node
        return 1 + Math.max(leftH, rightH);
    }

    height(root);
    return maxDiameter;
}
// @lc code=end

/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
 */

import { TreeNode } from "./226.invert-binary-tree";
import { isSameTree } from "./100.same-tree";

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

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
// @lc code=end

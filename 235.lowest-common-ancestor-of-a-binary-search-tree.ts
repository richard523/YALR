/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root || !p || !q) return null;

    let curr = root;

    while (curr) {
        if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left!;
        } else if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right!;
        } else {
            return curr;
        }
    }

    return null;
}
// @lc code=end

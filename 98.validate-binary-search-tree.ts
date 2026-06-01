/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

import { TreeNode } from "./100.same-tree";

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

export function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, low: number, high: number): boolean {
        if (!node) return true;
        
        if (node.val <= low || node.val >= high) return false;
        
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
    
    return validate(root, -Infinity, Infinity);
}
// @lc code=end

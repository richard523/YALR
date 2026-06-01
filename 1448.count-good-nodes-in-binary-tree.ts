/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

export function goodNodes(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, currentMax: number): number {
        if (!node) return 0;
        
        let count = 0;
        
        // If this node's value is >= the maximum so far, it's a good node
        if (node.val >= currentMax) {
            count = 1;
            currentMax = node.val; // Update max for children
        }
        
        // Recursively count good nodes in left and right subtrees
        count += dfs(node.left, currentMax);
        count += dfs(node.right, currentMax);
        
        return count;
    }
    
    return dfs(root, -Infinity);
}
// @lc code=end

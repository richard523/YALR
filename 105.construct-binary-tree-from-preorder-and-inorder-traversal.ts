/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preorderIdx = 0;

    function helper(left: number, right: number): TreeNode | null {
        if (left > right) return null;

        const rootVal = preorder[preorderIdx++];
        const root = new TreeNode(rootVal);
        const index = inorderMap.get(rootVal)!;

        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
}
// @lc code=end

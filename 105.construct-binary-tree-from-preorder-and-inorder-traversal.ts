/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // Create a hash map to store the index of each value in inorder
    const inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    
    return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inorderMap);
}

function buildTreeHelper(
    preorder: number[],
    preStart: number,
    preEnd: number,
    inorder: number[],
    inStart: number,
    inEnd: number,
    inorderMap: Map<number, number>
): TreeNode | null {
    if (preStart > preEnd || inStart > inEnd) {
        return null;
    }
    
    // The first element in preorder is the root
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    
    // Find the index of the root in inorder
    const inRootIndex = inorderMap.get(rootVal)!;
    
    // Number of nodes in the left subtree
    const leftSubtreeSize = inRootIndex - inStart;
    
    // Recursively build left and right subtrees
    root.left = buildTreeHelper(
        preorder,
        preStart + 1,
        preStart + leftSubtreeSize,
        inorder,
        inStart,
        inRootIndex - 1,
        inorderMap
    );
    
    root.right = buildTreeHelper(
        preorder,
        preStart + leftSubtreeSize + 1,
        preEnd,
        inorder,
        inRootIndex + 1,
        inEnd,
        inorderMap
    );
    
    return root;
}
// @lc code=end

/*
 * @lc app=leetcode id=297 lang=typescript
 *
 * [297] Serialize and Deserialize Binary Tree
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

export class Codec {
    // Serialize the tree using pre-order traversal with null markers
    serialize(root: TreeNode | null): string {
        function rserialize(node: TreeNode | null): string {
            if (!node) return "null,";
            return node.val + "," + rserialize(node.left) + rserialize(node.right);
        }
        return rserialize(root);
    }

    // Deserialize the string back to tree
    deserialize(data: string): TreeNode | null {
        const dataArray = data.split(",");
        let index = 0;
        
        function rdeserialize(): TreeNode | null {
            if (index >= dataArray.length) return null;
            
            const val = dataArray[index++];
            if (val === "null") return null;
            
            const node = new TreeNode(parseInt(val));
            node.left = rdeserialize();
            node.right = rdeserialize();
            return node;
        }
        
        return rdeserialize();
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * var ser = new Codec()
 * var deser = new Codec()
 * var ans = deser.deserialize(ser.serialize(root))
 */
// @lc code=end

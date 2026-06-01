import { isBalanced } from "./110.balanced-binary-tree";
import { TreeNode } from "./100.same-tree";

describe("isBalanced", () => {
    it("should return true for balanced tree [3,9,20,null,null,15,7]", () => {
        // Tree:       3
        //           /   \
        //          9    20
        //              /  \
        //             15   7
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        expect(isBalanced(root)).toBe(true);
    });

    it("should return false for unbalanced tree [1,2,2,3,3,null,null,4,4]", () => {
        // Tree:       1
        //           /   \
        //          2     2
        //         / \
        //        3   3
        //       / \
        //      4   4
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(3);
        root.left.left.left = new TreeNode(4);
        root.left.left.right = new TreeNode(4);
        
        expect(isBalanced(root)).toBe(false);
    });

    it("should return true for empty tree", () => {
        expect(isBalanced(null)).toBe(true);
    });

    it("should return true for single node", () => {
        const root = new TreeNode(1);
        expect(isBalanced(root)).toBe(true);
    });

    it("should return false for tree with left height difference > 1", () => {
        // Tree:       1
        //           /
        //          2
        //         /
        //        3
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        
        expect(isBalanced(root)).toBe(false);
    });

    it("should return true for tree with height difference exactly 1", () => {
        // Tree:       1
        //           / \
        //          2   3
        //         /
        //        4
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        
        expect(isBalanced(root)).toBe(true);
    });
});

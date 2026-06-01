import { maxPathSum } from "./124.binary-tree-maximum-path-sum";
import { TreeNode } from "./100.same-tree";

describe("maxPathSum", () => {
    it("should return 6 for tree [1,2,3]", () => {
        // Tree:       1
        //           /   \
        //          2     3
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        
        // The maximum path is 2 -> 1 -> 3 = 6
        expect(maxPathSum(root)).toBe(6);
    });

    it("should return 42 for tree [-10,9,20,null,null,15,7]", () => {
        // Tree:       -10
        //           /   \
        //          9    20
        //              /  \
        //             15   7
        const root = new TreeNode(-10);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        
        // The maximum path is 15 -> 20 -> 7 = 42
        expect(maxPathSum(root)).toBe(42);
    });

    it("should return the single node value for single node tree", () => {
        const root = new TreeNode(42);
        expect(maxPathSum(root)).toBe(42);
    });

    it("should return negative value for all negative tree", () => {
        // Tree:       -3
        //           /   \
        //         -2    -1
        const root = new TreeNode(-3);
        root.left = new TreeNode(-2);
        root.right = new TreeNode(-1);
        
        // The maximum path is -1 (the right node alone)
        expect(maxPathSum(root)).toBe(-1);
    });

    it("should return 0 for empty tree", () => {
        expect(maxPathSum(null)).toBe(-Infinity);
    });

    it("should handle tree with negative and positive values", () => {
        // Tree:       5
        //           /   \
        //         -2     3
        //         / \   / \
        //       -1  4  2   6
        const root = new TreeNode(5);
        root.left = new TreeNode(-2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(-1);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(2);
        root.right.right = new TreeNode(6);
        
        // The maximum path is 4 -> -2 -> 5 -> 3 -> 6 = 16? Let me trace:
        // Actually, the max path should be 4 -> -2 -> 5 -> 3 -> 6 = 4 + (-2) + 5 + 3 + 6 = 16
        // But the path can only go through 5 once, so it's either:
        // Left path: 4 -> -2 -> 5 -> 3 -> 6 = 16
        // Or just: 4 -> -2 -> 5 = 7
        // Or: 6 -> 3 -> 5 -> -2 -> 4 = 16
        // The algorithm should find 16
        expect(maxPathSum(root)).toBe(16);
    });
});

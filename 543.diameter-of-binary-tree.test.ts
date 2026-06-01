import { diameterOfBinaryTree } from "./543.diameter-of-binary-tree";
import { TreeNode } from "./100.same-tree";

describe("diameterOfBinaryTree", () => {
    it("should return 3 for tree [1,2,3,4,5]", () => {
        // Tree:       1
        //           /   \
        //          2     3
        //         / \
        //        4   5
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it("should return 1 for tree [1,2]", () => {
        // Tree:       1
        //           /
        //          2
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        
        expect(diameterOfBinaryTree(root)).toBe(1);
    });

    it("should return 0 for empty tree", () => {
        expect(diameterOfBinaryTree(null)).toBe(0);
    });

    it("should return 0 for single node", () => {
        const root = new TreeNode(1);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    it("should return 4 for tree [1,2,3,4,5,null,6,7,8]", () => {
        // Tree:       1
        //           /   \
        //          2     3
        //         / \     \
        //        4   5     6
        //       / \
        //      7   8
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(6);
        root.left.left.left = new TreeNode(7);
        root.left.left.right = new TreeNode(8);
        
        // The diameter is 4 (path: 7 -> 4 -> 2 -> 5 -> 8 or 7 -> 4 -> 2 -> 1 -> 3 -> 6)
        // Actually the longest path is 7-4-2-1-3-6 which is length 5, so diameter is 5
        // Let me recalculate: the diameter is the number of edges in the longest path
        // The path from 7 to 6 goes through: 7-4-2-1-3-6, which has 5 edges
        expect(diameterOfBinaryTree(root)).toBe(5);
    });
});

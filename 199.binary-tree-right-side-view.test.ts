import { rightSideView } from "./199.binary-tree-right-side-view";
import { TreeNode } from "./100.same-tree";

describe("rightSideView", () => {
    it("should return [1,3,4] for tree [1,2,3,null,5,null,4]", () => {
        // Tree:       1
        //           /   \
        //          2     3
        //           \     \
        //            5     4
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(4);
        
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    it("should return [1] for single node", () => {
        const root = new TreeNode(1);
        expect(rightSideView(root)).toEqual([1]);
    });

    it("should return [] for empty tree", () => {
        expect(rightSideView(null)).toEqual([]);
    });

    it("should return [1,2,3] for right-skewed tree", () => {
        // Tree:       1
        //           \
        //            2
        //             \
        //              3
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    it("should return [1,2,3] for left-skewed tree", () => {
        // Tree:       1
        //           /
        //          2
        //         /
        //        3
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    it("should handle perfect binary tree", () => {
        // Tree:       1
        //           /   \
        //          2     3
        //         / \   / \
        //        4   5 6   7
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        
        expect(rightSideView(root)).toEqual([1, 3, 7]);
    });
});

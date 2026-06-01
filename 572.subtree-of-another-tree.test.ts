import { isSubtree } from "./572.subtree-of-another-tree";
import { TreeNode } from "./100.same-tree";

describe("isSubtree", () => {
    it("should return true when subRoot is subtree of root", () => {
        // root:      3
        //          /   \
        //         4     5
        //        / \
        //       1   2
        // subRoot:   4
        //           / \
        //          1   2
        const root = new TreeNode(3);
        root.left = new TreeNode(4);
        root.right = new TreeNode(5);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(2);
        
        const subRoot = new TreeNode(4);
        subRoot.left = new TreeNode(1);
        subRoot.right = new TreeNode(2);
        
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("should return false when subRoot is not a subtree", () => {
        // root:      3
        //          /   \
        //         4     5
        //        / \
        //       1   2
        //       /
        //      0
        // subRoot:   4
        //           / \
        //          1   2
        //             /
        //            1
        const root = new TreeNode(3);
        root.left = new TreeNode(4);
        root.right = new TreeNode(5);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(2);
        root.left.left.left = new TreeNode(0);
        
        const subRoot = new TreeNode(4);
        subRoot.left = new TreeNode(1);
        subRoot.right = new TreeNode(2);
        subRoot.right.left = new TreeNode(1);
        
        expect(isSubtree(root, subRoot)).toBe(false);
    });

    it("should return true when subRoot equals root", () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        
        const subRoot = new TreeNode(1);
        subRoot.left = new TreeNode(2);
        
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("should return true for empty subRoot", () => {
        const root = new TreeNode(1);
        expect(isSubtree(root, null)).toBe(true);
    });

    it("should return false when root is empty but subRoot is not", () => {
        const subRoot = new TreeNode(1);
        expect(isSubtree(null, subRoot)).toBe(false);
    });

    it("should return true when both are empty", () => {
        expect(isSubtree(null, null)).toBe(true);
    });
});

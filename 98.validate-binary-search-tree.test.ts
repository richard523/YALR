import { TreeNode } from "./100.same-tree";
import { isValidBST } from "./98.validate-binary-search-tree";

describe("isValidBST", () => {
    it("should return true for valid BST", () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(isValidBST(root)).toBe(true);
    });

    it("should return false for invalid BST", () => {
        const root = new TreeNode(5, 
            new TreeNode(1), 
            new TreeNode(4, 
                new TreeNode(3), 
                new TreeNode(6)
            )
        );
        expect(isValidBST(root)).toBe(false);
    });

    it("should return true for empty tree", () => {
        expect(isValidBST(null)).toBe(true);
    });

    it("should return true for single node", () => {
        const root = new TreeNode(1);
        expect(isValidBST(root)).toBe(true);
    });

    it("should return true for tree with only left child", () => {
        const root = new TreeNode(2, new TreeNode(1), null);
        expect(isValidBST(root)).toBe(true);
    });

    it("should return true for tree with only right child", () => {
        const root = new TreeNode(1, null, new TreeNode(2));
        expect(isValidBST(root)).toBe(true);
    });

    it("should return false for BST with duplicate values", () => {
        const root = new TreeNode(1, new TreeNode(1), null);
        expect(isValidBST(root)).toBe(false);
    });
});

import { TreeNode, isSameTree } from "./100.same-tree";

describe("isSameTree", () => {
    it("should return true for two identical trees", () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(isSameTree(p, q)).toBe(true);
    });

    it("should return false for different trees", () => {
        const p = new TreeNode(1, new TreeNode(2), null);
        const q = new TreeNode(1, null, new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });

    it("should return true for two empty trees", () => {
        expect(isSameTree(null, null)).toBe(true);
    });

    it("should return false for one empty tree", () => {
        const p = new TreeNode(1);
        expect(isSameTree(p, null)).toBe(false);
    });

    it("should return true for single node trees with same value", () => {
        const p = new TreeNode(1);
        const q = new TreeNode(1);
        expect(isSameTree(p, q)).toBe(true);
    });

    it("should return false for single node trees with different values", () => {
        const p = new TreeNode(1);
        const q = new TreeNode(2);
        expect(isSameTree(p, q)).toBe(false);
    });
});

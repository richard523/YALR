import { TreeNode } from "./100.same-tree";
import { maxDepth } from "./104.maximum-depth-of-binary-tree";

describe("maxDepth", () => {
    it("should return 3 for tree with depth 3", () => {
        const root = new TreeNode(3, 
            new TreeNode(9),
            new TreeNode(20, 
                new TreeNode(15),
                new TreeNode(7)
            )
        );
        expect(maxDepth(root)).toBe(3);
    });

    it("should return 1 for single node tree", () => {
        const root = new TreeNode(1);
        expect(maxDepth(root)).toBe(1);
    });

    it("should return 0 for empty tree", () => {
        expect(maxDepth(null)).toBe(0);
    });

    it("should return 2 for tree with depth 2", () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        expect(maxDepth(root)).toBe(2);
    });

    it("should handle left-skewed tree", () => {
        const root = new TreeNode(1, 
            new TreeNode(2, 
                new TreeNode(3, 
                    new TreeNode(4)
                )
            )
        );
        expect(maxDepth(root)).toBe(4);
    });

    it("should handle right-skewed tree", () => {
        const root = new TreeNode(1, null,
            new TreeNode(2, null,
                new TreeNode(3, null,
                    new TreeNode(4)
                )
            )
        );
        expect(maxDepth(root)).toBe(4);
    });
});

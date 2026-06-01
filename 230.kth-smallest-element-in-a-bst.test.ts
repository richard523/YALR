import { TreeNode } from "./100.same-tree";
import { kthSmallest } from "./230.kth-smallest-element-in-a-bst";

describe("kthSmallest", () => {
    it("should return 1 for tree [3,1,4,null,2], k=1", () => {
        const root = new TreeNode(3,
            new TreeNode(1, null, new TreeNode(2)),
            new TreeNode(4)
        );
        expect(kthSmallest(root, 1)).toBe(1);
    });

    it("should return 3 for tree [5,3,6,2,4,null,null,1], k=3", () => {
        const root = new TreeNode(5,
            new TreeNode(3,
                new TreeNode(2, new TreeNode(1)),
                new TreeNode(4)
            ),
            new TreeNode(6)
        );
        expect(kthSmallest(root, 3)).toBe(3);
    });

    it("should return 1 for single node tree, k=1", () => {
        const root = new TreeNode(1);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    it("should return the smallest element for k=1", () => {
        const root = new TreeNode(10,
            new TreeNode(5),
            new TreeNode(15)
        );
        expect(kthSmallest(root, 1)).toBe(5);
    });

    it("should return the largest element for k equal to tree size", () => {
        const root = new TreeNode(10,
            new TreeNode(5),
            new TreeNode(15)
        );
        expect(kthSmallest(root, 3)).toBe(15);
    });
});

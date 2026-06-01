import { TreeNode } from "./100.same-tree";
import { levelOrder } from "./102.binary-tree-level-order-traversal";

describe("levelOrder", () => {
    it("should return [[3],[9,20],[15,7]] for tree [3,9,20,null,null,15,7]", () => {
        const root = new TreeNode(3, 
            new TreeNode(9),
            new TreeNode(20, 
                new TreeNode(15),
                new TreeNode(7)
            )
        );
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    it("should return [] for empty tree", () => {
        expect(levelOrder(null)).toEqual([]);
    });

    it("should return [[1]] for single node tree", () => {
        const root = new TreeNode(1);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    it("should return [[1],[2,3]] for tree [1,2,3]", () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(levelOrder(root)).toEqual([[1], [2, 3]]);
    });

    it("should handle skewed tree", () => {
        const root = new TreeNode(1, 
            new TreeNode(2, 
                new TreeNode(3)
            )
        );
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });
});

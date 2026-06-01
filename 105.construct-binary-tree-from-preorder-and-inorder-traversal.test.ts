import { buildTree } from "./105.construct-binary-tree-from-preorder-and-inorder-traversal";
import { TreeNode, isSameTree } from "./100.same-tree";

describe("buildTree", () => {
    it("should build tree from preorder [3,9,20,15,7] and inorder [9,3,15,20,7]", () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        
        // Expected tree:
        //       3
        //      / \
        //     9  20
        //       /  \
        //      15   7
        const expected = new TreeNode(3);
        expected.left = new TreeNode(9);
        expected.right = new TreeNode(20);
        expected.right.left = new TreeNode(15);
        expected.right.right = new TreeNode(7);
        
        const result = buildTree(preorder, inorder);
        expect(isSameTree(result, expected)).toBe(true);
    });

    it("should return null for empty arrays", () => {
        expect(buildTree([], [])).toBe(null);
    });

    it("should build tree from single node", () => {
        const preorder = [1];
        const inorder = [1];
        
        const expected = new TreeNode(1);
        const result = buildTree(preorder, inorder);
        expect(isSameTree(result, expected)).toBe(true);
    });

    it("should build left-skewed tree", () => {
        const preorder = [1, 2, 3, 4];
        const inorder = [4, 3, 2, 1];
        
        // Expected tree:
        //       1
        //      /
        //     2
        //    /
        //   3
        //  /
        // 4
        const expected = new TreeNode(1);
        expected.left = new TreeNode(2);
        expected.left.left = new TreeNode(3);
        expected.left.left.left = new TreeNode(4);
        
        const result = buildTree(preorder, inorder);
        expect(isSameTree(result, expected)).toBe(true);
    });

    it("should build right-skewed tree", () => {
        const preorder = [1, 2, 3, 4];
        const inorder = [1, 2, 3, 4];
        
        // Expected tree:
        //       1
        //        \
        //         2
        //          \
        //           3
        //            \
        //             4
        const expected = new TreeNode(1);
        expected.right = new TreeNode(2);
        expected.right.right = new TreeNode(3);
        expected.right.right.right = new TreeNode(4);
        
        const result = buildTree(preorder, inorder);
        expect(isSameTree(result, expected)).toBe(true);
    });
});

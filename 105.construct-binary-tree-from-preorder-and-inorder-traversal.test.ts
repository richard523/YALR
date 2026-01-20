import { buildTree } from "./105.construct-binary-tree-from-preorder-and-inorder-traversal";
import { TreeNode } from "./226.invert-binary-tree";

function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const res: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push(null);
        }
    }

    // Remove trailing nulls to match LeetCode format
    while (res.length > 0 && res[res.length - 1] === null) {
        res.pop();
    }
    return res;
}

describe("buildTree", () => {
    it("should return [3, 9, 20, null, null, 15, 7] for preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]", () => {
        const result = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
        expect(treeToArray(result)).toEqual([3, 9, 20, null, null, 15, 7]);
    });

    it("should return [-1] for preorder = [-1], inorder = [-1]", () => {
        const result = buildTree([-1], [-1]);
        expect(treeToArray(result)).toEqual([-1]);
    });

    it("should handle prompt example [1, 2, 3, 4] for preorder, [2, 1, 3, 4] for inorder", () => {
        const result = buildTree([1, 2, 3, 4], [2, 1, 3, 4]);
        // [1, 2, 3, null, null, null, 4]
        expect(treeToArray(result)).toEqual([1, 2, 3, null, null, null, 4]);
    });

    it("should construct a larger tree correctly", () => {
        const preorder = [1, 2, 4, 5, 3, 6, 7];
        const inorder = [4, 2, 5, 1, 6, 3, 7];
        const result = buildTree(preorder, inorder);
        expect(treeToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
});

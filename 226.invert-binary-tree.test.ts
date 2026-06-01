import { TreeNode } from "./100.same-tree";
import { invertTree } from "./226.invert-binary-tree";

function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        if (node === null) {
            result.push(null);
            continue;
        }
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }
    
    // Remove trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

describe("invertTree", () => {
    it("should invert tree [4,2,7,1,3,6,9]", () => {
        const root = new TreeNode(4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(7, new TreeNode(6), new TreeNode(9))
        );
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    it("should return null for empty tree", () => {
        expect(invertTree(null)).toBeNull();
    });

    it("should return the same tree for single node", () => {
        const root = new TreeNode(1);
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([1]);
    });

    it("should handle left-skewed tree", () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([1, null, 2, null, 3]);
    });

    it("should handle right-skewed tree", () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([1, 2, null, 3]);
    });
});

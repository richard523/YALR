import { maxPathSum } from "./124.binary-tree-maximum-path-sum";
import { TreeNode } from "./226.invert-binary-tree";

function arrayToTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) return null;
    const root = new TreeNode(arr[0]!);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const curr = queue.shift()!;
        if (arr[i] !== null) {
            curr.left = new TreeNode(arr[i]!);
            queue.push(curr.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            curr.right = new TreeNode(arr[i]!);
            queue.push(curr.right);
        }
        i++;
    }
    return root;
}

describe("maxPathSum", () => {
    it("should return 6 for [1, 2, 3]", () => {
        const root = arrayToTree([1, 2, 3]);
        expect(maxPathSum(root)).toBe(6);
    });

    it("should return 42 for [-10, 9, 20, null, null, 15, 7]", () => {
        const root = arrayToTree([-10, 9, 20, null, null, 15, 7]);
        expect(maxPathSum(root)).toBe(42);
    });

    it("should return 40 for prompt example [-15, 10, 20, null, null, 15, 5, -5]", () => {
        const root = arrayToTree([-15, 10, 20, null, null, 15, 5, -5]);
        expect(maxPathSum(root)).toBe(40);
    });

    it("should handle tree with all negative values", () => {
        const root = arrayToTree([-3]);
        expect(maxPathSum(root)).toBe(-3);
    });

    it("should handle multiple negative values", () => {
        const root = arrayToTree([-2, -1]);
        expect(maxPathSum(root)).toBe(-1);
    });
});

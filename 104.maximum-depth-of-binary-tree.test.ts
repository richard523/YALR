import { maxDepth } from "./104.maximum-depth-of-binary-tree";
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

describe("maxDepth", () => {
    it("should return 3 for [3, 9, 20, null, null, 15, 7]", () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(maxDepth(root)).toBe(3);
    });

    it("should return 2 for [1, null, 2]", () => {
        const root = arrayToTree([1, null, 2]);
        expect(maxDepth(root)).toBe(2);
    });

    it("should return 0 for empty tree", () => {
        expect(maxDepth(null)).toBe(0);
    });

    it("should return 3 for prompt example [1, 2, 3, null, null, 4]", () => {
        const root = arrayToTree([1, 2, 3, null, null, 4]);
        expect(maxDepth(root)).toBe(3);
    });

    it("should return 1 for single node tree", () => {
        const root = new TreeNode(1);
        expect(maxDepth(root)).toBe(1);
    });
});

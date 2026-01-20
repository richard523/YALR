import { isBalanced } from "./110.balanced-binary-tree";
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

describe("isBalanced", () => {
    it("should return true for [3, 9, 20, null, null, 15, 7]", () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(isBalanced(root)).toBe(true);
    });

    it("should return false for [1, 2, 2, 3, 3, null, null, 4, 4]", () => {
        const root = arrayToTree([1, 2, 2, 3, 3, null, null, 4, 4]);
        expect(isBalanced(root)).toBe(false);
    });

    it("should return true for empty tree", () => {
        expect(isBalanced(null)).toBe(true);
    });

    it("should return true for prompt example [1, 2, 3, null, null, 4]", () => {
        const root = arrayToTree([1, 2, 3, null, null, 4]);
        expect(isBalanced(root)).toBe(true);
    });

    it("should return false for prompt example [1, 2, 3, null, null, 4, null, 5]", () => {
        // [1, 2, 3, null, null, 4, null, 5]
        const root = arrayToTree([1, 2, 3, null, null, 4, null, 5]);
        expect(isBalanced(root)).toBe(false);
    });
});

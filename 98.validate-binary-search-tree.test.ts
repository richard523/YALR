import { isValidBST } from "./98.validate-binary-search-tree";
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

describe("isValidBST", () => {
    it("should return true for [2, 1, 3]", () => {
        const root = arrayToTree([2, 1, 3]);
        expect(isValidBST(root)).toBe(true);
    });

    it("should return false for [5, 1, 4, null, null, 3, 6]", () => {
        const root = arrayToTree([5, 1, 4, null, null, 3, 6]);
        expect(isValidBST(root)).toBe(false);
    });

    it("should return false for prompt example [1, 2, 3]", () => {
        const root = arrayToTree([1, 2, 3]);
        expect(isValidBST(root)).toBe(false);
    });

    it("should handle single node tree [1]", () => {
        const root = arrayToTree([1]);
        expect(isValidBST(root)).toBe(true);
    });

    it("should return false for root with equal child value", () => {
        const root = arrayToTree([1, 1]);
        expect(isValidBST(root)).toBe(false);
    });

    it("should handle larger trees correctly", () => {
        const root = arrayToTree([5, 4, 6, null, null, 3, 7]);
        // 3 is in right subtree of 5 but less than 5 -> false
        expect(isValidBST(root)).toBe(false);
    });
});

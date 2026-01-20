import { isSameTree } from "./100.same-tree";
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

describe("isSameTree", () => {
    it("should return true for p = [1, 2, 3], q = [1, 2, 3]", () => {
        const p = arrayToTree([1, 2, 3]);
        const q = arrayToTree([1, 2, 3]);
        expect(isSameTree(p, q)).toBe(true);
    });

    it("should return false for p = [1, 2], q = [1, null, 2]", () => {
        const p = arrayToTree([1, 2]);
        const q = arrayToTree([1, null, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });

    it("should return false for p = [1, 2, 1], q = [1, 1, 2]", () => {
        const p = arrayToTree([1, 2, 1]);
        const q = arrayToTree([1, 1, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });

    it("should return false for prompt example [4, 7] and [4, null, 7]", () => {
        const p = arrayToTree([4, 7]);
        const q = arrayToTree([4, null, 7]);
        expect(isSameTree(p, q)).toBe(false);
    });

    it("should return false for prompt example [1, 2, 3] and [1, 3, 2]", () => {
        const p = arrayToTree([1, 2, 3]);
        const q = arrayToTree([1, 3, 2]);
        expect(isSameTree(p, q)).toBe(false);
    });

    it("should return true for both null", () => {
        expect(isSameTree(null, null)).toBe(true);
    });

    it("should return false if only one is null", () => {
        expect(isSameTree(new TreeNode(1), null)).toBe(false);
        expect(isSameTree(null, new TreeNode(1))).toBe(false);
    });
});

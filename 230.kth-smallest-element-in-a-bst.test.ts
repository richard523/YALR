import { kthSmallest } from "./230.kth-smallest-element-in-a-bst";
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

describe("kthSmallest", () => {
    it("should return 1 for root = [3, 1, 4, null, 2], k = 1", () => {
        const root = arrayToTree([3, 1, 4, null, 2]);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    it("should return 3 for root = [5, 3, 6, 2, 4, null, null, 1], k = 3", () => {
        const root = arrayToTree([5, 3, 6, 2, 4, null, null, 1]);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    it("should return 1 for prompt example [2, 1, 3], k = 1", () => {
        const root = arrayToTree([2, 1, 3]);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    it("should return 5 for prompt example [4, 3, 5, 2, null], k = 4", () => {
        const root = arrayToTree([4, 3, 5, 2, null]);
        expect(kthSmallest(root, 4)).toBe(5);
    });

    it("should return correct value for largest k", () => {
        const root = arrayToTree([4, 3, 5, 2, null]);
        expect(kthSmallest(root, 4)).toBe(5);
    });
});

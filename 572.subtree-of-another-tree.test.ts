import { isSubtree } from "./572.subtree-of-another-tree";
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

describe("isSubtree", () => {
    it("should return true for root = [3,4,5,1,2], subRoot = [4,1,2]", () => {
        const root = arrayToTree([3, 4, 5, 1, 2]);
        const subRoot = arrayToTree([4, 1, 2]);
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("should return false for root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]", () => {
        const root = arrayToTree([3, 4, 5, 1, 2, null, null, null, null, 0]);
        const subRoot = arrayToTree([4, 1, 2]);
        expect(isSubtree(root, subRoot)).toBe(false);
    });

    it("should return true for prompt example 1: [1,2,3,4,5] and [2,4,5]", () => {
        const root = arrayToTree([1, 2, 3, 4, 5]);
        const subRoot = arrayToTree([2, 4, 5]);
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("should return false for prompt example 2: [1,2,3,4,5,null,null,6] and [2,4,5]", () => {
        const root = arrayToTree([1, 2, 3, 4, 5, null, null, 6]);
        const subRoot = arrayToTree([2, 4, 5]);
        expect(isSubtree(root, subRoot)).toBe(false);
    });

    it("should return true when trees are identical", () => {
        const root = arrayToTree([1, 2, 3]);
        const subRoot = arrayToTree([1, 2, 3]);
        expect(isSubtree(root, subRoot)).toBe(true);
    });

    it("should return false when subRoot is not present", () => {
        const root = arrayToTree([1, 2, 3]);
        const subRoot = arrayToTree([4]);
        expect(isSubtree(root, subRoot)).toBe(false);
    });
});

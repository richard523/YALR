import { rightSideView } from "./199.binary-tree-right-side-view";
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

describe("rightSideView", () => {
    it("should return [1, 3, 4] for [1, 2, 3, null, 5, null, 4]", () => {
        const root = arrayToTree([1, 2, 3, null, 5, null, 4]);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    it("should return [1, 3] for [1, null, 3]", () => {
        const root = arrayToTree([1, null, 3]);
        expect(rightSideView(root)).toEqual([1, 3]);
    });

    it("should return [] for empty tree", () => {
        expect(rightSideView(null)).toEqual([]);
    });

    it("should return [1, 3] for prompt example [1, 2, 3]", () => {
        const root = arrayToTree([1, 2, 3]);
        expect(rightSideView(root)).toEqual([1, 3]);
    });

    it("should return [1, 3, 7] for prompt example [1, 2, 3, 4, 5, 6, 7]", () => {
        const root = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
        expect(rightSideView(root)).toEqual([1, 3, 7]);
    });

    it("should handle a left-heavy tree", () => {
        const root = arrayToTree([1, 2, null, 3, null, 4]);
        expect(rightSideView(root)).toEqual([1, 2, 3, 4]);
    });
});

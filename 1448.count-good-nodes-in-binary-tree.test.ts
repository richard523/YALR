import { goodNodes } from "./1448.count-good-nodes-in-binary-tree";
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

describe("goodNodes", () => {
    it("should return 4 for [3, 1, 4, 3, null, 1, 5]", () => {
        const root = arrayToTree([3, 1, 4, 3, null, 1, 5]);
        expect(goodNodes(root)).toBe(4);
    });

    it("should return 3 for [3, 3, null, 4, 2]", () => {
        const root = arrayToTree([3, 3, null, 4, 2]);
        expect(goodNodes(root)).toBe(3);
    });

    it("should return 1 for [1]", () => {
        const root = arrayToTree([1]);
        expect(goodNodes(root)).toBe(1);
    });

    it("should return 3 for prompt example 1: [2, 1, 1, 3, null, 1, 5]", () => {
        const root = arrayToTree([2, 1, 1, 3, null, 1, 5]);
        expect(goodNodes(root)).toBe(3);
    });

    it("should return 4 for prompt example 2: [1, 2, -1, 3, 4]", () => {
        const root = arrayToTree([1, 2, -1, 3, 4]);
        expect(goodNodes(root)).toBe(4);
    });

    it("should handle all nodes being the same value", () => {
        const root = arrayToTree([3, 3, 3, 3, 3]);
        expect(goodNodes(root)).toBe(5);
    });

    it("should handle strictly decreasing values", () => {
        const root = arrayToTree([10, 8, null, 6, null, 4]);
        expect(goodNodes(root)).toBe(1); // Only root
    });
});

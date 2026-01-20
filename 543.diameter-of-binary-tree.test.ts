import { diameterOfBinaryTree } from "./543.diameter-of-binary-tree";
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

describe("diameterOfBinaryTree", () => {
    it("should return 3 for [1, 2, 3, 4, 5]", () => {
        const root = arrayToTree([1, 2, 3, 4, 5]);
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it("should return 1 for [1, 2]", () => {
        const root = arrayToTree([1, 2]);
        expect(diameterOfBinaryTree(root)).toBe(1);
    });

    it("should return 3 for prompt example [1, null, 2, null, null, 3, 4, 5]", () => {
        // [1, null, 2, 3, 4, 5] in level order:
        //      1
        //    /   \
        //  null   2
        //        / \
        //       3   4
        //      /
        //     5
        // Path: 5 -> 3 -> 2 -> 4 (length 3) or 5 -> 3 -> 2 -> 1 (length 3)
        const root = arrayToTree([1, null, 2, 3, 4, 5]);
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it("should return 2 for prompt example [1, 2, 3]", () => {
        const root = arrayToTree([1, 2, 3]);
        expect(diameterOfBinaryTree(root)).toBe(2);
    });

    it("should return 0 for single node tree", () => {
        const root = new TreeNode(1);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });
});

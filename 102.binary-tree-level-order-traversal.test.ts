import { levelOrder } from "./102.binary-tree-level-order-traversal";
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

describe("levelOrder", () => {
    it("should return [[3],[9,20],[15,7]] for [3, 9, 20, null, null, 15, 7]", () => {
        const root = arrayToTree([3, 9, 20, null, null, 15, 7]);
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    it("should return [[1]] for [1]", () => {
        const root = arrayToTree([1]);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    it("should return [] for empty tree", () => {
        expect(levelOrder(null)).toEqual([]);
    });

    it("should return [[1],[2,3],[4,5,6,7]] for prompt example [1, 2, 3, 4, 5, 6, 7]", () => {
        const root = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
        expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
    });

    it("should handle skewed tree", () => {
        const root = arrayToTree([1, 2, null, 3, null, 4]);
        expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
    });
});

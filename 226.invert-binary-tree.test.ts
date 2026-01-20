import { invertTree, TreeNode } from "./226.invert-binary-tree";

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

function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const res: (number | null)[] = [];
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr) {
            res.push(curr.val);
            queue.push(curr.left!);
            queue.push(curr.right!);
        } else {
            res.push(null);
        }
    }
    // Remove trailing nulls
    while (res[res.length - 1] === null) {
        res.pop();
    }
    return res;
}

describe("invertTree", () => {
    it("should invert [4, 2, 7, 1, 3, 6, 9] to [4, 7, 2, 9, 6, 3, 1]", () => {
        const root = arrayToTree([4, 2, 7, 1, 3, 6, 9]);
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    it("should invert [2, 1, 3] to [2, 3, 1]", () => {
        const root = arrayToTree([2, 1, 3]);
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([2, 3, 1]);
    });

    it("should return null for empty tree", () => {
        expect(invertTree(null)).toBe(null);
    });

    it("should handle prompt example [1, 2, 3, 4, 5, 6, 7]", () => {
        const root = arrayToTree([1, 2, 3, 4, 5, 6, 7]);
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([1, 3, 2, 7, 6, 5, 4]);
    });

    it("should handle [3, 2, 1]", () => {
        const root = arrayToTree([3, 2, 1]);
        const inverted = invertTree(root);
        expect(treeToArray(inverted)).toEqual([3, 1, 2]);
    });
});

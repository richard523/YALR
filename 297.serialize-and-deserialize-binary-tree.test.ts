import { serialize, deserialize } from "./297.serialize-and-deserialize-binary-tree";
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

function treesAreEqual(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return treesAreEqual(p.left, q.left) && treesAreEqual(p.right, q.right);
}

describe("Serialize and Deserialize Binary Tree", () => {
    it("should correctly handle [1, 2, 3, null, null, 4, 5]", () => {
        const root = arrayToTree([1, 2, 3, null, null, 4, 5]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treesAreEqual(root, deserialized)).toBe(true);
    });

    it("should correctly handle empty tree", () => {
        const root = null;
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(deserialized).toBe(null);
    });

    it("should correctly handle single node tree", () => {
        const root = new TreeNode(1);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treesAreEqual(root, deserialized)).toBe(true);
    });

    it("should correctly handle skewed tree", () => {
        const root = arrayToTree([1, 2, null, 3, null, 4]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treesAreEqual(root, deserialized)).toBe(true);
    });

    it("should correctly handle tree with negative values", () => {
        const root = arrayToTree([1, -2, 3, null, null, -4, 5]);
        const serialized = serialize(root);
        const deserialized = deserialize(serialized);
        expect(treesAreEqual(root, deserialized)).toBe(true);
    });
});

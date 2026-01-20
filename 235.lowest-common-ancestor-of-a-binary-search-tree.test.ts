import { lowestCommonAncestor } from "./235.lowest-common-ancestor-of-a-binary-search-tree";
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

function findNode(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

describe("lowestCommonAncestor", () => {
    it("should return 6 for root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", () => {
        const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = findNode(root, 2);
        const q = findNode(root, 8);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(6);
    });

    it("should return 2 for root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", () => {
        const root = arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = findNode(root, 2);
        const q = findNode(root, 4);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(2);
    });

    it("should return 5 for prompt example 1: [5,3,8,1,4,7,9,null,2], p = 3, q = 8", () => {
        const root = arrayToTree([5, 3, 8, 1, 4, 7, 9, null, 2]);
        const p = findNode(root, 3);
        const q = findNode(root, 8);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(5);
    });

    it("should return 3 for prompt example 2: [5,3,8,1,4,7,9,null,2], p = 3, q = 4", () => {
        const root = arrayToTree([5, 3, 8, 1, 4, 7, 9, null, 2]);
        const p = findNode(root, 3);
        const q = findNode(root, 4);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(3);
    });

    it("should return 2 for [2, 1], p = 2, q = 1", () => {
        const root = arrayToTree([2, 1]);
        const p = findNode(root, 2);
        const q = findNode(root, 1);
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(2);
    });
});

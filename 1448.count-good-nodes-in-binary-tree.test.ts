import { goodNodes } from "./1448.count-good-nodes-in-binary-tree";
import { TreeNode } from "./100.same-tree";

describe("goodNodes", () => {
    it("should return 4 for tree [3,1,4,3,null,1,5]", () => {
        // Tree:       3
        //           /   \
        //          1     4
        //         /     / \
        //        3     1   5
        const root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.left = new TreeNode(3);
        root.right.left = new TreeNode(1);
        root.right.right = new TreeNode(5);
        
        // Good nodes are: 3, 1, 4, 5 (the 1 under 4 is not good because 4 is the max)
        // Actually: 3 (root), 1 (left), 4 (right), 3 (left-left), 1 (right-left), 5 (right-right)
        // Max along path to 3: 3 -> 1 -> 3, max=3, 3>=3 so good
        // Max along path to 1: 3 -> 1, max=3, 1<3 so not good
        // Max along path to 4: 3 -> 4, max=4, 4>=4 so good
        // Max along path to 1: 3 -> 4 -> 1, max=4, 1<4 so not good
        // Max along path to 5: 3 -> 4 -> 5, max=5, 5>=5 so good
        // So good nodes: 3, 3, 4, 5 = 4 nodes
        expect(goodNodes(root)).toBe(4);
    });

    it("should return 1 for single node", () => {
        const root = new TreeNode(1);
        expect(goodNodes(root)).toBe(1);
    });

    it("should return 0 for empty tree", () => {
        expect(goodNodes(null)).toBe(0);
    });

    it("should return only root for decreasing values", () => {
        // Tree:       5
        //           /   \
        //          4     3
        //         / \   / \
        //        2   1 1   0
        const root = new TreeNode(5);
        root.left = new TreeNode(4);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(1);
        root.right.left = new TreeNode(1);
        root.right.right = new TreeNode(0);
        
        // Only root is good because all other nodes have values < 5
        expect(goodNodes(root)).toBe(1);
    });

    it("should return all nodes for increasing values", () => {
        // Tree:       1
        //           /   \
        //          2     3
        //         / \   / \
        //        4   5 6   7
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        
        // All nodes are good because each becomes the new max along its path
        // Path to 1: max=1, 1>=1 -> good
        // Path to 2: 1->2, max=2, 2>=2 -> good
        // Path to 3: 1->3, max=3, 3>=3 -> good
        // Path to 4: 1->2->4, max=4, 4>=4 -> good
        // Path to 5: 1->2->5, max=5, 5>=5 -> good
        // Path to 6: 1->3->6, max=6, 6>=6 -> good
        // Path to 7: 1->3->7, max=7, 7>=7 -> good
        expect(goodNodes(root)).toBe(7);
    });
});

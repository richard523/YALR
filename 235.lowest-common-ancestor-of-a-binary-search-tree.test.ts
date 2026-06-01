import { TreeNode } from "./100.same-tree";
import { lowestCommonAncestor } from "./235.lowest-common-ancestor-of-a-binary-search-tree";

describe("lowestCommonAncestor", () => {
    it("should find LCA of 2 and 8 in BST [6,2,8,0,4,7,9,null,null,3,5]", () => {
        const root = new TreeNode(6,
            new TreeNode(2,
                new TreeNode(0),
                new TreeNode(4,
                    new TreeNode(3),
                    new TreeNode(5)
                )
            ),
            new TreeNode(8,
                new TreeNode(7),
                new TreeNode(9)
            )
        );
        const p = root.left; // 2
        const q = root.right; // 8
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(6);
    });

    it("should find LCA of 2 and 4 in BST [6,2,8,0,4,7,9,null,null,3,5]", () => {
        const root = new TreeNode(6,
            new TreeNode(2,
                new TreeNode(0),
                new TreeNode(4,
                    new TreeNode(3),
                    new TreeNode(5)
                )
            ),
            new TreeNode(8,
                new TreeNode(7),
                new TreeNode(9)
            )
        );
        const p = root.left; // 2
        const q = root.left.right; // 4
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(2);
    });

    it("should return null for null inputs", () => {
        expect(lowestCommonAncestor(null, null, null)).toBeNull();
    });

    it("should return the node itself if it's one of p or q", () => {
        const root = new TreeNode(5,
            new TreeNode(3),
            new TreeNode(7)
        );
        const p = root;
        const q = root.left;
        const lca = lowestCommonAncestor(root, p, q);
        expect(lca?.val).toBe(5);
    });
});

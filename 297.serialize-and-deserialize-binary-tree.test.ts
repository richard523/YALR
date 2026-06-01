import { Codec } from "./297.serialize-and-deserialize-binary-tree";
import { TreeNode, isSameTree } from "./100.same-tree";

describe("Codec", () => {
    it("should serialize and deserialize basic tree", () => {
        const codec = new Codec();
        
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        
        const serialized = codec.serialize(root);
        const deserialized = codec.deserialize(serialized);
        
        expect(isSameTree(root, deserialized)).toBe(true);
    });

    it("should handle empty tree", () => {
        const codec = new Codec();
        
        const serialized = codec.serialize(null);
        const deserialized = codec.deserialize(serialized);
        
        expect(deserialized).toBe(null);
    });

    it("should handle single node", () => {
        const codec = new Codec();
        
        const root = new TreeNode(42);
        const serialized = codec.serialize(root);
        const deserialized = codec.deserialize(serialized);
        
        expect(isSameTree(root, deserialized)).toBe(true);
    });

    it("should handle left-skewed tree", () => {
        const codec = new Codec();
        
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        
        const serialized = codec.serialize(root);
        const deserialized = codec.deserialize(serialized);
        
        expect(isSameTree(root, deserialized)).toBe(true);
    });

    it("should handle right-skewed tree", () => {
        const codec = new Codec();
        
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        
        const serialized = codec.serialize(root);
        const deserialized = codec.deserialize(serialized);
        
        expect(isSameTree(root, deserialized)).toBe(true);
    });

    it("should handle tree with negative values", () => {
        const codec = new Codec();
        
        const root = new TreeNode(-1);
        root.left = new TreeNode(-2);
        root.right = new TreeNode(-3);
        
        const serialized = codec.serialize(root);
        const deserialized = codec.deserialize(serialized);
        
        expect(isSameTree(root, deserialized)).toBe(true);
    });
});

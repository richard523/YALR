import { Trie } from "./208.implement-trie-prefix-tree";

describe("Trie", () => {
    let trie: Trie;

    beforeEach(() => {
        trie = new Trie();
    });

    it("should handle the apple/app example", () => {
        trie.insert("apple");
        expect(trie.search("apple")).toBe(true);
        expect(trie.search("app")).toBe(false);
        expect(trie.startsWith("app")).toBe(true);
        trie.insert("app");
        expect(trie.search("app")).toBe(true);
    });

    it("should handle the dog/do example from prompt", () => {
        trie.insert("dog");
        expect(trie.search("dog")).toBe(true);
        expect(trie.search("do")).toBe(false);
        expect(trie.startsWith("do")).toBe(true);
        trie.insert("do");
        expect(trie.search("do")).toBe(true);
    });

    it("should return false for words not inserted", () => {
        trie.insert("hello");
        expect(trie.search("hell")).toBe(false);
        expect(trie.search("helloo")).toBe(false);
        expect(trie.startsWith("hell")).toBe(true);
        expect(trie.startsWith("helloo")).toBe(false);
    });

    it("should handle empty strings if constraints allowed (though 1 <= length)", () => {
        // Just for robustness
        expect(trie.search("")).toBe(false);
        expect(trie.startsWith("")).toBe(true);
    });

    it("should handle multiple words with shared prefixes", () => {
        trie.insert("news");
        trie.insert("new");
        trie.insert("newspaper");
        expect(trie.search("new")).toBe(true);
        expect(trie.search("news")).toBe(true);
        expect(trie.search("newspa")).toBe(false);
        expect(trie.startsWith("newspa")).toBe(true);
        expect(trie.search("newspaper")).toBe(true);
    });
});

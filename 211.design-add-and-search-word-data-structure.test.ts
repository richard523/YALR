import { WordDictionary } from "./211.design-add-and-search-word-data-structure";

describe("WordDictionary", () => {
    let wd: WordDictionary;

    beforeEach(() => {
        wd = new WordDictionary();
    });

    it("should handle the basic example", () => {
        wd.addWord("bad");
        wd.addWord("dad");
        wd.addWord("mad");
        expect(wd.search("pad")).toBe(false);
        expect(wd.search("bad")).toBe(true);
        expect(wd.search(".ad")).toBe(true);
        expect(wd.search("b..")).toBe(true);
    });

    it("should handle the prompt example", () => {
        wd.addWord("day");
        wd.addWord("bay");
        wd.addWord("may");
        expect(wd.search("say")).toBe(false);
        expect(wd.search("day")).toBe(true);
        expect(wd.search(".ay")).toBe(true);
        expect(wd.search("b..")).toBe(true);
    });

    it("should handle words of different lengths", () => {
        wd.addWord("a");
        wd.addWord("ab");
        expect(wd.search("a")).toBe(true);
        expect(wd.search("ab")).toBe(true);
        expect(wd.search(".")).toBe(true);
        expect(wd.search("..")).toBe(true);
        expect(wd.search("...")).toBe(false);
    });

    it("should handle multiple dots in different positions", () => {
        wd.addWord("apple");
        expect(wd.search("a.p.e")).toBe(true);
        expect(wd.search(".pp..")).toBe(true);
        expect(wd.search(".....")).toBe(true);
        expect(wd.search("....")).toBe(false);
    });

    it("should handle prefix patterns correctly", () => {
        wd.addWord("word");
        expect(wd.search("wor")).toBe(false);
        expect(wd.search("word")).toBe(true);
        expect(wd.search("wor.")).toBe(true);
    });
});

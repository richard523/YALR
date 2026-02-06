import { findWords } from "./212.word-search-ii";

describe("findWords", () => {
    it("should find multiple words in the board", () => {
        const board = [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"]
        ];
        const words = ["oath", "pea", "eat", "rain"];
        const result = findWords(board, words).sort();
        expect(result).toEqual(["eat", "oath"]);
    });

    it("should return empty array if no words are found", () => {
        const board = [
            ["a", "b"],
            ["c", "d"]
        ];
        const words = ["abcb"];
        expect(findWords(board, words)).toEqual([]);
    });

    it("should handle the prompt example correctly", () => {
        const board = [
            ["a", "b", "c", "d"],
            ["s", "a", "a", "t"],
            ["a", "c", "k", "e"],
            ["a", "c", "d", "n"]
        ];
        const words = ["bat", "cat", "back", "backend", "stack"];
        const result = findWords(board, words).sort();
        expect(result).toEqual(["back", "backend", "cat"]);
    });

    it("should handle overlapping words", () => {
        const board = [
            ["a", "b", "c"],
            ["a", "e", "f"],
            ["g", "h", "i"]
        ];
        const words = ["abc", "abeh", "abi"];
        const result = findWords(board, words).sort();
        expect(result).toEqual(["abc", "abeh"]);
    });

    it("should work with 1x1 board", () => {
        const board = [["a"]];
        const words = ["a", "b"];
        expect(findWords(board, words)).toEqual(["a"]);
    });
});

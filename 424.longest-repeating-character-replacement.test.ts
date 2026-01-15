import { characterReplacement } from "./424.longest-repeating-character-replacement";

describe("characterReplacement", () => {
    it("should return 4 for s = 'ABAB', k = 2", () => {
        expect(characterReplacement("ABAB", 2)).toBe(4);
    });

    it("should return 4 for s = 'AABABBA', k = 1", () => {
        expect(characterReplacement("AABABBA", 1)).toBe(4);
    });

    it("should return 4 for prompt example s = 'XYYX', k = 2", () => {
        expect(characterReplacement("XYYX", 2)).toBe(4);
    });

    it("should return 5 for prompt example s = 'AAABABB', k = 1", () => {
        expect(characterReplacement("AAABABB", 1)).toBe(5);
    });

    it("should handle cases with k = 0", () => {
        expect(characterReplacement("ABCDE", 0)).toBe(1);
        expect(characterReplacement("AAABBB", 0)).toBe(3);
    });

    it("should handle strings with all same characters", () => {
        expect(characterReplacement("AAAAA", 2)).toBe(5);
    });

    it("should handle k larger than length", () => {
        expect(characterReplacement("ABC", 10)).toBe(3);
    });
});

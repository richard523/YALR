import { lengthOfLongestSubstring } from "./3.longest-substring-without-repeating-characters";

describe("lengthOfLongestSubstring", () => {
    it("should return 3 for 'abcabcbb'", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });

    it("should return 1 for 'bbbbb'", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    });

    it("should return 3 for 'pwwkew'", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });

    it("should return 3 for prompt example 'zxyzxyz'", () => {
        expect(lengthOfLongestSubstring("zxyzxyz")).toBe(3);
    });

    it("should return 1 for prompt example 'xxxx'", () => {
        expect(lengthOfLongestSubstring("xxxx")).toBe(1);
    });

    it("should return 0 for empty string", () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    });

    it("should return correct length for string with symbols and spaces", () => {
        expect(lengthOfLongestSubstring("a b c d ")).toBe(3); // "a b", " b ", "b c", etc. Longest is "a b", " b c", etc. Wait. "a b" is 3. " b c" is 3.
        // "a b " -> 'a', ' ', 'b' -> length 3. Next ' ' -> delete 'a', ' ' -> current is 'b', ' '.
        expect(lengthOfLongestSubstring(" ")).toBe(1);
    });
});

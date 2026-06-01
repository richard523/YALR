import { longestPalindrome } from "./5.longest-palindromic-substring";

describe("longestPalindrome", () => {
    it("should return 'b' for input 'babad'", () => {
        const result = longestPalindrome("babad");
        expect(["bab", "aba"]).toContain(result);
    });

    it("should return 'bb' for input 'cbbd'", () => {
        expect(longestPalindrome("cbbd")).toBe("bb");
    });

    it("should return 'a' for single character", () => {
        expect(longestPalindrome("a")).toBe("a");
    });

    it("should return empty string for empty input", () => {
        expect(longestPalindrome("")).toBe("");
    });

    it("should return the entire string if it's a palindrome", () => {
        expect(longestPalindrome("racecar")).toBe("racecar");
    });

    it("should return a single character for non-palindromic string", () => {
        const result = longestPalindrome("abcdef");
        expect(result.length).toBe(1);
        expect(["a", "b", "c", "d", "e", "f"]).toContain(result);
    });

    it("should handle even length palindromes", () => {
        expect(longestPalindrome("abba")).toBe("abba");
    });

    it("should handle odd length palindromes", () => {
        expect(longestPalindrome("abcba")).toBe("abcba");
    });
});

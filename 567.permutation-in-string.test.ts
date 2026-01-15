import { checkInclusion } from "./567.permutation-in-string";

describe("checkInclusion", () => {
    it("should return true for s1 = 'abc', s2 = 'lecabee'", () => {
        expect(checkInclusion("abc", "lecabee")).toBe(true);
    });

    it("should return false for s1 = 'abc', s2 = 'lecaabee'", () => {
        expect(checkInclusion("abc", "lecaabee")).toBe(false);
    });

    it("should return true for s1 = 'ab', s2 = 'eidbaooo'", () => {
        expect(checkInclusion("ab", "eidbaooo")).toBe(true);
    });

    it("should return false for s1 = 'ab', s2 = 'eidboaoo'", () => {
        expect(checkInclusion("ab", "eidboaoo")).toBe(false);
    });

    it("should return true for identical strings", () => {
        expect(checkInclusion("abc", "abc")).toBe(true);
    });

    it("should handle s1 longer than s2", () => {
        expect(checkInclusion("abcd", "abc")).toBe(false);
    });

    it("should return true for permutation at the very end", () => {
        expect(checkInclusion("hello", "ooollehhhellloooohello")).toBe(true);
    });
});

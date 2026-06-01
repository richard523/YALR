import { minDistance } from "./72.edit-distance";

describe("minDistance", () => {
    it("should return 3 for horse -> ros", () => {
        expect(minDistance("horse", "ros")).toBe(3);
    });

    it("should return 5 for intention -> execution", () => {
        expect(minDistance("intention", "execution")).toBe(5);
    });

    it("should return 0 for identical strings", () => {
        expect(minDistance("abc", "abc")).toBe(0);
    });

    it("should return 1 for single character difference", () => {
        expect(minDistance("abc", "abd")).toBe(1);
    });

    it("should return the length of the longer string when strings are completely different", () => {
        expect(minDistance("abc", "def")).toBe(3);
    });

    it("should handle empty string", () => {
        expect(minDistance("", "abc")).toBe(3);
        expect(minDistance("abc", "")).toBe(3);
    });

    it("should handle single character strings", () => {
        expect(minDistance("a", "b")).toBe(1);
    });
});

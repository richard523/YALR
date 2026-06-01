import { rob } from "./198.house-robber";

describe("rob", () => {
    it("should return 4 for [1,2,3,1]", () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    it("should return 12 for [2,7,9,3,1]", () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });

    it("should return 0 for empty array", () => {
        expect(rob([])).toBe(0);
    });

    it("should return the single element for single element array", () => {
        expect(rob([5])).toBe(5);
    });

    it("should return max of two elements for two element array", () => {
        expect(rob([2, 3])).toBe(3);
    });

    it("should handle larger array", () => {
        expect(rob([2, 1, 1, 2])).toBe(4);
    });
});

import { largestRectangleArea } from "./84.largest-rectangle-in-histogram";

describe("largestRectangleArea", () => {
    it("should return 10 for [2, 1, 5, 6, 2, 3]", () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    it("should return 4 for [2, 4]", () => {
        expect(largestRectangleArea([2, 4])).toBe(4);
    });

    it("should return 8 for [7, 1, 7, 2, 2, 4] (Example 1 from prompt)", () => {
        expect(largestRectangleArea([7, 1, 7, 2, 2, 4])).toBe(8);
    });

    it("should return 7 for [1, 3, 7] (Example 2 from prompt)", () => {
        expect(largestRectangleArea([1, 3, 7])).toBe(7);
    });

    it("should handle single bar [5]", () => {
        expect(largestRectangleArea([5])).toBe(5);
    });

    it("should return 0 for empty heights", () => {
        expect(largestRectangleArea([])).toBe(0);
    });

    it("should handle same height bars [2, 2, 2, 2]", () => {
        expect(largestRectangleArea([2, 2, 2, 2])).toBe(8);
    });

    it("should handle increasing heights [1, 2, 3, 4, 5]", () => {
        expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9); // 3*3=9 or 4*2=8? 3*3=9 (indices 2,3,4 have height >= 3)
    });

    it("should handle decreasing heights [5, 4, 3, 2, 1]", () => {
        expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(9);
    });
});

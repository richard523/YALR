import { findMin } from "./153.find-minimum-in-rotated-sorted-array";

describe("findMin", () => {
    it("should return 1 for [3, 4, 5, 1, 2]", () => {
        expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    });

    it("should return 0 for [4, 5, 6, 7, 0, 1, 2]", () => {
        expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    });

    it("should return 11 for [11, 13, 15, 17]", () => {
        expect(findMin([11, 13, 15, 17])).toBe(11);
    });

    it("should handle single element [1]", () => {
        expect(findMin([1])).toBe(1);
    });

    it("should handle two elements [2, 1]", () => {
        expect(findMin([2, 1])).toBe(1);
    });

    it("should handle two elements [1, 2]", () => {
        expect(findMin([1, 2])).toBe(1);
    });
});

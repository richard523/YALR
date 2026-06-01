import { maxSubArray } from "./53.maximum-subarray";

describe("maxSubArray", () => {
    it("should return 6 for [-2,1,-3,4,-1,2,1,-5,4]", () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    it("should return 1 for [1]", () => {
        expect(maxSubArray([1])).toBe(1);
    });

    it("should return -1 for [-1]", () => {
        expect(maxSubArray([-1])).toBe(-1);
    });

    it("should return 23 for [5,4,-1,7,8]", () => {
        expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    });

    it("should handle all negative numbers", () => {
        expect(maxSubArray([-2, -1, -3, -4])).toBe(-1);
    });

    it("should handle empty array", () => {
        expect(maxSubArray([])).toBeUndefined();
    });
});

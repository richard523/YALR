import { findTargetSumWays } from "./494.target-sum";

describe("findTargetSumWays", () => {
    it("should return 1 for nums=[1,1,1,1,1], target=3", () => {
        expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
    });

    it("should return 0 for nums=[1], target=2", () => {
        expect(findTargetSumWays([1], 2)).toBe(0);
    });

    it("should return 1 for nums=[1], target=1", () => {
        expect(findTargetSumWays([1], 1)).toBe(1);
    });

    it("should return 2 for nums=[1,1], target=0", () => {
        expect(findTargetSumWays([1, 1], 0)).toBe(2);
    });

    it("should return 2 for nums=[1,2,3], target=0", () => {
        expect(findTargetSumWays([1, 2, 3], 0)).toBe(2);
    });

    it("should handle larger array", () => {
        expect(findTargetSumWays([1, 1, 2, 3], 1)).toBe(3);
    });
});

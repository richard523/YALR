import { minCostClimbingStairs } from "./746.min-cost-climbing-stairs";

describe("minCostClimbingStairs", () => {
    it("should handle basic example 1", () => {
        expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
    });

    it("should handle basic example 2", () => {
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
    });

    it("should handle two steps", () => {
        expect(minCostClimbingStairs([10, 15])).toBe(10);
    });

    it("should handle one step", () => {
        expect(minCostClimbingStairs([10])).toBe(0);
    });

    it("should handle increasing costs", () => {
        // [1,2,3,4,5]: dp[5] = min(dp[4]+5, dp[3]+4) = min(6,6) = 6
        expect(minCostClimbingStairs([1, 2, 3, 4, 5])).toBe(6);
    });

    it("should handle decreasing costs", () => {
        // [5,4,3,2,1]: dp[5] = min(dp[4]+1, dp[3]+2) = min(6,6) = 6
        expect(minCostClimbingStairs([5, 4, 3, 2, 1])).toBe(6);
    });
});

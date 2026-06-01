import { combinationSum2 } from "./40.combination-sum-ii";

describe("combinationSum2", () => {
    it("should return all unique combinations for candidates=[1,1,1,2,2,5,6,7], target=8", () => {
        const result = combinationSum2([1, 1, 1, 2, 2, 5, 6, 7], 8);
        expect(result.length).toBe(5); // [1,1,1,5], [1,1,6], [1,2,5], [1,7], [2,6]
    });

    it("should return [[1,2,2],[5]] for candidates=[2,5,2,1,2], target=5", () => {
        const result = combinationSum2([2, 5, 2, 1, 2], 5);
        expect(result.sort()).toEqual([[1, 2, 2], [5]].sort());
    });

    it("should return [] for candidates=[2], target=1", () => {
        expect(combinationSum2([2], 1)).toEqual([]);
    });

    it("should handle empty candidates", () => {
        expect(combinationSum2([], 8)).toEqual([]);
    });
});

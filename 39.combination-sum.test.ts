import { combinationSum } from "./39.combination-sum";

describe("combinationSum", () => {
    it("should return [[2,2,3],[7]] for candidates=[2,3,6,7], target=7", () => {
        const result = combinationSum([2, 3, 6, 7], 7);
        expect(result).toEqual([[2, 2, 3], [7]]);
    });

    it("should return [[2,2,2,2],[2,3,3],[3,5]] for candidates=[2,3,5], target=8", () => {
        const result = combinationSum([2, 3, 5], 8);
        expect(result.sort()).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]].sort());
    });

    it("should return [] for candidates=[2], target=1", () => {
        expect(combinationSum([2], 1)).toEqual([]);
    });

    it("should return [[1,1,1,1,1,1,1,1,1]] for candidates=[1], target=9", () => {
        expect(combinationSum([1], 9)).toEqual([[1, 1, 1, 1, 1, 1, 1, 1, 1]]);
    });

    it("should return empty array for impossible target", () => {
        expect(combinationSum([2, 4, 6], 3)).toEqual([]);
    });
});

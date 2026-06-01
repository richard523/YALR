import { permuteUnique } from "./47.permutations-ii";

describe("permuteUnique", () => {
    it("should return unique permutations for [1,1,2]", () => {
        const result = permuteUnique([1, 1, 2]);
        expect(result.sort()).toEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]].sort());
    });

    it("should return [[1]] for [1]", () => {
        expect(permuteUnique([1])).toEqual([[1]]);
    });

    it("should return [] for []", () => {
        expect(permuteUnique([])).toEqual([[]]);
    });

    it("should handle all duplicates", () => {
        const result = permuteUnique([1, 1, 1]);
        expect(result).toEqual([[1, 1, 1]]);
    });

    it("should return all permutations for [1,2,3] without duplicates", () => {
        const result = permuteUnique([1, 2, 3]);
        expect(result.length).toBe(6);
        expect(result).toEqual([
            [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
        ].sort());
    });
});

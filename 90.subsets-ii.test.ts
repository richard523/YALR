import { subsetsWithDup } from "./90.subsets-ii";

describe("subsetsWithDup", () => {
    it("should return all unique subsets for [1,2,2]", () => {
        const result = subsetsWithDup([1, 2, 2]);
        expect(result.sort()).toEqual([
            [], [1], [1, 2], [1, 2, 2], [2], [2, 2]
        ].sort());
    });

    it("should return all subsets for [0]", () => {
        expect(subsetsWithDup([0])).toEqual([[], [0]]);
    });

    it("should return [[]] for []", () => {
        expect(subsetsWithDup([])).toEqual([[]]);
    });

    it("should handle all duplicates", () => {
        const result = subsetsWithDup([1, 1, 1]);
        expect(result).toEqual([[], [1], [1, 1], [1, 1, 1]]);
    });

    it("should handle no duplicates like regular subsets", () => {
        const result = subsetsWithDup([1, 2, 3]);
        expect(result.length).toBe(8);
    });
});

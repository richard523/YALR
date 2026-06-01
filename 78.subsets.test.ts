import { subsets } from "./78.subsets";

describe("subsets", () => {
    it("should return all subsets for [1,2,3]", () => {
        const result = subsets([1, 2, 3]);
        expect(result.length).toBe(8);
        expect(result).toEqual([
            [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]
        ]);
    });

    it("should return all subsets for [0]", () => {
        expect(subsets([0])).toEqual([[], [0]]);
    });

    it("should return [[]] for []", () => {
        expect(subsets([])).toEqual([[]]);
    });

    it("should return all subsets for [1,2]", () => {
        const result = subsets([1, 2]);
        expect(result).toEqual([[], [1], [1, 2], [2]]);
    });
});

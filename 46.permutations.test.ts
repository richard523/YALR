import { permute } from "./46.permutations";

describe("permute", () => {
    it("should return all permutations for [1,2,3]", () => {
        const result = permute([1, 2, 3]);
        expect(result.length).toBe(6);
        expect(result).toEqual([
            [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
        ].sort());
    });

    it("should return [[1]] for [1]", () => {
        expect(permute([1])).toEqual([[1]]);
    });

    it("should return [] for []", () => {
        expect(permute([])).toEqual([[]]);
    });

    it("should return all permutations for [1,2]", () => {
        const result = permute([1, 2]);
        expect(result.sort()).toEqual([[1, 2], [2, 1]].sort());
    });
});

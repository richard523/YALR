import { combine } from "./77.combinations";

describe("combine", () => {
    it("should return all combinations of 2 out of 4", () => {
        const result = combine(4, 2);
        expect(result.length).toBe(6);
        expect(result).toEqual([
            [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]
        ]);
    });

    it("should return all combinations of 3 out of 4", () => {
        const result = combine(4, 3);
        expect(result.length).toBe(4);
        expect(result).toEqual([
            [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]
        ]);
    });

    it("should return [[1]] for n=1, k=1", () => {
        expect(combine(1, 1)).toEqual([[1]]);
    });

    it("should return [[]] for k=0", () => {
        expect(combine(4, 0)).toEqual([[]]);
    });

    it("should return [] when k > n", () => {
        expect(combine(3, 5)).toEqual([]);
    });
});

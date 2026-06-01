import { singleNumber } from "./136.single-number";

describe("singleNumber", () => {
    it("should return 1 for [2,2,1]", () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });

    it("should return 4 for [4,1,2,1,2]", () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });

    it("should return the only element for single element array", () => {
        expect(singleNumber([7])).toBe(7);
    });

    it("should handle larger array", () => {
        expect(singleNumber([1, 2, 3, 4, 5, 1, 2, 3, 4])).toBe(5);
    });

    it("should handle negative numbers", () => {
        expect(singleNumber([-1, -1, -2])).toBe(-2);
    });
});

import { getSum } from "./371.sum-of-two-integers";

describe("getSum", () => {
    it("should return 3 for 1 + 2", () => {
        expect(getSum(1, 2)).toBe(3);
    });

    it("should return 5 for 2 + 3", () => {
        expect(getSum(2, 3)).toBe(5);
    });

    it("should return 0 for 0 + 0", () => {
        expect(getSum(0, 0)).toBe(0);
    });

    it("should return -1 for -1 + 0", () => {
        expect(getSum(-1, 0)).toBe(-1);
    });

    it("should handle negative numbers: -2 + 3 = 1", () => {
        expect(getSum(-2, 3)).toBe(1);
    });

    it("should handle larger numbers", () => {
        expect(getSum(100, 200)).toBe(300);
    });

    it("should handle negative sum", () => {
        expect(getSum(-5, -3)).toBe(-8);
    });
});

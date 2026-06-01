import { maxProduct } from "./152.maximum-product-subarray";

describe("maxProduct", () => {
    it("should return 6 for [2,3,-2,4]", () => {
        expect(maxProduct([2, 3, -2, 4])).toBe(6);
    });

    it("should return 0 for [0,2]", () => {
        expect(maxProduct([0, 2])).toBe(2);
    });

    it("should return 2 for [2,0]", () => {
        expect(maxProduct([2, 0])).toBe(2);
    });

    it("should return 1 for [-2,0,-1]", () => {
        expect(maxProduct([-2, 0, -1])).toBe(0);
    });

    it("should return 24 for [2,3,-2,4,-1]", () => {
        expect(maxProduct([2, 3, -2, 4, -1])).toBe(48);
    });

    it("should handle negative numbers", () => {
        expect(maxProduct([-2, -3, -4])).toBe(12);
    });

    it("should return the single element for single element array", () => {
        expect(maxProduct([5])).toBe(5);
    });
});

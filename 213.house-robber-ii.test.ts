import { rob } from "./213.house-robber-ii";

describe("rob", () => {
    it("should return 3 for [2,3,2]", () => {
        expect(rob([2, 3, 2])).toBe(3);
    });

    it("should return 4 for [1,2,3,1]", () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    it("should return 0 for empty array", () => {
        expect(rob([])).toBe(0);
    });

    it("should return the single element for single element array", () => {
        expect(rob([5])).toBe(5);
    });

    it("should return 2 for [1,2]", () => {
        expect(rob([1, 2])).toBe(2);
    });

    it("should handle larger circular array", () => {
        expect(rob([1, 3, 1, 3, 100])).toBe(103);
    });
});

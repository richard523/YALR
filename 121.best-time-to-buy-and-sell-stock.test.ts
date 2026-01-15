import { maxProfit } from "./121.best-time-to-buy-and-sell-stock";

describe("maxProfit", () => {
    it("should return 5 for [7, 1, 5, 3, 6, 4]", () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    it("should return 0 for [7, 6, 4, 3, 1]", () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    it("should return 6 for prompt example [10, 1, 5, 6, 7, 1]", () => {
        expect(maxProfit([10, 1, 5, 6, 7, 1])).toBe(6);
    });

    it("should return 0 for prompt example [10, 8, 7, 5, 2]", () => {
        expect(maxProfit([10, 8, 7, 5, 2])).toBe(0);
    });

    it("should handle single day [1]", () => {
        expect(maxProfit([1])).toBe(0);
    });

    it("should return correct profit for [1, 2, 3, 4, 5]", () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });
});

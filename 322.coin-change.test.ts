import { coinChange } from "./322.coin-change";

describe("coinChange", () => {
    it("should return 3 for coins=[1,2,5], amount=11", () => {
        expect(coinChange([1, 2, 5], 11)).toBe(3);
    });

    it("should return -1 for coins=[2], amount=3", () => {
        expect(coinChange([2], 3)).toBe(-1);
    });

    it("should return 0 for amount=0", () => {
        expect(coinChange([1, 2, 5], 0)).toBe(0);
    });

    it("should return 1 for single coin that matches amount", () => {
        expect(coinChange([1, 2, 5], 5)).toBe(1);
    });

    it("should handle larger amount", () => {
        expect(coinChange([1, 3, 4], 6)).toBe(2);
    });

    it("should handle coins that include 1", () => {
        expect(coinChange([1, 2, 3], 7)).toBe(3);
    });
});

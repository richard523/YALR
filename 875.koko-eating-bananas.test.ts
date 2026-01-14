import { minEatingSpeed } from "./875.koko-eating-bananas";

describe("minEatingSpeed", () => {
    it("should return 4 for piles = [3, 6, 7, 11], h = 8", () => {
        expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
    });

    it("should return 30 for piles = [30, 11, 23, 4, 20], h = 5", () => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 5)).toBe(30);
    });

    it("should return 23 for piles = [30, 11, 23, 4, 20], h = 6", () => {
        expect(minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
    });

    it("should handle large h", () => {
        expect(minEatingSpeed([100], 1000)).toBe(1);
    });

    it("should handle h = piles.length", () => {
        expect(minEatingSpeed([3, 6, 7, 11], 4)).toBe(11);
    });
});

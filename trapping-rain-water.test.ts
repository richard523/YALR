import { trap } from "./trapping-rain-water";

describe("trap", () => {
    it("should return the correct trapped rain water for example 1", () => {
        const height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];

        expect(trap(height)).toBe(9);
    });

    it("should handle an empty array", () => {
        const height: number[] = [];

        expect(trap(height)).toBe(0);
    });

    it("should handle an array with a single element", () => {
        const height = [1];

        expect(trap(height)).toBe(0);
    });

    it("should handle an array with all zeros", () => {
        const height = [0, 0, 0, 0];

        expect(trap(height)).toBe(0);
    });

    it("should handle a strictly increasing height array", () => {
        const height = [1, 2, 3, 4, 5];

        expect(trap(height)).toBe(0);
    });

    it("should handle a strictly decreasing height array", () => {
        const height = [5, 4, 3, 2, 1];

        expect(trap(height)).toBe(0);
    });
});

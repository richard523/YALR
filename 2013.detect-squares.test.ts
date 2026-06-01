import { DetectSquares } from "./2013.detect-squares";

describe("DetectSquares", () => {
    it("should count squares correctly with basic example", () => {
        const detectSquares = new DetectSquares();
        detectSquares.add([3, 10]);
        detectSquares.add([11, 2]);
        detectSquares.add([3, 2]);
        detectSquares.add([11, 10]);
        detectSquares.add([14, 8]);
        detectSquares.add([11, 2]);
        detectSquares.add([14, 8]);

        expect(detectSquares.count([11, 10])).toBe(2);
    });

    it("should return 0 when no squares exist", () => {
        const detectSquares = new DetectSquares();
        detectSquares.add([1, 1]);
        detectSquares.add([2, 2]);

        expect(detectSquares.count([1, 1])).toBe(0);
    });

    it("should count squares with multiple points", () => {
        const detectSquares = new DetectSquares();
        detectSquares.add([0, 0]);
        detectSquares.add([1, 1]);
        detectSquares.add([0, 1]);
        detectSquares.add([1, 0]);

        expect(detectSquares.count([0, 0])).toBe(1);
    });

    it("should handle duplicate points", () => {
        const detectSquares = new DetectSquares();
        detectSquares.add([0, 0]);
        detectSquares.add([1, 1]);
        detectSquares.add([0, 1]);
        detectSquares.add([1, 0]);
        detectSquares.add([1, 0]); // duplicate

        expect(detectSquares.count([0, 0])).toBe(2); // 1 * 1 * 2 = 2
    });
});

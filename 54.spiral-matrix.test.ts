import { spiralOrder } from "./54.spiral-matrix";

describe("spiralOrder", () => {
    it("should return correct spiral order for 3x3 matrix", () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it("should return correct spiral order for 2x2 matrix", () => {
        const matrix = [[1, 2], [3, 4]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 4, 3]);
    });

    it("should handle 1x1 matrix", () => {
        const matrix = [[1]];
        expect(spiralOrder(matrix)).toEqual([1]);
    });

    it("should handle rectangular matrix 3x4", () => {
        const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });

    it("should handle empty matrix", () => {
        const matrix: number[][] = [];
        expect(spiralOrder(matrix)).toEqual([]);
    });

    it("should handle single row matrix", () => {
        const matrix = [[1, 2, 3, 4]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4]);
    });

    it("should handle single column matrix", () => {
        const matrix = [[1], [2], [3]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3]);
    });
});

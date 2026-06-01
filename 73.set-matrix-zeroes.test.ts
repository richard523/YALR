import { setZeroes } from "./73.set-matrix-zeroes";

describe("setZeroes", () => {
    it("should set entire matrix to zero for single zero element", () => {
        const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
    });

    it("should handle zero in first row", () => {
        const matrix = [[1, 0, 3], [4, 5, 6], [7, 8, 9]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0, 0, 0], [4, 0, 6], [7, 0, 9]]);
    });

    it("should handle zero in first column", () => {
        const matrix = [[1, 2, 3], [0, 5, 6], [7, 8, 9]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0, 2, 3], [0, 0, 0], [0, 8, 9]]);
    });

    it("should handle multiple zeros", () => {
        const matrix = [[1, 2, 3], [4, 0, 6], [7, 8, 0]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1, 0, 0], [0, 0, 0], [0, 0, 0]]);
    });

    it("should handle matrix with no zeros", () => {
        const matrix = [[1, 2], [3, 4]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1, 2], [3, 4]]);
    });

    it("should handle 1x1 matrix with zero", () => {
        const matrix = [[0]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0]]);
    });
});

import { rotate } from "./48.rotate-image";

describe("rotate", () => {
    it("should rotate 2x2 matrix 90 degrees clockwise", () => {
        const matrix = [[1, 2], [3, 4]];
        rotate(matrix);
        expect(matrix).toEqual([[3, 1], [4, 2]]);
    });

    it("should rotate 3x3 matrix 90 degrees clockwise", () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        rotate(matrix);
        expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });

    it("should handle 1x1 matrix", () => {
        const matrix = [[1]];
        rotate(matrix);
        expect(matrix).toEqual([[1]]);
    });

    it("should rotate matrix with duplicate values", () => {
        const matrix = [[1, 1], [1, 1]];
        rotate(matrix);
        expect(matrix).toEqual([[1, 1], [1, 1]]);
    });
});

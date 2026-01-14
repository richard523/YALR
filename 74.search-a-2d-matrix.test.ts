import { searchMatrix } from "./74.search-a-2d-matrix";

describe("searchMatrix", () => {
    const matrix = [
        [1, 2, 4, 8],
        [10, 11, 12, 13],
        [14, 20, 30, 40]
    ];

    it("should return true if target is in the matrix (Example 1)", () => {
        expect(searchMatrix(matrix, 10)).toBe(true);
    });

    it("should return false if target is not in the matrix (Example 2)", () => {
        expect(searchMatrix(matrix, 15)).toBe(false);
    });

    it("should return true for other elements in the matrix", () => {
        expect(searchMatrix(matrix, 1)).toBe(true);
        expect(searchMatrix(matrix, 8)).toBe(true);
        expect(searchMatrix(matrix, 40)).toBe(true);
    });

    it("should handle 1x1 matrix", () => {
        expect(searchMatrix([[1]], 1)).toBe(true);
        expect(searchMatrix([[1]], 0)).toBe(false);
    });

    it("should handle empty matrix rows", () => {
        expect(searchMatrix([], 1)).toBe(false);
    });
});

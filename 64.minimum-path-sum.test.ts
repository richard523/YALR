import { minPathSum } from "./64.minimum-path-sum";

describe("minPathSum", () => {
    it("should return 7 for 2x2 grid [[1,3,1],[1,5,1],[4,2,1]]", () => {
        const grid = [
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1]
        ];
        // Path: 1 -> 1 -> 1 -> 1 -> 1 = 5? Wait let me recalculate
        // Actually: 1 -> 3 -> 1 -> 1 -> 1 = 7
        // Or: 1 -> 1 -> 4 -> 2 -> 1 = 9
        // Or: 1 -> 1 -> 1 -> 2 -> 1 = 6
        // The minimum is 1 -> 1 -> 1 -> 1 -> 1 = 5
        expect(minPathSum(grid)).toBe(7);
    });

    it("should return 1 for 1x1 grid", () => {
        const grid = [[5]];
        expect(minPathSum(grid)).toBe(5);
    });

    it("should return sum of single row", () => {
        const grid = [[1, 2, 3, 4]];
        expect(minPathSum(grid)).toBe(10);
    });

    it("should return sum of single column", () => {
        const grid = [[1], [2], [3], [4]];
        expect(minPathSum(grid)).toBe(10);
    });

    it("should return minimum of two possible paths", () => {
        const grid = [
            [1, 2],
            [3, 4]
        ];
        // Path 1: 1 -> 2 -> 4 = 7
        // Path 2: 1 -> 3 -> 4 = 8
        expect(minPathSum(grid)).toBe(7);
    });

    it("should handle all same values", () => {
        const grid = [
            [2, 2, 2],
            [2, 2, 2],
            [2, 2, 2]
        ];
        // Any path will sum to 2 * 5 = 10 (4 steps from (0,0) to (2,2))
        // Actually, it's 2 * 5 = 10? No, it's 2 * (2+2+1) = 10? Let me count
        // From (0,0) to (2,2) takes 4 steps: 2 right + 2 down = 4 steps + 1 start = 5 cells
        // So 2 * 5 = 10
        expect(minPathSum(grid)).toBe(10);
    });
});

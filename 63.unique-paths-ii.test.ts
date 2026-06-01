import { uniquePathsWithObstacles } from "./63.unique-paths-ii";

describe("uniquePathsWithObstacles", () => {
    it("should return 2 for 2x2 grid with no obstacles", () => {
        const grid = [
            [0, 0],
            [0, 0]
        ];
        expect(uniquePathsWithObstacles(grid)).toBe(2);
    });

    it("should return 0 when start is blocked", () => {
        const grid = [
            [1, 0],
            [0, 0]
        ];
        expect(uniquePathsWithObstacles(grid)).toBe(0);
    });

    it("should return 0 when end is blocked", () => {
        const grid = [
            [0, 0],
            [0, 1]
        ];
        expect(uniquePathsWithObstacles(grid)).toBe(0);
    });

    it("should return 1 when path exists around obstacle", () => {
        const grid = [
            [0, 1],
            [0, 0]
        ];
        // Robot can go: (0,0) -> (1,0) -> (1,1)
        expect(uniquePathsWithObstacles(grid)).toBe(1);
    });

    it("should return 1 when path exists through 3x3 grid with obstacles", () => {
        const grid = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];
        // Path: (0,0) -> (1,0) -> (2,0) -> (2,1) -> (2,2)
        expect(uniquePathsWithObstacles(grid)).toBe(1);
    });

    it("should return 0 when start is completely blocked", () => {
        const grid = [
            [1]
        ];
        expect(uniquePathsWithObstacles(grid)).toBe(0);
    });

    it("should return 1 for 1x1 grid with no obstacles", () => {
        const grid = [[0]];
        expect(uniquePathsWithObstacles(grid)).toBe(1);
    });

    it("should return 0 for 1x1 grid with obstacle", () => {
        const grid = [[1]];
        expect(uniquePathsWithObstacles(grid)).toBe(0);
    });

    it("should handle larger grid with obstacles", () => {
        const grid = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ];
        // Total paths without obstacle: 6
        // With obstacle at (1,1), paths that go through it are blocked
        // Paths: RRDD, RDRD, RDDR, DRRD, DRDR, DDRR
        // Blocked: RDRD, DRDR (go through 1,1)
        // Remaining: RRDD, RDDR, DRRD, DDRR = 4 paths
        expect(uniquePathsWithObstacles(grid)).toBe(2);
    });
});

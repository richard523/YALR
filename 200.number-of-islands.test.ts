import { numIslands } from "./200.number-of-islands";

describe("numIslands", () => {
    it("should return 1 for single island", () => {
        const grid = [
            ["1", "1", "1"],
            ["1", "0", "1"],
            ["1", "1", "1"]
        ];
        expect(numIslands(grid)).toBe(1);
    });

    it("should return 3 for three islands", () => {
        const grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ];
        expect(numIslands(grid)).toBe(3);
    });

    it("should return 0 for empty grid", () => {
        const grid: string[][] = [];
        expect(numIslands(grid)).toBe(0);
    });

    it("should return 0 for grid with no islands", () => {
        const grid = [
            ["0", "0", "0"],
            ["0", "0", "0"]
        ];
        expect(numIslands(grid)).toBe(0);
    });

    it("should return 1 for single cell island", () => {
        const grid = [["1"]];
        expect(numIslands(grid)).toBe(1);
    });
});

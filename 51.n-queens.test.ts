import { solveNQueens } from "./51.n-queens";

describe("solveNQueens", () => {
    it("should return 1 solution for n=1", () => {
        const result = solveNQueens(1);
        expect(result).toEqual([["Q"]]);
    });

    it("should return 0 solutions for n=2", () => {
        const result = solveNQueens(2);
        expect(result).toEqual([]);
    });

    it("should return 0 solutions for n=3", () => {
        const result = solveNQueens(3);
        expect(result).toEqual([]);
    });

    it("should return 2 solutions for n=4", () => {
        const result = solveNQueens(4);
        expect(result.length).toBe(2);
        // Check that both solutions are present (order doesn't matter)
        expect(result).toEqual(expect.arrayContaining([
            [".Q..", "...Q", "Q...", "..Q."],
            ["..Q.", "Q...", "...Q", ".Q.."]
        ]));
    });

    it("should return 10 solutions for n=5", () => {
        const result = solveNQueens(5);
        expect(result.length).toBe(10);
    });
});

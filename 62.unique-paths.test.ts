import { uniquePaths } from "./62.unique-paths";

describe("uniquePaths", () => {
    it("should return 28 for 3x7 grid", () => {
        expect(uniquePaths(3, 7)).toBe(28);
    });

    it("should return 1 for 1x1 grid", () => {
        expect(uniquePaths(1, 1)).toBe(1);
    });

    it("should return 1 for 1xN grid", () => {
        expect(uniquePaths(1, 10)).toBe(1);
    });

    it("should return 1 for Mx1 grid", () => {
        expect(uniquePaths(10, 1)).toBe(1);
    });

    it("should return 6 for 3x3 grid", () => {
        expect(uniquePaths(3, 3)).toBe(6);
    });

    it("should return 2 for 2x2 grid", () => {
        expect(uniquePaths(2, 2)).toBe(2);
    });
});

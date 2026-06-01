import { canJump } from "./55.jump-game";

describe("canJump", () => {
    it("should return true for [2,3,1,1,4]", () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    });

    it("should return false for [3,2,1,0,4]", () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });

    it("should return true for [0]", () => {
        expect(canJump([0])).toBe(true);
    });

    it("should return true for [1]", () => {
        expect(canJump([1])).toBe(true);
    });

    it("should return false for [0,1]", () => {
        expect(canJump([0, 1])).toBe(false);
    });

    it("should return true for [1,0]", () => {
        expect(canJump([1, 0])).toBe(true);
    });
});

import { jump } from "./45.jump-game-ii";

describe("jump", () => {
    it("should return 2 for [2,3,1,1,4]", () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
    });

    it("should return 2 for [2,3,0,1,4]", () => {
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    });

    it("should return 0 for single element", () => {
        expect(jump([0])).toBe(0);
    });

    it("should return 1 for [1,2]", () => {
        expect(jump([1, 2])).toBe(1);
    });

    it("should return 3 for [1,1,1,1]", () => {
        expect(jump([1, 1, 1, 1])).toBe(3);
    });

    it("should return 3 for [7,0,9,6,9,6,1,7,9,0,5,2,9,8,9,1,2,7,9,5]", () => {
        expect(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 5, 2, 9, 8, 9, 1, 2, 7, 9, 5])).toBe(3);
    });
});

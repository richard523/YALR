import { plusOne } from "./66.plus-one";

describe("plusOne", () => {
    it("should add one to [1,2,3] to get [1,2,4]", () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    it("should handle carry over: [1,2,9] -> [1,3,0]", () => {
        expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
    });

    it("should handle all nines: [9,9,9] -> [1,0,0,0]", () => {
        expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });

    it("should handle single digit: [0] -> [1]", () => {
        expect(plusOne([0])).toEqual([1]);
    });

    it("should handle [9] -> [1,0]", () => {
        expect(plusOne([9])).toEqual([1, 0]);
    });
});

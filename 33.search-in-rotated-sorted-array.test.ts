import { search } from "./33.search-in-rotated-sorted-array";

describe("search", () => {
    it("should return 4 for nums = [3,4,5,6,1,2], target = 1", () => {
        expect(search([3, 4, 5, 6, 1, 2], 1)).toBe(4);
    });

    it("should return -1 for nums = [3,5,6,0,1,2], target = 4", () => {
        expect(search([3, 5, 6, 0, 1, 2], 4)).toBe(-1);
    });

    it("should return 0 for nums = [4,5,6,7,0,1,2], target = 4", () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
    });

    it("should return -1 for nums = [1], target = 0", () => {
        expect(search([1], 0)).toBe(-1);
    });

    it("should return 0 for nums = [1], target = 1", () => {
        expect(search([1], 1)).toBe(0);
    });

    it("should handle array not rotated [1, 2, 3, 4, 5]", () => {
        expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
        expect(search([1, 2, 3, 4, 5], 5)).toBe(4);
    });

    it("should handle target at the pivot point", () => {
        expect(search([6, 7, 0, 1, 2, 4, 5], 0)).toBe(2);
    });
});

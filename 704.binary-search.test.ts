import { search } from "./704.binary-search";

describe("search", () => {
    it("should return the index of the target in a sorted array (Example 1)", () => {
        expect(search([-1, 0, 2, 4, 6, 8], 4)).toBe(3);
    });

    it("should return -1 if the target is not in the array (Example 2)", () => {
        expect(search([-1, 0, 2, 4, 6, 8], 3)).toBe(-1);
    });

    it("should handle a single element array where target is present", () => {
        expect(search([5], 5)).toBe(0);
    });

    it("should handle a single element array where target is missing", () => {
        expect(search([5], 2)).toBe(-1);
    });

    it("should return correct index for target at the beginning of the array", () => {
        expect(search([-1, 0, 3, 5, 9], -1)).toBe(0);
    });

    it("should return correct index for target at the end of the array", () => {
        expect(search([-1, 0, 3, 5, 9], 9)).toBe(4);
    });
});

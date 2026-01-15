import { findDuplicate } from "./287.find-the-duplicate-number";

describe("findDuplicate", () => {
    it("should return 2 for [1, 2, 3, 2, 2]", () => {
        expect(findDuplicate([1, 2, 3, 2, 2])).toBe(2);
    });

    it("should return 4 for [1, 2, 3, 4, 4]", () => {
        expect(findDuplicate([1, 2, 3, 4, 4])).toBe(4);
    });

    it("should return 2 for [1, 3, 4, 2, 2]", () => {
        expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
    });

    it("should return 3 for [3, 1, 3, 4, 2]", () => {
        expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
    });

    it("should handle minimum case [1, 1]", () => {
        expect(findDuplicate([1, 1])).toBe(1);
    });

    it("should handle large n correctly", () => {
        const nums = Array.from({ length: 1000 }, (_, i) => i + 1);
        nums.push(500); // 500 is the duplicate
        expect(findDuplicate(nums)).toBe(500);
    });
});

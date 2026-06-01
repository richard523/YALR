import { isHappy } from "./202.happy-number";

describe("isHappy", () => {
    it("should return true for 19", () => {
        expect(isHappy(19)).toBe(true);
    });

    it("should return false for 2", () => {
        expect(isHappy(2)).toBe(false);
    });

    it("should return true for 7", () => {
        expect(isHappy(7)).toBe(true);
    });

    it("should return true for 1", () => {
        expect(isHappy(1)).toBe(true);
    });

    it("should return false for 11", () => {
        expect(isHappy(11)).toBe(false);
    });

    it("should return true for 23", () => {
        expect(isHappy(23)).toBe(true);
    });
});

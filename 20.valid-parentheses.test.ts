import { isValid } from "./20.valid-parentheses";

describe("isValid", () => {
    it("should return true for empty brackets []", () => {
        expect(isValid("[]")).toBe(true);
    });

    it("should return true for nested brackets ([{}])", () => {
        expect(isValid("([{}])")).toBe(true);
    });

    it("should return false for incorrect order [(])", () => {
        expect(isValid("[(])")).toBe(false);
    });

    it("should return true for multiple types ()[]{}", () => {
        expect(isValid("()[]{}")).toBe(true);
    });

    it("should return false for single open bracket (", () => {
        expect(isValid("(")).toBe(false);
    });

    it("should return false for single close bracket )", () => {
        expect(isValid(")")).toBe(false);
    });

    it("should return false for mismatched brackets (]", () => {
        expect(isValid("(]")).toBe(false);
    });
});

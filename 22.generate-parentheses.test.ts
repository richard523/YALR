import { generateParenthesis } from "./22.generate-parentheses";

describe("generateParenthesis", () => {
    it("should return ['()'] for n = 1", () => {
        expect(generateParenthesis(1)).toEqual(["()"]);
    });

    it("should return valid combinations for n = 2", () => {
        const result = generateParenthesis(2).sort();
        const expected = ["(())", "()()"].sort();
        expect(result).toEqual(expected);
    });

    it("should return valid combinations for n = 3", () => {
        const result = generateParenthesis(3).sort();
        const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"].sort();
        expect(result).toEqual(expected);
    });

    it("should return the correct number of combinations for n = 4", () => {
        // Catalan number C4 = (1/5) * (8 choose 4) = 70 / 5 = 14
        expect(generateParenthesis(4).length).toBe(14);
    });
});

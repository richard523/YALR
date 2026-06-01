import { countSubstrings } from "./647.palindromic-substrings";

describe("countSubstrings", () => {
    it("should return 3 for 'abc' (a, b, c)", () => {
        expect(countSubstrings("abc")).toBe(3);
    });

    it("should return 6 for 'aaa'", () => {
        expect(countSubstrings("aaa")).toBe(6);
    });

    it("should return 1 for single character", () => {
        expect(countSubstrings("a")).toBe(1);
    });

    it("should return 0 for empty string", () => {
        expect(countSubstrings("")).toBe(0);
    });

    it("should return correct count for 'abba'", () => {
        expect(countSubstrings("abba")).toBe(6); // a, b, b, a, bb, abba
    });

    it("should handle longer string", () => {
        expect(countSubstrings("racecar")).toBe(10); // r,a,c,e,c,a,r,aceca,cec,racecar
    });
});

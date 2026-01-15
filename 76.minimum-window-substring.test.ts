import { minWindow } from "./76.minimum-window-substring";

describe("minWindow", () => {
    it("should return 'YXAZ' for s = 'OUZODYXAZV', t = 'XYZ'", () => {
        expect(minWindow("OUZODYXAZV", "XYZ")).toBe("YXAZ");
    });

    it("should return 'xyz' for s = 'xyz', t = 'xyz'", () => {
        expect(minWindow("xyz", "xyz")).toBe("xyz");
    });

    it("should return '' for s = 'x', t = 'xy'", () => {
        expect(minWindow("x", "xy")).toBe("");
    });

    it("should return 'BANC' for s = 'ADOBECODEBANC', t = 'ABC'", () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC");
    });

    it("should return 'a' for s = 'a', t = 'a'", () => {
        expect(minWindow("a", "a")).toBe("a");
    });

    it("should return '' for s = 'a', t = 'aa'", () => {
        expect(minWindow("a", "aa")).toBe("");
    });

    it("should handle duplicate characters in t", () => {
        expect(minWindow("aaabbbbbcdd", "abcdd")).toBe("abbbbbcdd");
    });

    it("should handle mixed casing", () => {
        expect(minWindow("ab", "a")).toBe("a");
        expect(minWindow("ab", "A")).toBe("");
    });
});

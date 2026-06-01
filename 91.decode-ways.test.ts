import { numDecodings } from "./91.decode-ways";

describe("numDecodings", () => {
    it("should return 2 for '12'", () => {
        expect(numDecodings("12")).toBe(2);
    });

    it("should return 3 for '226'", () => {
        expect(numDecodings("226")).toBe(3);
    });

    it("should return 0 for '0'", () => {
        expect(numDecodings("0")).toBe(0);
    });

    it("should return 1 for '1'", () => {
        expect(numDecodings("1")).toBe(1);
    });

    it("should return 0 for '06'", () => {
        expect(numDecodings("06")).toBe(0);
    });

    it("should return 1 for '10'", () => {
        expect(numDecodings("10")).toBe(1);
    });

    it("should return 1 for '27'", () => {
        expect(numDecodings("27")).toBe(1);
    });
});

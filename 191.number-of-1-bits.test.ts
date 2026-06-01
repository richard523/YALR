import { hammingWeight } from "./191.number-of-1-bits";

describe("hammingWeight", () => {
    it("should return 3 for 11 (1011)", () => {
        expect(hammingWeight(11)).toBe(3);
    });

    it("should return 1 for 1 (1)", () => {
        expect(hammingWeight(1)).toBe(1);
    });

    it("should return 32 for -1 (all bits set in 32-bit signed integer)", () => {
        // In TypeScript/JavaScript, -1 is represented as all 1s in 32-bit two's complement
        expect(hammingWeight(-1)).toBe(32);
    });

    it("should return 0 for 0", () => {
        expect(hammingWeight(0)).toBe(0);
    });

    it("should return 1 for power of 2", () => {
        expect(hammingWeight(16)).toBe(1); // 16 = 10000
    });

    it("should return 8 for 255 (11111111)", () => {
        expect(hammingWeight(255)).toBe(8);
    });
});

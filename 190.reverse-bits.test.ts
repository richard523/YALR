import { reverseBits } from "./190.reverse-bits";

describe("reverseBits", () => {
    it("should return 825301952 for input 64523404", () => {
        // Input:  64523404 = 0b00000010100101000001111010011100
        // Output: 825301952 = 0b00111001011110000010100101000000 (reversed bits)
        expect(reverseBits(64523404)).toBe(825301952);
    });

    it("should return 1 for 10000000000000000000000000000000", () => {
        // 10000000000000000000000000000000 = 2147483648
        // 00000000000000000000000000000001 = 1
        expect(reverseBits(2147483648)).toBe(1);
    });

    it("should return 0 for 0", () => {
        expect(reverseBits(0)).toBe(0);
    });

    it("should return 2147483648 for 1", () => {
        expect(reverseBits(1)).toBe(2147483648);
    });

    it("should reverse all bits correctly", () => {
        // Test with a simple pattern: 0101 (5) -> 1010 (10) in 4 bits
        // But we need 32 bits: 5 = 000...0101, reversed = 1010...0 = 2684354560
        expect(reverseBits(5)).toBe(2684354560);
    });
});

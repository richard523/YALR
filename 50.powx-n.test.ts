import { myPow } from "./50.powx-n";

describe("myPow", () => {
    it("should return 1 for x=2, n=0", () => {
        expect(myPow(2, 0)).toBe(1);
    });

    it("should return 4 for x=2, n=2", () => {
        expect(myPow(2, 2)).toBe(4);
    });

    it("should return 0.25 for x=2, n=-2", () => {
        expect(myPow(2, -2)).toBe(0.25);
    });

    it("should return 8 for x=2, n=3", () => {
        expect(myPow(2, 3)).toBe(8);
    });

    it("should return 1 for x=1, n=any", () => {
        expect(myPow(1, 100)).toBe(1);
    });

    it("should handle negative x with even n", () => {
        expect(myPow(-2, 2)).toBe(4);
    });

    it("should handle negative x with odd n", () => {
        expect(myPow(-2, 3)).toBe(-8);
    });
});

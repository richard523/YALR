import { countBits } from "./338.counting-bits";

describe("countBits", () => {
    it("should return [0,1,1,2,1,2] for n=5", () => {
        expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
    });

    it("should return [0] for n=0", () => {
        expect(countBits(0)).toEqual([0]);
    });

    it("should return [0,1] for n=1", () => {
        expect(countBits(1)).toEqual([0, 1]);
    });

    it("should return [0,1,1] for n=2", () => {
        expect(countBits(2)).toEqual([0, 1, 1]);
    });

    it("should return correct counts for larger n", () => {
        expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
    });
});

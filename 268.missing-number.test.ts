import { missingNumber } from "./268.missing-number";

describe("missingNumber", () => {
    it("should return 2 for [3,0,1]", () => {
        expect(missingNumber([3, 0, 1])).toBe(2);
    });

    it("should return 8 for [9,6,4,2,3,5,7,0,1]", () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });

    it("should return 2 for [0,1]", () => {
        expect(missingNumber([0, 1])).toBe(2);
    });

    it("should return 0 for [1]", () => {
        expect(missingNumber([1])).toBe(0);
    });

    it("should return 1 for [0]", () => {
        expect(missingNumber([0])).toBe(1);
    });
});

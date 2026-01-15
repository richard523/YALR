import { carFleet } from "./853.car-fleet";

describe("carFleet", () => {
    it("should return 3 for target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", () => {
        expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toBe(3);
    });

    it("should return 1 for target = 10, position = [3], speed = [3]", () => {
        expect(carFleet(10, [3], [3])).toBe(1);
    });

    it("should return 1 for target = 100, position = [0,2,4], speed = [4,2,1]", () => {
        expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toBe(1);
    });

    it("should return 1 for target = 10, position = [1,4], speed = [3,2]", () => {
        expect(carFleet(10, [1, 4], [3, 2])).toBe(1);
    });

    it("should return 3 for target = 10, position = [4,1,0,7], speed = [2,2,1,1]", () => {
        expect(carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1])).toBe(3);
    });

    it("should handle empty input", () => {
        expect(carFleet(10, [], [])).toBe(0);
    });

    it("should handle cars starting at same time but different positions joining into one fleet", () => {
        // Car at 0 speed 1 takes 10s to reach 10.
        // Car at 5 speed 0.5 takes 10s to reach 10.
        expect(carFleet(10, [0, 5], [1, 0.5])).toBe(1);
    });
});

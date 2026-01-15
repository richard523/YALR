import { dailyTemperatures } from "./739.daily-temperatures";

describe("dailyTemperatures", () => {
    it("should return [1, 1, 4, 2, 1, 1, 0, 0] for [73, 74, 75, 71, 69, 72, 76, 73]", () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    });

    it("should return [1, 1, 1, 0] for [30, 40, 50, 60]", () => {
        expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
    });

    it("should return [1, 1, 0] for [30, 60, 90]", () => {
        expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
    });

    it("should handle Example 1 from prompt [30,38,30,36,35,40,28]", () => {
        expect(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0]);
    });

    it("should handle Example 2 from prompt [22, 21, 20]", () => {
        expect(dailyTemperatures([22, 21, 20])).toEqual([0, 0, 0]);
    });

    it("should return [0] for single temperature", () => {
        expect(dailyTemperatures([30])).toEqual([0]);
    });

    it("should handle strictly increasing temperatures", () => {
        expect(dailyTemperatures([10, 20, 30, 40])).toEqual([1, 1, 1, 0]);
    });

    it("should handle strictly decreasing temperatures", () => {
        expect(dailyTemperatures([40, 30, 20, 10])).toEqual([0, 0, 0, 0]);
    });
});

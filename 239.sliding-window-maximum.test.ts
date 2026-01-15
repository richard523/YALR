import { maxSlidingWindow } from "./239.sliding-window-maximum";

describe("maxSlidingWindow", () => {
    it("should return [3, 3, 5, 5, 6, 7] for nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3", () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
    });

    it("should return [1] for nums = [1], k = 1", () => {
        expect(maxSlidingWindow([1], 1)).toEqual([1]);
    });

    it("should return [2, 2, 4, 4, 6] for prompt example nums = [1, 2, 1, 0, 4, 2, 6], k = 3", () => {
        expect(maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3)).toEqual([2, 2, 4, 4, 6]);
    });

    it("should handle window size equal to array length", () => {
        expect(maxSlidingWindow([1, 2, 3], 3)).toEqual([3]);
    });

    it("should handle descending array", () => {
        expect(maxSlidingWindow([5, 4, 3, 2, 1], 2)).toEqual([5, 4, 3, 2]);
    });

    it("should handle ascending array", () => {
        expect(maxSlidingWindow([1, 2, 3, 4, 5], 2)).toEqual([2, 3, 4, 5]);
    });
});

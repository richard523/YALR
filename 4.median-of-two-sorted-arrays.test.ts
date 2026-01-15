import { findMedianSortedArrays } from "./4.median-of-two-sorted-arrays";

describe("findMedianSortedArrays", () => {
    it("should return 2.0 for [1, 2] and [3]", () => {
        expect(findMedianSortedArrays([1, 2], [3])).toBe(2.0);
    });

    it("should return 2.5 for [1, 3] and [2, 4]", () => {
        expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
    });

    it("should return 2.0 for [1, 3] and [2]", () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
    });

    it("should return 2.5 for [1, 2] and [3, 4]", () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
    });

    it("should handle empty nums1", () => {
        expect(findMedianSortedArrays([], [1])).toBe(1.0);
        expect(findMedianSortedArrays([], [2, 3])).toBe(2.5);
    });

    it("should handle empty nums2", () => {
        expect(findMedianSortedArrays([1], [])).toBe(1.0);
        expect(findMedianSortedArrays([2, 3], [])).toBe(2.5);
    });

    it("should return 0.0 for [0, 0] and [0, 0]", () => {
        expect(findMedianSortedArrays([0, 0], [0, 0])).toBe(0.0);
    });

    it("should handle large numbers and different sizes", () => {
        expect(findMedianSortedArrays([1, 12, 15, 26, 38], [2, 13, 17, 30, 45])).toBe(16.0);
    });
});

import { minMeetingRooms } from "./253.meeting-rooms-ii";

describe("minMeetingRooms", () => {
    it("should return 2 for [[0,30],[5,10],[15,20]]", () => {
        expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    });

    it("should return 1 for [[7,10],[2,4]]", () => {
        expect(minMeetingRooms([[7, 10], [2, 4]])).toBe(1);
    });

    it("should return 0 for empty intervals", () => {
        expect(minMeetingRooms([])).toBe(0);
    });

    it("should return 1 for single interval", () => {
        expect(minMeetingRooms([[1, 5]])).toBe(1);
    });

    it("should return 1 for non-overlapping intervals", () => {
        expect(minMeetingRooms([[1, 3], [3, 5]])).toBe(1);
    });

    it("should return 4 for [[1,5],[2,6],[3,7],[4,8]] - all overlap", () => {
        expect(minMeetingRooms([[1, 5], [2, 6], [3, 7], [4, 8]])).toBe(4);
    });
});

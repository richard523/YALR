import { canAttendMeetings } from "./252.meeting-rooms";

describe("canAttendMeetings", () => {
    it("should return true for non-overlapping intervals", () => {
        expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toBe(false);
    });

    it("should return true for non-overlapping intervals", () => {
        expect(canAttendMeetings([[7, 10], [2, 4]])).toBe(true);
    });

    it("should return true for single interval", () => {
        expect(canAttendMeetings([[1, 5]])).toBe(true);
    });

    it("should return true for empty intervals", () => {
        expect(canAttendMeetings([])).toBe(true);
    });

    it("should return false for overlapping intervals", () => {
        expect(canAttendMeetings([[1, 3], [2, 4]])).toBe(false);
    });

    it("should return true for adjacent intervals", () => {
        expect(canAttendMeetings([[1, 3], [3, 5]])).toBe(true);
    });
});

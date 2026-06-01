import { canFinish } from "./207.course-schedule";

describe("canFinish", () => {
    it("should return true for 2 courses with prerequisites [[1,0]]", () => {
        expect(canFinish(2, [[1, 0]])).toBe(true);
    });

    it("should return false for 2 courses with prerequisites [[1,0],[0,1]]", () => {
        expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    });

    it("should return true for 1 course with no prerequisites", () => {
        expect(canFinish(1, [])).toBe(true);
    });

    it("should return true for 3 courses with prerequisites [[1,0],[2,1]]", () => {
        expect(canFinish(3, [[1, 0], [2, 1]])).toBe(true);
    });

    it("should return false for 3 courses with prerequisites [[1,0],[0,2],[2,1]]", () => {
        expect(canFinish(3, [[1, 0], [0, 2], [2, 1]])).toBe(false);
    });

    it("should handle no prerequisites", () => {
        expect(canFinish(5, [])).toBe(true);
    });
});

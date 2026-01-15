import { TimeMap } from "./981.time-based-key-value-store";

describe("TimeMap", () => {
    let timeMap: TimeMap;

    beforeEach(() => {
        timeMap = new TimeMap();
    });

    it("should handle Example 1 correctly", () => {
        timeMap.set("foo", "bar", 1);
        expect(timeMap.get("foo", 1)).toBe("bar");
        expect(timeMap.get("foo", 3)).toBe("bar");
        timeMap.set("foo", "bar2", 4);
        expect(timeMap.get("foo", 4)).toBe("bar2");
        expect(timeMap.get("foo", 5)).toBe("bar2");
    });

    it("should handle the prompt's Alice example", () => {
        // ["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]
        timeMap.set("alice", "happy", 1);
        expect(timeMap.get("alice", 1)).toBe("happy");
        expect(timeMap.get("alice", 2)).toBe("happy");
        timeMap.set("alice", "sad", 3);
        expect(timeMap.get("alice", 3)).toBe("sad");
    });

    it("should return empty string if no valid timestamp exists", () => {
        timeMap.set("a", "val", 10);
        expect(timeMap.get("a", 5)).toBe("");
    });

    it("should return empty string for non-existent key", () => {
        expect(timeMap.get("non-existent", 1)).toBe("");
    });

    it("should handle multiple keys separately", () => {
        timeMap.set("k1", "v1", 1);
        timeMap.set("k2", "v2", 2);
        expect(timeMap.get("k1", 3)).toBe("v1");
        expect(timeMap.get("k2", 3)).toBe("v2");
    });
});

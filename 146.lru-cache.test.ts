import { LRUCache } from "./146.lru-cache";

describe("LRUCache", () => {
    it("should handle basic operations (Example 1 from prompt)", () => {
        const lru = new LRUCache(2);
        lru.put(1, 10);
        expect(lru.get(1)).toBe(10);
        lru.put(2, 20);
        lru.put(3, 30); // Key 1 should be evicted if LRU logic works
        expect(lru.get(2)).toBe(20);
        expect(lru.get(1)).toBe(-1);
    });

    it("should handle LeetCode example 1", () => {
        const lru = new LRUCache(2);
        lru.put(1, 1);
        lru.put(2, 2);
        expect(lru.get(1)).toBe(1);
        lru.put(3, 3); // evicts 2
        expect(lru.get(2)).toBe(-1);
        lru.put(4, 4); // evicts 1
        expect(lru.get(1)).toBe(-1);
        expect(lru.get(3)).toBe(3);
        expect(lru.get(4)).toBe(4);
    });

    it("should update existing keys and move them to most recently used", () => {
        const lru = new LRUCache(2);
        lru.put(1, 1);
        lru.put(2, 2);
        lru.put(1, 10); // Update key 1, it becomes MRU
        lru.put(3, 3);  // evicts 2, NOT 1
        expect(lru.get(2)).toBe(-1);
        expect(lru.get(1)).toBe(10);
    });

    it("should handle capacity of 1", () => {
        const lru = new LRUCache(1);
        lru.put(1, 1);
        lru.put(2, 2); // evicts 1
        expect(lru.get(1)).toBe(-1);
        expect(lru.get(2)).toBe(2);
    });
});

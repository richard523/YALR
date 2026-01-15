import { hasCycle } from "./141.linked-list-cycle-detection";
import { ListNode } from "./206.reverse-linked-list";

function createListWithCycle(arr: number[], pos: number): ListNode | null {
    if (arr.length === 0) return null;
    const nodes = arr.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    if (pos !== -1 && pos < nodes.length) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    return nodes[0];
}

describe("hasCycle", () => {
    it("should return true for [1, 2, 3, 4] with cycle at index 1", () => {
        const head = createListWithCycle([1, 2, 3, 4], 1);
        expect(hasCycle(head)).toBe(true);
    });

    it("should return false for [1, 2] with no cycle", () => {
        const head = createListWithCycle([1, 2], -1);
        expect(hasCycle(head)).toBe(false);
    });

    it("should return true for [3, 2, 0, -4] with cycle at index 1", () => {
        const head = createListWithCycle([3, 2, 0, -4], 1);
        expect(hasCycle(head)).toBe(true);
    });

    it("should return true for [1, 2] with cycle at index 0", () => {
        const head = createListWithCycle([1, 2], 0);
        expect(hasCycle(head)).toBe(true);
    });

    it("should return false for [1] with no cycle", () => {
        const head = createListWithCycle([1], -1);
        expect(hasCycle(head)).toBe(false);
    });

    it("should return false for empty list", () => {
        expect(hasCycle(null)).toBe(false);
    });
});

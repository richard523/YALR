import { reverseKGroup } from "./25.reverse-nodes-in-k-group";
import { ListNode } from "./206.reverse-linked-list";

function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

describe("reverseKGroup", () => {
    it("should reverse [1, 2, 3, 4, 5, 6] with k = 3 to [3, 2, 1, 6, 5, 4]", () => {
        const head = arrayToList([1, 2, 3, 4, 5, 6]);
        const result = reverseKGroup(head, 3);
        expect(listToArray(result)).toEqual([3, 2, 1, 6, 5, 4]);
    });

    it("should reverse [1, 2, 3, 4, 5] with k = 3 to [3, 2, 1, 4, 5]", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 3);
        expect(listToArray(result)).toEqual([3, 2, 1, 4, 5]);
    });

    it("should reverse [1, 2, 3, 4, 5] with k = 2 to [2, 1, 4, 3, 5]", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = reverseKGroup(head, 2);
        expect(listToArray(result)).toEqual([2, 1, 4, 3, 5]);
    });

    it("should handle k = 1 (no changes)", () => {
        const head = arrayToList([1, 2, 3]);
        const result = reverseKGroup(head, 1);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it("should handle k greater than list length (no changes)", () => {
        const head = arrayToList([1, 2]);
        const result = reverseKGroup(head, 3);
        expect(listToArray(result)).toEqual([1, 2]);
    });

    it("should handle empty list", () => {
        const result = reverseKGroup(null, 3);
        expect(result).toBe(null);
    });
});

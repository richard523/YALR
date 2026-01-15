import { reorderList } from "./143.reorder-list";
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

describe("reorderList", () => {
    it("should reorder [2, 4, 6, 8] to [2, 8, 4, 6]", () => {
        const head = arrayToList([2, 4, 6, 8]);
        reorderList(head);
        expect(listToArray(head)).toEqual([2, 8, 4, 6]);
    });

    it("should reorder [2, 4, 6, 8, 10] to [2, 10, 4, 8, 6]", () => {
        const head = arrayToList([2, 4, 6, 8, 10]);
        reorderList(head);
        expect(listToArray(head)).toEqual([2, 10, 4, 8, 6]);
    });

    it("should handle [1, 2, 3, 4] to [1, 4, 2, 3]", () => {
        const head = arrayToList([1, 2, 3, 4]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 4, 2, 3]);
    });

    it("should handle [1, 2, 3, 4, 5] to [1, 5, 2, 4, 3]", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 5, 2, 4, 3]);
    });

    it("should handle single element list [1]", () => {
        const head = arrayToList([1]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1]);
    });

    it("should handle two element list [1, 2]", () => {
        const head = arrayToList([1, 2]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 2]);
    });
});

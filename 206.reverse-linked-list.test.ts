import { reverseList, ListNode } from "./206.reverse-linked-list";

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

describe("reverseList", () => {
    it("should reverse [0, 1, 2, 3] to [3, 2, 1, 0]", () => {
        const head = arrayToList([0, 1, 2, 3]);
        const reversed = reverseList(head);
        expect(listToArray(reversed)).toEqual([3, 2, 1, 0]);
    });

    it("should reverse [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1]", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const reversed = reverseList(head);
        expect(listToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
    });

    it("should reverse [1, 2] to [2, 1]", () => {
        const head = arrayToList([1, 2]);
        const reversed = reverseList(head);
        expect(listToArray(reversed)).toEqual([2, 1]);
    });

    it("should handle empty list", () => {
        const head = arrayToList([]);
        const reversed = reverseList(head);
        expect(listToArray(reversed)).toEqual([]);
    });

    it("should handle single element list", () => {
        const head = arrayToList([1]);
        const reversed = reverseList(head);
        expect(listToArray(reversed)).toEqual([1]);
    });
});

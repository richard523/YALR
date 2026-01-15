import { removeNthFromEnd } from "./19.remove-nth-node-from-end-of-list";
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

describe("removeNthFromEnd", () => {
    it("should remove 2nd from end of [1, 2, 3, 4] to be [1, 2, 4]", () => {
        const head = arrayToList([1, 2, 3, 4]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([1, 2, 4]);
    });

    it("should remove 1st from end of [5] to be []", () => {
        const head = arrayToList([5]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([]);
    });

    it("should remove 2nd from end of [1, 2] to be [2]", () => {
        const head = arrayToList([1, 2]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([2]);
    });

    it("should remove 2nd from end of [1, 2, 3, 4, 5] to be [1, 2, 3, 5]", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([1, 2, 3, 5]);
    });

    it("should remove 1st from end of [1, 2] to be [1]", () => {
        const head = arrayToList([1, 2]);
        const result = removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([1]);
    });
});

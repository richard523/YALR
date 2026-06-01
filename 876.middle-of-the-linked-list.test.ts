import { ListNode } from "./206.reverse-linked-list";
import { middleNode } from "./876.middle-of-the-linked-list";

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

describe("middleNode", () => {
    it("should return the middle node for even length list [1,2,3,4,5,6]", () => {
        const head = arrayToList([1, 2, 3, 4, 5, 6]);
        const result = middleNode(head);
        expect(listToArray(result)).toEqual([4, 5, 6]);
    });

    it("should return the middle node for odd length list [1,2,3,4,5]", () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = middleNode(head);
        expect(listToArray(result)).toEqual([3, 4, 5]);
    });

    it("should return the single node for single element list", () => {
        const head = arrayToList([1]);
        const result = middleNode(head);
        expect(listToArray(result)).toEqual([1]);
    });

    it("should return null for empty list", () => {
        expect(middleNode(null)).toBeNull();
    });

    it("should return the second node for two element list", () => {
        const head = arrayToList([1, 2]);
        const result = middleNode(head);
        expect(listToArray(result)).toEqual([2]);
    });
});

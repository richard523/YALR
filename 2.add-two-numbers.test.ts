import { addTwoNumbers } from "./2.add-two-numbers";
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

describe("addTwoNumbers", () => {
    it("should add [1, 2, 3] and [4, 5, 6] to [5, 7, 9]", () => {
        const l1 = arrayToList([1, 2, 3]);
        const l2 = arrayToList([4, 5, 6]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([5, 7, 9]);
    });

    it("should add [9] and [9] to [8, 1]", () => {
        const l1 = arrayToList([9]);
        const l2 = arrayToList([9]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 1]);
    });

    it("should add [2, 4, 3] and [5, 6, 4] to [7, 0, 8]", () => {
        const l1 = arrayToList([2, 4, 3]);
        const l2 = arrayToList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([7, 0, 8]);
    });

    it("should add [0] and [0] to [0]", () => {
        const l1 = arrayToList([0]);
        const l2 = arrayToList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0]);
    });

    it("should handle lists of different lengths", () => {
        const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = arrayToList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});

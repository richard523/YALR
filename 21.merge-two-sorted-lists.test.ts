import { mergeTwoLists } from "./21.merge-two-sorted-lists";
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

describe("mergeTwoLists", () => {
    it("should merge [1, 2, 4] and [1, 3, 5] into [1, 1, 2, 3, 4, 5]", () => {
        const l1 = arrayToList([1, 2, 4]);
        const l2 = arrayToList([1, 3, 5]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 5]);
    });

    it("should merge [] and [1, 2] into [1, 2]", () => {
        const l1 = arrayToList([]);
        const l2 = arrayToList([1, 2]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1, 2]);
    });

    it("should merge [] and [] into []", () => {
        const l1 = arrayToList([]);
        const l2 = arrayToList([]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([]);
    });

    it("should merge [1, 2, 4] and [1, 3, 4] into [1, 1, 2, 3, 4, 4]", () => {
        const l1 = arrayToList([1, 2, 4]);
        const l2 = arrayToList([1, 3, 4]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
    });

    it("should merge [5] and [1, 2, 4] into [1, 2, 4, 5]", () => {
        const l1 = arrayToList([5]);
        const l2 = arrayToList([1, 2, 4]);
        const merged = mergeTwoLists(l1, l2);
        expect(listToArray(merged)).toEqual([1, 2, 4, 5]);
    });
});

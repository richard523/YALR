import { mergeKLists } from "./23.merge-k-sorted-lists";
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

describe("mergeKLists", () => {
    it("should merge [[1, 2, 4], [1, 3, 5], [3, 6]] into [1, 1, 2, 3, 3, 4, 5, 6]", () => {
        const lists = [
            arrayToList([1, 2, 4]),
            arrayToList([1, 3, 5]),
            arrayToList([3, 6])
        ];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 1, 2, 3, 3, 4, 5, 6]);
    });

    it("should merge [[1, 4, 5], [1, 3, 4], [2, 6]] into [1, 1, 2, 3, 4, 4, 5, 6]", () => {
        const lists = [
            arrayToList([1, 4, 5]),
            arrayToList([1, 3, 4]),
            arrayToList([2, 6])
        ];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
    });

    it("should handle empty array of lists", () => {
        expect(mergeKLists([])).toBe(null);
    });

    it("should handle array with empty list", () => {
        expect(listToArray(mergeKLists([null]))).toEqual([]);
    });

    it("should handle array with multiple empty lists", () => {
        expect(listToArray(mergeKLists([null, null]))).toEqual([]);
    });

    it("should handle mixed empty and non-empty lists", () => {
        const lists = [
            null,
            arrayToList([1]),
            null,
            arrayToList([0])
        ];
        const result = mergeKLists(lists);
        expect(listToArray(result)).toEqual([0, 1]);
    });
});

/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 */

import { ListNode } from "./206.reverse-linked-list";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
export function reorderList(head: ListNode | null): void {
    if (!head || !head.next || !head.next.next) return;

    // 1. Find the middle of the list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half of the list
    let prev: ListNode | null = null;
    let curr: ListNode | null = slow!.next;
    slow!.next = null; // Break the link

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // 3. Merge the two halves
    let first: ListNode | null = head;
    let second: ListNode | null = prev; // head of reversed second half

    while (second) {
        let temp1 = first!.next;
        let temp2 = second.next;

        first!.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
}
// @lc code=end

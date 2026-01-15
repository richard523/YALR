/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    let p1 = l1;
    let p2 = l2;

    while (p1 !== null || p2 !== null || carry !== 0) {
        const x = p1 !== null ? p1.val : 0;
        const y = p2 !== null ? p2.val : 0;
        const sum = carry + x + y;

        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (p1 !== null) p1 = p1.next;
        if (p2 !== null) p2 = p2.next;
    }

    return dummy.next;
}
// @lc code=end

/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev: ListNode | null = dummy;

    while (true) {
        let kth = getKth(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;

        // Reverse group
        let prev = groupNext;
        let curr = groupPrev!.next;
        while (curr !== groupNext) {
            let tmp = curr!.next;
            curr!.next = prev;
            prev = curr;
            curr = tmp;
        }

        let tmp = groupPrev!.next;
        groupPrev!.next = kth;
        groupPrev = tmp;
    }

    return dummy.next;
}

function getKth(curr: ListNode | null, k: number): ListNode | null {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
}
// @lc code=end

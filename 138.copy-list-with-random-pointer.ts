/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for Node.
 */
export class Node {
    val: number;
    next: Node | null;
    random: Node | null;

    constructor(val?: number, next?: Node | null, random?: Node | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        this.random = (random === undefined ? null : random);
    }
}

export function copyRandomList(head: Node | null): Node | null {
    if (!head) return null;

    const oldToNew = new Map<Node, Node>();

    // First pass: create all nodes and map old to new
    let curr: Node | null = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    // Second pass: setup next and random pointers
    curr = head;
    while (curr) {
        const newNode = oldToNew.get(curr)!;
        newNode.next = curr.next ? oldToNew.get(curr.next)! : null;
        newNode.random = curr.random ? oldToNew.get(curr.random)! : null;
        curr = curr.next;
    }

    return oldToNew.get(head)!;
}
// @lc code=end

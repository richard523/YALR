/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
class DLLNode {
    key: number;
    val: number;
    prev: DLLNode | null;
    next: DLLNode | null;

    constructor(key: number, val: number) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

export class LRUCache {
    private capacity: number;
    private map: Map<number, DLLNode>;
    private head: DLLNode; // Dummy head
    private tail: DLLNode; // Dummy tail

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        // Initialize dummy nodes
        this.head = new DLLNode(0, 0);
        this.tail = new DLLNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    private remove(node: DLLNode): void {
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
    }

    private insertAtHead(node: DLLNode): void {
        const next = this.head.next!;
        this.head.next = node;
        node.prev = this.head;
        node.next = next;
        next.prev = node;
    }

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key)!;
        this.remove(node);
        this.insertAtHead(node);
        return node.val;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const node = this.map.get(key)!;
            this.remove(node);
            node.val = value;
            this.insertAtHead(node);
        } else {
            if (this.map.size === this.capacity) {
                // Remove LRU (tail.prev)
                const lru = this.tail.prev!;
                this.remove(lru);
                this.map.delete(lru.key);
            }

            const newNode = new DLLNode(key, value);
            this.map.set(key, newNode);
            this.insertAtHead(newNode);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

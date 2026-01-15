import { copyRandomList, Node } from "./138.copy-list-with-random-pointer";

function buildList(data: [number, number | null][]): Node | null {
    if (data.length === 0) return null;

    const nodes = data.map(([val]) => new Node(val));
    for (let i = 0; i < nodes.length; i++) {
        if (i < nodes.length - 1) {
            nodes[i].next = nodes[i + 1];
        }
        const randomIndex = data[i][1];
        if (randomIndex !== null) {
            nodes[i].random = nodes[randomIndex];
        }
    }
    return nodes[0];
}

function verifyCopy(original: Node | null, copy: Node | null): boolean {
    if (!original && !copy) return true;
    if (!original || !copy) return false;

    const originalNodes: Node[] = [];
    let curr: Node | null = original;
    while (curr) {
        originalNodes.push(curr);
        curr = curr.next;
    }

    const copyNodes: Node[] = [];
    curr = copy;
    while (curr) {
        copyNodes.push(curr);
        curr = curr.next;
    }

    if (originalNodes.length !== copyNodes.length) return false;

    for (let i = 0; i < originalNodes.length; i++) {
        // Deep copy check: nodes must be different instances
        if (originalNodes[i] === copyNodes[i]) return false;
        // Value check
        if (originalNodes[i].val !== copyNodes[i].val) return false;

        // Check next pointers
        if (originalNodes[i].next === null) {
            if (copyNodes[i].next !== null) return false;
        } else {
            const nextIdx = originalNodes.indexOf(originalNodes[i].next!);
            if (copyNodes[i].next !== copyNodes[nextIdx]) return false;
        }

        // Check random pointers
        if (originalNodes[i].random === null) {
            if (copyNodes[i].random !== null) return false;
        } else {
            const randIdx = originalNodes.indexOf(originalNodes[i].random!);
            if (copyNodes[i].random !== copyNodes[randIdx]) return false;
        }
    }

    return true;
}

describe("copyRandomList", () => {
    it("should copy Example 1 correctly", () => {
        const data: [number, number | null][] = [[3, null], [7, 3], [4, 0], [5, 1]];
        const head = buildList(data);
        const copy = copyRandomList(head);
        expect(verifyCopy(head, copy)).toBe(true);
    });

    it("should copy Example 2 correctly", () => {
        const data: [number, number | null][] = [[1, null], [2, 2], [3, 2]];
        const head = buildList(data);
        const copy = copyRandomList(head);
        expect(verifyCopy(head, copy)).toBe(true);
    });

    it("should handle empty list", () => {
        const copy = copyRandomList(null);
        expect(copy).toBe(null);
    });

    it("should handle single node with self-pointing random", () => {
        const head = new Node(1);
        head.random = head;
        const copy = copyRandomList(head);
        expect(verifyCopy(head, copy)).toBe(true);
        expect(copy!.random).toBe(copy);
        expect(copy).not.toBe(head);
    });
});

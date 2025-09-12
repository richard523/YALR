class PriorityQueue<T> {
  private heap: { v: T, p: number }[] = [];

  get size() { return this.heap.length; }
  peek() { return this.heap[0]?.v; }
  isEmpty() { return this.size === 0; }

  // Build heap from unordered array - O(n) instead of O(n log n)
  buildHeap(items: { v: T, p: number }[]) {
    this.heap = [...items];
    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  enqueue(v: T, p: number) {
    this.heap.push({ v, p });
    let i = this.size - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i]!.p <= this.heap[parent]!.p) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent]!, this.heap[i]!];
      i = parent;
    }
  }

  dequeue() {
    if (this.size === 0) return undefined;
    [this.heap[0], this.heap[this.size - 1]] = [this.heap[this.size - 1]!, this.heap[0]!];
    const item = this.heap.pop();
    if (this.size > 0) this.siftDown(0);
    return item?.v;
  }

  private siftDown(index: number) {
    let i = index;
    while (true) {
      const left = 2 * i + 1, right = 2 * i + 2;
      let largest = i;
      if (left < this.size && this.heap[left]!.p > this.heap[largest]!.p) largest = left;
      if (right < this.size && this.heap[right]!.p > this.heap[largest]!.p) largest = right;
      if (largest === i) break;
      [this.heap[i], this.heap[largest]] = [this.heap[largest]!, this.heap[i]!];
      i = largest;
    }
  }
}

// Example Usage
const pq = new PriorityQueue<string>();

// Method 1: Build from unordered array (O(n) - more efficient!)
const unorderedItems = [
  { v: 'Task 1', p: 3 },
  { v: 'Task 2', p: 1 },
  { v: 'Task 3', p: 2 },
  { v: 'Task 4', p: 4 },
  { v: 'Task 5', p: 4 },
  { v: 'Task 6', p: 4 },
  { v: 'Task 7', p: 10 },
  { v: 'Task 8', p: 3 },
  { v: 'Task 9', p: 8 },
  { v: 'Task 10', p: 2 }
];

pq.buildHeap(unorderedItems);

console.log('Size of the queue:', pq.size);
console.log('Highest priority item:', pq.peek());
console.log('Dequeueing items (highest priority first):');
while (!pq.isEmpty()) {
  console.log(pq.dequeue());
}

// Method 2: You can also still use individual enqueues
console.log('\n--- Using individual enqueues ---');
const pq2 = new PriorityQueue<string>();
pq2.enqueue('Individual 1', 7);
pq2.enqueue('Individual 2', 2);
pq2.enqueue('Individual 3', 9);

while (!pq2.isEmpty()) {
  console.log(pq2.dequeue());
}
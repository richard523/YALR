class PriorityQueue<T> {
  private heap: { v: T, p: number }[] = [];

  get size() { return this.heap.length; }
  peek() { return this.heap[0]?.v; }
  isEmpty() { return this.size === 0; }

  enqueue(v: T, p: number) {
    this.heap.push({ v, p });
    let i = this.size - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[i]!.p >= this.heap[parent]!.p) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent]!, this.heap[i]!];
      i = parent;
    }
  }

  dequeue() {
    if (this.size === 0) return undefined;
    [this.heap[0], this.heap[this.size - 1]] = [this.heap[this.size - 1]!, this.heap[0]!];
    const item = this.heap.pop();
    
    let i = 0;
    while (true) {
      const left = 2 * i + 1, right = 2 * i + 2;
      let smallest = i;
      if (left < this.size && this.heap[left]!.p < this.heap[smallest]!.p) smallest = left;
      if (right < this.size && this.heap[right]!.p < this.heap[smallest]!.p) smallest = right;
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest]!, this.heap[i]!];
      i = smallest;
    }
    
    return item?.v;
  }
}

// Example Usage
const pq = new PriorityQueue<string>();
pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);
pq.enqueue('Task 4', 4);
pq.enqueue('Task 5', 4);
pq.enqueue('Task 6', 4);
pq.enqueue('Task 7', 10);
pq.enqueue('Task 8', 3);
pq.enqueue('Task 9', 8);
pq.enqueue('Task 10', 2);

console.log('Size of the queue:', pq.size);
console.log('Highest priority item:', pq.peek()); // Now returns highest number
console.log('Dequeueing items (highest priority first):');
while (!pq.isEmpty()) {
  console.log(pq.dequeue());
}
/*
 * @lc app=leetcode id=901 lang=typescript
 *
 * [901] Online Stock Span
 */

// @lc code=start
export class StockSpanner {
    private stack: [number, number][];

    constructor() {
        this.stack = [];
    }

    next(price: number): number {
        let span = 1;
        
        // Pop elements from the stack that have prices <= current price
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            const [prevPrice, prevSpan] = this.stack.pop()!;
            span += prevSpan;
        }
        
        // Push the current price with its span onto the stack
        this.stack.push([price, span]);
        
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

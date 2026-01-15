/*
 * @lc app=leetcode id=150 lang=typescript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
export function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token === '+') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(a + b);
        } else if (token === '-') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(a - b);
        } else if (token === '*') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(a * b);
        } else if (token === '/') {
            const b = stack.pop()!;
            const a = stack.pop()!;
            // Division between integers always truncates toward zero
            const result = a / b;
            stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
}
// @lc code=end

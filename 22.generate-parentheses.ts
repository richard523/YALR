/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
export function generateParenthesis(n: number): string[] {
    const res: string[] = [];

    function backtrack(open: number, closed: number, s: string) {
        if (open === n && closed === n) {
            res.push(s);
            return;
        }

        if (open < n) {
            backtrack(open + 1, closed, s + "(");
        }

        if (closed < open) {
            backtrack(open, closed + 1, s + ")");
        }
    }

    backtrack(0, 0, "");
    return res;
}
// @lc code=end

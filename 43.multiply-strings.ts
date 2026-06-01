/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
export function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    
    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
            const sum = product + result[i + j + 1];
            
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }
    
    // Handle carry propagation for the most significant digit
    for (let i = result.length - 1; i > 0; i--) {
        result[i - 1] += Math.floor(result[i] / 10);
        result[i] %= 10;
    }
    
    // Convert result array to string
    let str = result.join('').replace(/^0+/, '');
    return str === '' ? '0' : str;
}
// @lc code=end

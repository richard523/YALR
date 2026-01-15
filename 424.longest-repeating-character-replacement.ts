/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
export function characterReplacement(s: string, k: number): number {
    const count = new Map<string, number>();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(char)!);

        // Window length - maxFreq > k means we have more than k characters to replace
        if ((right - left + 1) - maxFreq > k) {
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar)! - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
// @lc code=end

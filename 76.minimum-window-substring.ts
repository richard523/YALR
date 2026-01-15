/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
export function minWindow(s: string, t: string): string {
    if (t === "") return "";

    const tCount = new Map<string, number>();
    const window = new Map<string, number>();

    for (const char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let have = 0;
    const need = tCount.size;
    let res = [-1, -1];
    let resLen = Infinity;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        if (tCount.has(char) && window.get(char) === tCount.get(char)) {
            have++;
        }

        while (have === need) {
            // Update result
            if (right - left + 1 < resLen) {
                res = [left, right];
                resLen = right - left + 1;
            }

            // Pop from left
            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar)! - 1);
            if (tCount.has(leftChar) && window.get(leftChar)! < tCount.get(leftChar)!) {
                have--;
            }
            left++;
        }
    }

    const [start, end] = res;
    return resLen === Infinity ? "" : s.substring(start, end + 1);
}
// @lc code=end

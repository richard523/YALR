/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // Two-pointer solution: advance left/right skipping non-alphanumeric
  // compare lowercase characters. O(n) time, O(1) extra space.
  let left = 0;
  let right = s.length - 1;

  const isAlphaNum = (ch: string) => /[a-z0-9]/.test(ch);
  

  while (left < right) {
    let lc = s.charAt(left);
    let rc = s.charAt(right);

    // move left forward until alphanumeric
    while (left < right && !isAlphaNum(lc.toLowerCase())) {
      left++;
      lc = s.charAt(left);
    }

    // move right backward until alphanumeric
    while (left < right && !isAlphaNum(rc.toLowerCase())) {
      right--;
      rc = s.charAt(right);
    }

    if (left >= right) break;

    if (lc.toLowerCase() !== rc.toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}
// #TwoPointers #String
// Time Complexity: O(n)
// Space Complexity: O(1)
// @lc code=end

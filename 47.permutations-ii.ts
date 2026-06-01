/*
 * @lc app=leetcode id=47 lang=typescript
 *
 * [47] Permutations II
 */

// @lc code=start
export function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    
    function backtrack(path: number[], used: boolean[]) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            // Skip used elements
            if (used[i]) continue;
            
            // Skip duplicates - only use the first occurrence if previous duplicates weren't used
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }
    
    backtrack([], new Array(nums.length).fill(false));
    return result;
}
// @lc code=end

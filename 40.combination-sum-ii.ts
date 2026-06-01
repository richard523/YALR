/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
export function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    
    candidates.sort((a, b) => a - b);
    
    function backtrack(start: number, path: number[], remaining: number) {
        if (remaining < 0) return;
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates to avoid redundant combinations
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            
            path.push(candidates[i]);
            backtrack(i + 1, path, remaining - candidates[i]); // Don't allow reuse, so pass i+1
            path.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
}
// @lc code=end

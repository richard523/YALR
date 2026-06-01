/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
export function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    
    candidates.sort((a, b) => a - b);
    
    function backtrack(start: number, path: number[], remaining: number) {
        if (remaining < 0) return;
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates to avoid redundant combinations only when not at the start
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            
            path.push(candidates[i]);
            backtrack(i, path, remaining - candidates[i]); // Allow reuse, so pass i not i+1
            path.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
}
// @lc code=end

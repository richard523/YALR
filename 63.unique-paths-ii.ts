/*
 * @lc app=leetcode id=63 lang=typescript
 *
 * [63] Unique Paths II
 */

// @lc code=start
export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    // If the start or end is blocked, no paths exist
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    
    // dp[i][j] represents the number of unique paths to reach (i, j)
    const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));
    
    // Base case: starting position
    dp[0][0] = 1;
    
    // Fill the first row
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 1) {
            dp[0][j] = 0; // Blocked cell
        } else {
            dp[0][j] = dp[0][j-1]; // Can only come from the left
        }
    }
    
    // Fill the first column
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0; // Blocked cell
        } else {
            dp[i][0] = dp[i-1][0]; // Can only come from above
        }
    }
    
    // Fill the rest of the table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0; // Blocked cell
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    
    return dp[m-1][n-1];
}
// @lc code=end

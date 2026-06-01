/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
export function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[] = new Array(n).fill('').map(() => new Array(n).fill('.').join(''));
    
    function backtrack(row: number, cols: Set<number>, diag1: Set<number>, diag2: Set<number>) {
        if (row === n) {
            result.push([...board]);
            return;
        }
        
        for (let col = 0; col < n; col++) {
            const d1 = row - col; // For diagonal from top-left to bottom-right
            const d2 = row + col; // For diagonal from top-right to bottom-left
            
            if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) continue;
            
            // Place queen
            cols.add(col);
            diag1.add(d1);
            diag2.add(d2);
            board[row] = new Array(col).fill('.').join('') + 'Q' + new Array(n - col - 1).fill('.').join('');
            
            backtrack(row + 1, cols, diag1, diag2);
            
            // Remove queen
            cols.delete(col);
            diag1.delete(d1);
            diag2.delete(d2);
        }
    }
    
    backtrack(0, new Set(), new Set(), new Set());
    return result;
}
// @lc code=end

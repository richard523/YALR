/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
export function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const cols = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const char = board[r][c];

            if (char === '.') {
                continue;
            }

            // Check row
            if (rows[r].has(char)) {
                return false;
            }
            rows[r].add(char);

            // Check column
            if (cols[c].has(char)) {
                return false;
            }
            cols[c].add(char);

            // Check 3x3 sub-box
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (boxes[boxIndex].has(char)) {
                return false;
            }
            boxes[boxIndex].add(char);
        }
    }

    return true;
};
// @lc code=end

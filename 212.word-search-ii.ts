/*
 * @lc app=leetcode id=212 lang=typescript
 *
 * [212] Word Search II
 */

// @lc code=start
class TrieNode {
    children: { [key: string]: TrieNode };
    word: string | null;

    constructor() {
        this.children = {};
        this.word = null;
    }
}

export function findWords(board: string[][], words: string[]): string[] {
    const root = new TrieNode();
    for (const word of words) {
        let node = root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.word = word;
    }

    const result: string[] = [];
    const rows = board.length;
    const cols = board[0].length;

    function backtrack(r: number, c: number, parent: TrieNode) {
        const char = board[r][c];
        const currNode = parent.children[char];

        if (!currNode) return;

        if (currNode.word !== null) {
            result.push(currNode.word);
            currNode.word = null; // Avoid duplicate results
        }

        board[r][c] = '#'; // Mark as visited

        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') {
                backtrack(nr, nc, currNode);
            }
        }

        board[r][c] = char; // Restore

        // Optimization: Pruning the leaf nodes
        if (Object.keys(currNode.children).length === 0) {
            delete parent.children[char];
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (root.children[board[r][c]]) {
                backtrack(r, c, root);
            }
        }
    }

    return result;
}
// @lc code=end

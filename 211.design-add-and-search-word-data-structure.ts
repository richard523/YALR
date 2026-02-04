/*
 * @lc app=leetcode id=211 lang=typescript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start
class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}

export class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let curr = this.root;
        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new TrieNode());
            }
            curr = curr.children.get(char)!;
        }
        curr.isEndOfWord = true;
    }

    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }

    private dfs(word: string, index: number, node: TrieNode): boolean {
        if (index === word.length) {
            return node.isEndOfWord;
        }

        const char = word[index];

        if (char === ".") {
            for (const childNode of node.children.values()) {
                if (this.dfs(word, index + 1, childNode)) {
                    return true;
                }
            }
            return false;
        } else {
            const childNode = node.children.get(char);
            if (!childNode) {
                return false;
            }
            return this.dfs(word, index + 1, childNode);
        }
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

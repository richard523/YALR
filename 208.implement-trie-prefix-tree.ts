/*
 * @lc app=leetcode id=208 lang=typescript
 *
 * [208] Implement Trie (Prefix Tree)
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

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
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
        let curr = this.root;
        for (const char of word) {
            if (!curr.children.has(char)) {
                return false;
            }
            curr = curr.children.get(char)!;
        }
        return curr.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        let curr = this.root;
        for (const char of prefix) {
            if (!curr.children.has(char)) {
                return false;
            }
            curr = curr.children.get(char)!;
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

/*
 * @lc app=leetcode id=271 lang=typescript
 *
 * [271] Encode and Decode Strings
 */

// @lc code=start
/**
 * Encodes a list of strings to a single string.
 */
export function encode(strs: string[]): string {
    let encodedString = "";
    for (const str of strs) {
        encodedString += `${str.length}#${str}`;
    }
    return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 */
export function decode(s: string): string[] {
    const decodedStrings: string[] = [];
    let i = 0;
    while (i < s.length) {
        let j = i;
        // Find the '#' delimiter
        while (s[j] !== '#') {
            j++;
        }
        // Extract the length
        const length = parseInt(s.substring(i, j), 10);
        // Move past the '#' and read the string
        const str = s.substring(j + 1, j + 1 + length);
        decodedStrings.push(str);
        // Move the pointer to the start of the next length prefix
        i = j + 1 + length;
    }
    return decodedStrings;
};

/**
 * Your Codec object will be instantiated and called as such:
 * var codec = new Codec();
 * codec.decode(codec.encode(strs));
 */
// @lc code=end

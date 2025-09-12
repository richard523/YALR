/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
// input = array of strings
// output = list of lists (type string)
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<String, String>();
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i]!.split('').sort().join('');
        if (map.has(sorted)) {
            map.set(sorted, map.get(sorted) + ',' + strs[i]);
        } else {
            map.set(sorted, strs[i]!);
        }
    }
    let result: string[][] = [];
    for (let value of map.values()) {
        result.push(value.split(','));
    }
    return result;
};
// @lc code=end


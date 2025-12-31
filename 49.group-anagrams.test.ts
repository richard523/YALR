import { groupAnagrams } from './49.group-anagrams';

describe('groupAnagrams', () => {
    it('should group anagrams correctly for example 1', () => {
        const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
        const expected = [
            ["hat"],
            ["act", "cat"],
            ["stop", "pots", "tops"]
        ];
        const result = groupAnagrams(strs);

        // Sort inner arrays and then the outer array for consistent comparison
        const sortedResult = result.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        const sortedExpected = expected.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));

        expect(sortedResult).toEqual(sortedExpected);
    });

    it('should group anagrams correctly for example 2 (single element)', () => {
        const strs = ["x"];
        const expected = [
            ["x"]
        ];
        expect(groupAnagrams(strs)).toEqual(expected);
    });

    it('should group anagrams correctly for example 3 (empty string)', () => {
        const strs = [""];
        const expected = [
            [""]
        ];
        expect(groupAnagrams(strs)).toEqual(expected);
    });

    it('should handle an empty input array', () => {
        const strs: string[] = [];
        const expected: string[][] = [];
        expect(groupAnagrams(strs)).toEqual(expected);
    });

    it('should handle multiple groups of anagrams', () => {
        const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
        const expected = [
            ["bat"],
            ["eat", "tea", "ate"],
            ["tan", "nat"]
        ];
        const result = groupAnagrams(strs);

        const sortedResult = result.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        const sortedExpected = expected.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));

        expect(sortedResult).toEqual(sortedExpected);
    });

    it('should handle strings with different character counts', () => {
        const strs = ["a", "b", "c"];
        const expected = [
            ["a"],
            ["b"],
            ["c"]
        ];
        const result = groupAnagrams(strs);

        const sortedResult = result.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        const sortedExpected = expected.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));

        expect(sortedResult).toEqual(sortedExpected);
    });

    it('should handle strings with repeated characters', () => {
        const strs = ["aabb", "bbaa", "abab", "ccdd"];
        const expected = [
            ["aabb", "bbaa", "abab"],
            ["ccdd"]
        ];
        const result = groupAnagrams(strs);

        const sortedResult = result.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));
        const sortedExpected = expected.map(arr => arr.sort()).sort((a, b) => a[0].localeCompare(b[0]));

        expect(sortedResult).toEqual(sortedExpected);
    });
});

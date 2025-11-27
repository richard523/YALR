import { isAnagram } from './242.valid-anagram';

describe('isAnagram', () => {
    it('should return true for valid anagrams (example 1)', () => {
        const s = "racecar";
        const t = "carrace";
        expect(isAnagram(s, t)).toBe(true);
    });

    it('should return false for invalid anagrams (example 2)', () => {
        const s = "jar";
        const t = "jam";
        expect(isAnagram(s, t)).toBe(false);
    });

    it('should return true for another pair of valid anagrams', () => {
        const s = "anagram";
        const t = "nagaram";
        expect(isAnagram(s, t)).toBe(true);
    });

    it('should return false for strings of different lengths', () => {
        const s = "a";
        const t = "ab";
        expect(isAnagram(s, t)).toBe(false);
    });

    it('should return false for strings with different characters', () => {
        const s = "rat";
        const t = "car";
        expect(isAnagram(s, t)).toBe(false);
    });

    it('should return true for empty strings', () => {
        const s = "";
        const t = "";
        expect(isAnagram(s, t)).toBe(true);
    });

    it('should handle single character strings', () => {
        expect(isAnagram("a", "a")).toBe(true);
        expect(isAnagram("a", "b")).toBe(false);
    });

    it('should handle strings with repeated characters', () => {
        expect(isAnagram("aabb", "bbaa")).toBe(true);
        expect(isAnagram("aabbc", "aabbd")).toBe(false);
    });
});

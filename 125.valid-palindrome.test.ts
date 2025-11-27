import { isPalindrome } from './125.valid-palindrome';

describe('isPalindrome', () => {
    it('should return true for example 1', () => {
        const s = "Was it a car or a cat I saw?";
        expect(isPalindrome(s)).toBe(true);
    });

    it('should return false for example 2', () => {
        const s = "tab a cat";
        expect(isPalindrome(s)).toBe(false);
    });

    it('should return true for a simple palindrome', () => {
        const s = "A man, a plan, a canal: Panama";
        expect(isPalindrome(s)).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
        const s = "race a car";
        expect(isPalindrome(s)).toBe(false);
    });

    it('should handle empty string', () => {
        const s = "";
        expect(isPalindrome(s)).toBe(true);
    });

    it('should handle string with only non-alphanumeric characters', () => {
        const s = ".,";
        expect(isPalindrome(s)).toBe(true);
    });

    it('should handle string with single alphanumeric character', () => {
        const s = "a";
        expect(isPalindrome(s)).toBe(true);
    });

    it('should handle string with single non-alphanumeric character', () => {
        const s = ".";
        expect(isPalindrome(s)).toBe(true);
    });

    it('should handle string with numbers', () => {
        const s = "0P";
        expect(isPalindrome(s)).toBe(false);
    });

    it('should handle string with mixed case and numbers', () => {
        const s = "A1b2B1a";
        expect(isPalindrome(s)).toBe(true);
    });
});

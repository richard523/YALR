import { encode, decode } from './encode-and-decode-strings';

describe('Codec', () => {
    it('should encode and decode example 1 correctly', () => {
        const strs = ["neet", "code", "love", "you"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should encode and decode example 2 correctly', () => {
        const strs = ["we", "say", ":", "yes"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should handle empty array of strings', () => {
        const strs: string[] = [];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should handle array with empty strings', () => {
        const strs = ["", "hello", "", "world"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should handle array with single string', () => {
        const strs = ["single"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should handle strings with numbers and special characters', () => {
        const strs = ["123", "abc!@#", "test-1-2-3"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should handle strings containing the delimiter character itself', () => {
        // The encoding scheme uses length#string, so a '#' within the string itself is fine.
        const strs = ["hello#world", "another#test#string"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });

    it('should handle long strings', () => {
        const longString = "a".repeat(150); // Max length is 200
        const strs = [longString, "short"];
        const encoded = encode(strs);
        const decoded = decode(encoded);
        expect(decoded).toEqual(strs);
    });
});

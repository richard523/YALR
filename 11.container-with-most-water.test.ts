import { maxArea } from './11.container-with-most-water';

describe('maxArea', () => {
    it('should return the correct maximum area for example 1', () => {
        const height = [1, 7, 2, 5, 4, 7, 3, 6];
        expect(maxArea(height)).toBe(36);
    });

    it('should return the correct maximum area for example 2', () => {
        const height = [2, 2, 2];
        expect(maxArea(height)).toBe(4);
    });

    it('should handle array with two elements', () => {
        const height = [1, 1];
        expect(maxArea(height)).toBe(1);
    });

    it('should handle array with zeros', () => {
        const height = [0, 2];
        expect(maxArea(height)).toBe(0);
    });

    it('should handle a strictly increasing height array', () => {
        const height = [1, 2, 3, 4, 5];
        // 1*4=4, 2*3=6, 3*2=6, 4*1=4. Max is 6.
        expect(maxArea(height)).toBe(6);
    });

    it('should handle a strictly decreasing height array', () => {
        const height = [5, 4, 3, 2, 1];
        expect(maxArea(height)).toBe(6);
    });

    it('should handle cases where the tallest bars are in the middle', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        // 8 and 8 at indices 1 and 6. width = 5, height = 8. Area = 40.
        expect(maxArea(height)).toBe(49); // Wait, LeetCode example 1 for 11 is [1,8,6,2,5,4,8,3,7] -> 49
        // Let's re-verify my manual calculation. 
        // Index 1 (height 8) and index 8 (height 7). width = 7, height = 7. Area = 49.
    });
});

/*
 * @lc app=leetcode id=2013 lang=typescript
 *
 * [2013] Detect Squares
 */

// @lc code=start
export class DetectSquares {
    private points: Map<string, number>;

    constructor() {
        this.points = new Map();
    }

    add(point: number[]): void {
        const key = `${point[0]},${point[1]}`;
        this.points.set(key, (this.points.get(key) || 0) + 1);
    }

    count(point: number[]): number {
        const [x1, y1] = point;
        let count = 0;

        for (const [key, freq] of this.points) {
            if (key === `${x1},${y1}`) continue;
            
            const [x2, y2] = key.split(',').map(Number);
            
            // Check if the points form a square
            // For a square, the other two points should be:
            // (x1, y2) and (x2, y1) if sides are parallel to axes
            // Or check the general square conditions
            
            // Check if this point can form a square with the given point
            // and two other points that exist
            if (this.isSquare(x1, y1, x2, y2)) {
                // Check if the other two points of the square exist
                const p3 = [x1, y2];
                const p4 = [x2, y1];
                
                if (this.points.has(`${p3[0]},${p3[1]}`) && this.points.has(`${p4[0]},${p4[1]}`)) {
                    count += freq * (this.points.get(`${p3[0]},${p3[1]}`) || 0) * (this.points.get(`${p4[0]},${p4[1]}`) || 0);
                }
            }
        }

        return count;
    }

    private isSquare(x1: number, y1: number, x2: number, y2: number): boolean {
        const dx = Math.abs(x1 - x2);
        const dy = Math.abs(y1 - y2);
        
        // Points must form the diagonal of a square
        // So dx must equal dy and both must be non-zero
        return dx === dy && dx > 0;
    }
}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
// @lc code=end

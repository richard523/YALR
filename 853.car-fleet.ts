/*
 * @lc app=leetcode id=853 lang=typescript
 *
 * [853] Car Fleet
 */

// @lc code=start
export function carFleet(target: number, position: number[], speed: number[]): number {
    const n = position.length;
    if (n === 0) return 0;

    const cars: { pos: number; time: number }[] = [];
    for (let i = 0; i < n; i++) {
        cars.push({
            pos: position[i],
            time: (target - position[i]) / speed[i]
        });
    }

    // Sort cars by position descending (closest to target first)
    cars.sort((a, b) => b.pos - a.pos);

    let fleets = 0;
    let currentSlowestTime = 0;

    for (const car of cars) {
        // If this car takes more time than the fleet ahead, it starts a new fleet
        if (car.time > currentSlowestTime) {
            fleets++;
            currentSlowestTime = car.time;
        }
        // If this car takes less or equal time, it will catch up and join the fleet ahead
    }

    return fleets;
}
// @lc code=end

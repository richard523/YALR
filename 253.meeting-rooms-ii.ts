/*
 * @lc app=leetcode id=253 lang=typescript
 *
 * [253] Meeting Rooms II
 */

// @lc code=start
export function minMeetingRooms(intervals: number[][]): number {
    if (intervals.length === 0) return 0;
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    // Use a min heap to track end times
    const endTimes: number[] = [];
    
    for (const [start, end] of intervals) {
        // If current meeting starts after the earliest ending meeting, reuse that room
        if (endTimes.length > 0 && start >= endTimes[0]) {
            endTimes.shift(); // Remove the earliest ending time
        }
        endTimes.push(end);
        endTimes.sort((a, b) => a - b); // Maintain min heap property
    }
    
    return endTimes.length;
}
// @lc code=end

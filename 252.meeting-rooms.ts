/*
 * @lc app=leetcode id=252 lang=typescript
 *
 * [252] Meeting Rooms
 */

// @lc code=start
export function canAttendMeetings(intervals: number[][]): boolean {
    if (intervals.length <= 1) return true;
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        // If current meeting starts before previous meeting ends, there's a conflict
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false;
        }
    }
    
    return true;
}
// @lc code=end

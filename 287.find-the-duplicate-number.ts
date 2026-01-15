/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
export function findDuplicate(nums: number[]): number {
    // Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
    // Step 1: Finding the intersection point in the cycle
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Step 2: Finding the entrance to the cycle (the duplicate number)
    let slow2 = nums[0];
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
}
// @lc code=end

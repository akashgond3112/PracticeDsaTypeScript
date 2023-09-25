/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 25/09/2023
 * @Project PracticeDSA
 * <p>
 * 930. Binary Subarrays With Sum
 * Medium
 * Topics
 * Companies
 * Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
 * <p>
 * A subarray is a contiguous part of the array.
 * <p>
 * Example 1:
 * <p>
 * Input: nums = [1,0,1,0,1], goal = 2
 * Output: 4
 * Explanation: The 4 subarrays are bolded and underlined below:
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * [1,0,1,0,1]
 * Example 2:
 * <p>
 * Input: nums = [0,0,0,0,0], goal = 0
 * Output: 15
 * <p>
 * Constraints:
 * <p>
 * 1 <= nums.length <= 3 * 104
 * nums[i] is either 0 or 1.
 * 0 <= goal <= nums.length
 */

function numSubarraysWithSum(nums: number[], goal: number): number {
    let count: number = 0;
    let totalSum: number = 0;
    const sumCounts: Map<number, number> = new Map();
    sumCounts.set(0, 1);

    for (const num of nums) {
        totalSum += num;
        count += sumCounts.get(totalSum - goal) || 0;
        sumCounts.set(totalSum, (sumCounts.get(totalSum) || 0) + 1);
    }

    return count;
}

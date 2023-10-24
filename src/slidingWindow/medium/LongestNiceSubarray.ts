/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 24/10/2023
 * @Project PracticeDSA
 * <p>
 * 2401. Longest Nice Subarray
 * Medium
 * Topics
 * Companies
 * Hint
 * You are given an array nums consisting of positive integers.
 * <p>
 * We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.
 * <p>
 * Return the length of the longest nice subarray.
 * <p>
 * A subarray is a contiguous part of an array.
 * <p>
 * Note that subarrays of length 1 are always considered nice.
 * <p>
 * Example 1:
 * <p>
 * Input: nums = [1,3,8,48,10]
 * Output: 3
 * Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
 * - 3 AND 8 = 0.
 * - 3 AND 48 = 0.
 * - 8 AND 48 = 0.
 * It can be proven that no longer nice subarray can be obtained, so we return 3.
 * Example 2:
 * <p>
 * Input: nums = [3,1,5,11,13]
 * Output: 1
 * Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.
 * <p>
 * Constraints:
 * 1 <= nums.length <= 105
 * 1 <= nums[i] <= 109
 */

function longestNiceSubarray(nums: number[]): number {
    let startIndex: number = 0;
    let endIndex: number = 0;
    let max: number = 0;
    let count: number = 0;

    while (endIndex < nums.length) {
        while ((count & nums[endIndex]) !== 0) {
            count ^= nums[startIndex];
            startIndex++;
        }

        count |= nums[endIndex];

        max = Math.max(max, endIndex - startIndex + 1);
        endIndex++;
    }

    return max;
}

// Test case
console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
console.log(longestNiceSubarray([3, 1, 5, 11, 13]));
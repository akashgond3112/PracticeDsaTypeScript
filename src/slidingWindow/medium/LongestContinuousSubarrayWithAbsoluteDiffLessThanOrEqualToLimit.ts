
/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 04/12/2023
 * @Project PracticeDSA
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * Medium
 * Topics
 * Companies
 * Hint
 * Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.
 * <p>
 * Example 1:
 * <p>
 * Input: nums = [8,2,4,7], limit = 4
 * Output: 2
 * Explanation: All subarrays are:
 * [8] with maximum absolute diff |8-8| = 0 <= 4.
 * [8,2] with maximum absolute diff |8-2| = 6 > 4.
 * [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
 * [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
 * [2] with maximum absolute diff |2-2| = 0 <= 4.
 * [2,4] with maximum absolute diff |2-4| = 2 <= 4.
 * [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
 * [4] with maximum absolute diff |4-4| = 0 <= 4.
 * [4,7] with maximum absolute diff |4-7| = 3 <= 4.
 * [7] with maximum absolute diff |7-7| = 0 <= 4.
 * Therefore, the size of the longest subarray is 2.
 * Example 2:
 * <p>
 * Input: nums = [10,1,2,4,7,2], limit = 5
 * Output: 4
 * Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
 * Example 3:
 * <p>
 * Input: nums = [4,2,2,2,4,4,2,2], limit = 0
 * Output: 3
 * <p>
 * Constraints:
 * 1 <= nums.length <= 105
 * 1 <= nums[i] <= 109
 * 0 <= limit <= 109
 */

class LongestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit {
    longestSubarray(nums: number[], limit: number): number {
        const maxDeque: number[] = [];  // to store the maximum values in the current window
        const minDeque: number[] = [];  // to store the minimum values in the current window
        let l: number = 0;
        let mlen: number = 0;

        for (let r = 0; r < nums.length; r++) {
            // Update maxDeque with the current maximum value
            while (maxDeque.length && nums[r] > maxDeque[maxDeque.length - 1]) {
                maxDeque.pop();
            }
            maxDeque.push(nums[r]);

            // Update minDeque with the current minimum value
            while (minDeque.length && nums[r] < minDeque[minDeque.length - 1]) {
                minDeque.pop();
            }
            minDeque.push(nums[r]);

            // Check if the absolute difference exceeds the limit
            while (maxDeque.length && minDeque.length && maxDeque[0] - minDeque[0] > limit) {
                // Move the left pointer to the right
                if (maxDeque[0] === nums[l]) {
                    maxDeque.shift();
                }
                if (minDeque[0] === nums[l]) {
                    minDeque.shift();
                }
                l++;
            }

            // Update the maximum length of subarray
            mlen = Math.max(mlen, r - l + 1);
        }

        return mlen;
    }
}

// Test case
const longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit = new LongestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit();
const nums = [8, 2, 4, 7];
const limit = 4;
const result = longestContinuousSubarrayWithAbsoluteDiffLessThanOrEqualToLimit.longestSubarray(nums, limit);
console.log(result);  // Output: 2

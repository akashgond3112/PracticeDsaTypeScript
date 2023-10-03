/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 02/10/2023
 * @Project PracticeDSA
 * <p>
 * 718. Maximum Length of Repeated Subarray
 * Medium
 * Topics
 * Companies
 * Hint
 * Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
 * <p>
 * Example 1:
 * <p>
 * Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * Output: 3
 * Explanation: The repeated subarray with maximum length is [3,2,1].
 * Example 2:
 * <p>
 * Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * Output: 5
 * Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
 * <p>
 * Constraints:
 * <p>
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 */

function findLength(nums1: number[], nums2: number[]): number {
    const m: number = nums1.length;
    const n: number = nums2.length;

    // Initialize a table to store common subarray lengths
    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    let maxLen: number = 0;

    // Fill the dp table based on dynamic programming
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }

    return maxLen;
}

// Example usage:
const nums1: number[] = [1, 2, 3, 2, 1];
const nums2: number[] = [3, 2, 1, 4, 7];
const result: number = findLength(nums1, nums2);
console.log(result); // Output: 3 (Explanation: The repeated subarray with maximum length is [3, 2, 1].)

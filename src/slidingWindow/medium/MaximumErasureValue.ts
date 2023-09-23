/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 23/09/2023
 * @Project PracticeDSA
 */

/*
1695. Maximum Erasure Value
Hint
You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

Return the maximum score you can get by erasing exactly one subarray.

An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

Example 1:

Input: nums = [4,2,4,5,6]
Output: 17
Explanation: The optimal subarray here is [2,4,5,6].
Example 2:

Input: nums = [5,2,1,2,5,2,1,2,5]
Output: 8
Explanation: The optimal subarray here is [5,2,1] or [1,2,5].


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 104
*/
function maximumUniqueSubarray(nums: number[]): number {

    let start_index: number = 0
    let end_index: number = 0
    let maxvalue: number = 0
    let result: number = 0

    const integerMap = new Map<number, number>();

    while (end_index < nums.length) {

        if (integerMap.has(nums[end_index])) {
            integerMap.set(nums[end_index], integerMap.get(nums[end_index])! + 1);
        } else {
            integerMap.set(nums[end_index], 1);
        }

        result += nums[end_index];

        while (integerMap.get(nums[end_index])! > 1) {
            result -= nums[start_index];
            if (integerMap.has(nums[start_index])) {
                integerMap.set(nums[start_index], integerMap.get(nums[start_index])! - 1);
            } else {
                integerMap.set(nums[start_index], 0);
            }

            if (integerMap.get(nums[end_index])! == 0) {
                integerMap.delete(nums[start_index])
            }
            start_index++;
        }

        end_index++;

        maxvalue = Math.max(maxvalue, result)

    }

    return maxvalue

}
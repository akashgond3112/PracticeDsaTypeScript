/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 11/12/2023
 * @Project PracticeDSA
 * <p>
 * 978. Longest Turbulent Subarray
 * Medium
 * Topics
 * Companies
 * Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
 * <p>
 * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
 * <p>
 * More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
 * <p>
 * For i <= k < j:
 * arr[k] > arr[k + 1] when k is odd, and
 * arr[k] < arr[k + 1] when k is even.
 * Or, for i <= k < j:
 * arr[k] > arr[k + 1] when k is even, and
 * arr[k] < arr[k + 1] when k is odd.
 * <p>
 * Example 1:
 * <p>
 * Input: arr = [9,4,2,10,7,8,8,1,9]
 * Output: 5
 * Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
 * Example 2:
 * <p>
 * Input: arr = [4,8,12,16]
 * Output: 2
 * Example 3:
 * <p>
 * Input: arr = [100]
 * Output: 1
 * <p>
 * Constraints:
 * <p>
 * 1 <= arr.length <= 4 * 104
 * 0 <= arr[i] <= 109
 */

class LongestTurbulentSubarray{

    maxTurbulenceSize(arr: number[]): number {
        if (arr.length === 1) {
            return 1;
        }

        let startIndex = 0;
        let endIndex = 1;
        let max = 1;
        let prevCmp = arr[1] > arr[0] ? 1 : arr[1] < arr[0] ? -1 : 0;

        while (endIndex < arr.length) {
            const cmp = (arr[endIndex] > arr[endIndex - 1] ? 1 : 0) - (arr[endIndex] < arr[endIndex - 1] ? 1 : 0);

            if (cmp === 0) {
                startIndex = endIndex;
            }else if(cmp === prevCmp){
                startIndex = endIndex-1;
            }

            max = Math.max(max, endIndex - startIndex + 1);
            prevCmp = cmp;
            endIndex++;
        }

        return max;
    }

}

// Test case
const longestTurbulentSubarray = new LongestTurbulentSubarray();
const nums = [9,4,2,10,7,8,8,1,9];
const result = longestTurbulentSubarray.maxTurbulenceSize(nums);
console.log(result);  // Output: 5
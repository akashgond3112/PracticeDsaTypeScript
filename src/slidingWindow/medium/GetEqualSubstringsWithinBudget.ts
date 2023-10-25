/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 25/10/2023
 * @Project PracticeDSA
 * 1208. Get Equal Substrings Within Budget
 * Medium
 * Topics
 * Companies
 * Hint
 * You are given two strings s and t of the same length and an integer maxCost.
 * <p>
 * You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
 * <p>
 * Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.
 * <p>
 * Example 1:
 * <p>
 * Input: s = "abcd", t = "bcdf", maxCost = 3
 * Output: 3
 * Explanation: "abc" of s can change to "bcd".
 * That costs 3, so the maximum length is 3.
 * Example 2:
 * <p>
 * Input: s = "abcd", t = "cdef", maxCost = 3
 * Output: 1
 * Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.
 * Example 3:
 * <p>
 * Input: s = "abcd", t = "acde", maxCost = 0
 * Output: 1
 * Explanation: You cannot make any change, so the maximum length is 1.
 * <p>
 * Constraints:
 * <p>
 * 1 <= s.length <= 105
 * t.length == s.length
 * 0 <= maxCost <= 106
 * s and t consist of only lowercase English letters.
 */
function equalSubstring(s: string, t: string, maxCost: number): number {
    let actualSum = 0;
    let startIndex = 0;
    let endIndex = 0;
    let max = 0;

    while (endIndex < s.length) {
        actualSum += Math.abs(s.charCodeAt(endIndex) - t.charCodeAt(endIndex));

        if (actualSum <= maxCost) {
            max = Math.max(max, endIndex - startIndex + 1);
        }

        while (actualSum > maxCost) {
            actualSum -= Math.abs(s.charCodeAt(startIndex) - t.charCodeAt(startIndex));
            startIndex++;
        }
        endIndex++;
    }

    return max;
}

// Example usage:
const s: string = "abcd";
const t: string = "bcdf";
const maxCost: number = 3;
const answer: number = equalSubstring(s, t, maxCost);
console.log(answer == 3); // Output: 3
/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 26/09/2023
 * @Project PracticeDSA
 * <p>
 * 1423. Maximum Points You Can Obtain from Cards
 * Medium
 * Topics
 * Companies
 * Hint
 * There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
 * <p>
 * In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
 * <p>
 * Your score is the sum of the points of the cards you have taken.
 * <p>
 * Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
 * <p>
 * Example 1:
 * <p>
 * Input: cardPoints = [1,2,3,4,5,6,1], k = 3
 * Output: 12
 * Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
 * Example 2:
 * <p>
 * Input: cardPoints = [2,2,2], k = 2
 * Output: 4
 * Explanation: Regardless of which two cards you take, your score will always be 4.
 * Example 3:
 * <p>
 * Input: cardPoints = [9,7,7,9,7,7,9], k = 7
 * Output: 55
 * Explanation: You have to take all the cards. Your score is the sum of points of all cards.
 * <p>
 * <p>
 * Constraints:
 * <p>
 * 1 <= cardPoints.length <= 10^5
 * 1 <= cardPoints[i] <= 10^4
 * 1 <= k <= cardPoints.length
 */

function maxScore(arr: number[], k: number): number {
    let total_sum = 0;
    let x = arr.length - k;
    for (let i = 0; i < arr.length; i++) {
        total_sum += arr[i];
    }
    if (x == 0) return total_sum;

    let startIndex = 0;
    let endIndex = 0;
    let result = 0;
    let max = 0;

    while (endIndex < arr.length) {
        result += arr[endIndex];

        if (endIndex - startIndex + 1 == x) {
            max = Math.min(max, result);
            result -= arr[startIndex];
            startIndex++;
        }
        endIndex++;

    }
    return total_sum - max;
}
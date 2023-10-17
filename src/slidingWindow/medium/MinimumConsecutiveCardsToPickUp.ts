/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 17/10/2023
 * @Project PracticeDSA
 * <p>
 * 2260. Minimum Consecutive Cards to Pick Up
 * Medium
 * Topics
 * Companies
 * Hint
 * You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.
 * <p>
 * Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards.
 * If it is impossible to have matching cards, return -1.
 * <p>
 * Example 1:
 * <p>
 * Input: cards = [3,4,2,3,4,7]
 * Output: 4
 * Explanation: We can pick up the cards [3,4,2,3] which contain a matching pair of cards with value 3. Note that picking up the cards [4,2,3,4] is also optimal.
 * Example 2:
 * <p>
 * Input: cards = [1,0,5,3]
 * Output: -1
 * Explanation: There is no way to pick up a set of consecutive cards that contain a pair of matching cards.
 * <p>
 * Constraints:
 * <p>
 * 1 <= cards.length <= 105
 * 0 <= cards[i] <= 106
 */

function minimumCardPickup(cards: number[]): number {
    let result = Number.MAX_VALUE;
    let endIndex = 0;
    let startIndex = 0;

    const integerMap: Map<number, number> = new Map();

    while (endIndex < cards.length) {
        integerMap.set(cards[endIndex], (integerMap.get(cards[endIndex]) ?? 0) + 1);

        while (integerMap.get(cards[endIndex])! > 1) {
            result = Math.min(result, endIndex - startIndex + 1);
            integerMap.set(cards[startIndex], (integerMap.get(cards[startIndex]) ?? 0) - 1);

            if (integerMap.get(cards[startIndex]) === 0) {
                integerMap.delete(cards[startIndex]);
            }

            startIndex++;
        }
        endIndex++;
    }

    if (result === Number.MAX_VALUE) {
        return -1;
    }
    return result;
}
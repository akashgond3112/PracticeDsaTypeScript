/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 28/09/2023
 * @Project PracticeDSA
 * 1297. Maximum Number of Occurrences of a Substring
 * Medium
 * Topics
 * Companies
 * Hint
 * Given a string s, return the maximum number of occurrences of any substring under the following rules:
 * <p>
 * The number of unique characters in the substring must be less than or equal to maxLetters.
 * The substring size must be between minSize and maxSize inclusive.
 * <p>
 * Example 1:
 * <p>
 * Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
 * Output: 2
 * Explanation: Substring "aab" has 2 occurrences in the original string.
 * It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).
 * Example 2:
 * <p>
 * Input: s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
 * Output: 2
 * Explanation: Substring "aaa" occur 2 times in the string. It can overlap.
 * <p>
 * Constraints:
 * <p>
 * 1 <= s.length <= 105
 * 1 <= maxLetters <= 26
 * 1 <= minSize <= maxSize <= min(26, s.length)
 * s consists of only lowercase English letters.
 */
function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {
    let n: number = s.length;
    const substringFrequency: Map<String, number> = new Map();
    let maxFreq: number = 0;

    for (let i: number = 0; i <= n - minSize; i++) {
        let substring: String = s.substring(i, i + minSize);
        let uniqueChars: Set<any> = new Set<any>();
        let distinctChars: number = 0;

        let final_arr = substring.split('');
        for (const c of final_arr) {
            if (!uniqueChars.has(c)) {
                distinctChars++;
                uniqueChars.add(c);
            }
        }

        if (distinctChars <= maxLetters) {
            substringFrequency.set(substring, (substringFrequency.get(substring) || 0) + 1);
            maxFreq = Math.max(maxFreq, substringFrequency.get(substring)!);
        }
    }

    return maxFreq;
}
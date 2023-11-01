/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 01/11/2023
 * @Project PracticeDSA
 * <p>
 * 1839. Longest Substring Of All Vowels in Order
 * Medium
 * Topics
 * Companies
 * Hint
 * A string is considered beautiful if it satisfies the following conditions:
 * <p>
 * Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
 * The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
 * For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.
 * <p>
 * Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.
 * <p>
 * A substring is a contiguous sequence of characters in a string.
 * <p>
 * Example 1:
 * <p>
 * Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
 * Output: 13
 * Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
 * Example 2:
 * <p>
 * Input: word = "aeeeiiiioooauuuaeiou"
 * Output: 5
 * Explanation: The longest beautiful substring in word is "aeiou" of length 5.
 * Example 3:
 * <p>
 * Input: word = "a"
 * Output: 0
 * Explanation: There is no beautiful substring, so return 0.
 * <p>
 * Constraints:
 * <p>
 * 1 <= word.length <= 5 * 105
 * word consists of characters 'a', 'e', 'i', 'o', and 'u'.
 */
function longestBeautifulSubstring(word: string): number {
    let startIndex = 0;
    let endIndex = 1;
    let max = Number.NEGATIVE_INFINITY;

    const charCount: Map<string, number> = new Map();
    let ch: string = word[0];
    charCount.set(ch, 1);

    while (endIndex < word.length) {
        if (word[endIndex - 1] > word[endIndex]) {
            charCount.clear();
            startIndex = endIndex;
        }

        ch = word[endIndex];
        charCount.set(ch, (charCount.get(ch) || 0) + 1);

        if (charCount.size === 5) {
            max = Math.max(max, endIndex - startIndex + 1);
        }

        endIndex++;
    }

    return Math.max(max, 0);
}

// Example usage
const word: string = "aeeeiiiioooauuuaeiou";
const result: number = longestBeautifulSubstring(word);
console.log(result);  // Output: 5

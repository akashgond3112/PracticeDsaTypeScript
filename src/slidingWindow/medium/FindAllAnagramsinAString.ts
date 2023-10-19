/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 17/10/2023
 * @Project PracticeDSA
 *
 * 438. Find All Anagrams in a String
 * Medium
 * Topics
 * Companies
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 * Example 2:
 *
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 *
 * Constraints:
 *
 * 1 <= s.length, p.length <= 3 * 104
 * s and p consist of lowercase English letters.
 */

function findAnagrams(txt: string, pat: string): number[] {
    let startIndex = 0;
    let endIndex = 0;
    const ans: number[] = [];

    if (txt.length <= 0 || pat.length <= 0) {
        return ans;
    }

    const characterHashMap: { [key: string]: number } = {};

    for (let z = 0; z < pat.length; z++) {
        characterHashMap[pat[z]] = (characterHashMap[pat[z]] || 0) + 1;
    }
    let cnt = Object.keys(characterHashMap).length;

    while (endIndex < txt.length) {
        const currentChar = txt[endIndex];
        const count = (characterHashMap[currentChar] || 0) - 1;
        characterHashMap[currentChar] = count;
        if (count === 0) {
            cnt--;
        }

        if (endIndex - startIndex + 1 < pat.length) {
            endIndex++;
        } else if (endIndex - startIndex + 1 === pat.length) {
            if (cnt === 0) {
                ans.push(startIndex);
            }

            // Reverse the changes
            const currentChar = txt[startIndex];
            const count = (characterHashMap[currentChar] || 0) + 1;
            characterHashMap[currentChar] = count;
            if (count === 1) {
                cnt++;
            }

            startIndex++;
            endIndex++;
        }
    }

    return ans;
}

// Test case
console.log(findAnagrams("cbaebabacd", "abc"));  // Output: [0, 6]

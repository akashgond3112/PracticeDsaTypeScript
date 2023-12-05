/**
 * @author agond
 * @package main.slidingWindow.medium
 * @Date 05/12/2023
 * @Project PracticeDSA
 * <p>
 * 187. Repeated DNA Sequences
 * Medium
 * Topics
 * Companies
 * The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
 * <p>
 * For example, "ACGAATTCCG" is a DNA sequence.
 * When studying DNA, it is useful to identify repeated sequences within the DNA.
 * <p>
 * Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
 * You may return the answer in any order.
 * <p>
 * Example 1:
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * Output: ["AAAAACCCCC","CCCCCAAAAA"]
 * <p>
 * Example 2:
 * Input: s = "AAAAAAAAAAAAA"
 * Output: ["AAAAAAAAAA"]
 * <p>
 * Constraints:
 * 1 <= s.length <= 105
 * s[i] is either 'A', 'C', 'G', or 'T'.
 */
class RepeatedDNASequences {
     findRepeatedDnaSequences(s: string): string[] {
        const seenSubstrings: Set<string> = new Set();
        const repeatedSequences: Set<string> = new Set();
        let endIndex: number = 0;

        while (endIndex <= s.length - 10) {
            const substring: string = s.substring(endIndex, endIndex + 10);
            if (seenSubstrings.has(substring)) {
                repeatedSequences.add(substring);
            }
            seenSubstrings.add(substring);
            endIndex++;
        }

        return Array.from(repeatedSequences);
    }

}

// Test case
const repeatedDNASequences = new RepeatedDNASequences();
const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const result = repeatedDNASequences.findRepeatedDnaSequences(s);
console.log(result);
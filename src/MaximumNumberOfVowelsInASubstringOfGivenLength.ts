function maxVowels(s: string, k: number): number {

    let start_index: number = 0
    let end_index: number = 0
    let maxvalue: number = 0
    let counter: number = 0

    const vowels: string = "aeiou"
    console.log(vowels)

    while (end_index < s.length) {
        let currentCharacter: any = s.charAt(end_index)

        if (vowels.includes(currentCharacter)) {
            counter++;
        }

        end_index++;

        if (end_index - start_index > k) {
            let currentCharacter: any = s.charAt(start_index)
            if (vowels.includes(currentCharacter)) {
                counter--;
            }

            start_index++;
        }

        maxvalue = Math.max(maxvalue, counter)


    }


    return maxvalue;

}

console.log(maxVowels("abciiidef", 3))
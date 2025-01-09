let word = "Greet";
let word2 = "greet";

if (word.length !== word2.length) {
    console.log(false);
} else {
    
    let wordSorted = word.split('').sort().join('');
    let word2Sorted = word2.split('').sort().join('');

    if (wordSorted === word2Sorted) {
        console.log(true);
    } else {
        console.log(false);
    }
}

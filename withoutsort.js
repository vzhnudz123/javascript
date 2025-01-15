let words = ["banana", "apple", "cherry", "date"];
let len = words.length;

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
        if (words[j] > words[j + 1]) {
            // Swap the elements
            let temp = words[j];
            words[j] = words[j + 1];
            words[j + 1] = temp;
        }
    }
}

console.log(words); 

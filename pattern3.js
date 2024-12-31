let i, j;

for (i = 1; i <= 5; i++) {
    let line = "";
    for (j = 1; j <= 5 - i; j++) {
        line += " ";
    }
    for (j = 1; j <= 2*i-1; j++) {
        line += "*";
    }
    console.log(line);
}

let i;
let j;

for (i = 1; i <= 5; i++) {
    let line = "";
    for (j = 1; j <= 5-i; j++) {
        line += " ";
    }
    for (let k = 1; k <= i; k++) {
        line += "*";
    }
    console.log(line);
}


for(let a=4;a>=1;a--){
    let star ="";
    for(let b=1;b<=5-a;b++){
        star+=" ";
    }

    for(let c=1;c<=a;c++){
        star+="*";
    }
    console.log(star);
    

}

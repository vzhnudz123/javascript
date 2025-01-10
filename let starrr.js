// let i;
// let line="";
// for(let i=1;i<=10;i++){
//     for(let j=i;j<=10;j++){
//         line+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         line+="%c",64+i;
//     }
//     line+="\n";

// }
// console.log(line);
let line = " ";
for (let i = 1; i <= 5; i++) {
 
    for (let j = i; j <= 5; j++) {
        line += " ";
    }
    
    
    for (let k = 1; k <= i; k++) {
        line += String . fromCharCode( 64 + i ); 
    }
    
    line += "\n";
}

console.log(line);


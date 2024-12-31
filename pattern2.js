let i;
let j;

for(i=1;i<=6;i++){
    let line="";
    for(j=i;j>=1;j--){
        line+=" ";
    }
    for(let k=7-i;k>=1;k--){
        line+=" *";
    }
    console.log(line);
}

let a;
let b;

for(a=5;a>=1;a--){
    let star="";
    for(b=a;b>=1;b--){
        star+=" ";
    }
    for(let c=7-a;c>=1;c--){
        star+=" *";
    }
    console.log(star);
}
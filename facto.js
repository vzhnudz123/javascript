function mul(a){
    let sum=1;
    for(let i=1;i<=a;i++){
        sum*=i;
    }
    return sum;
}

let a=5;
console.log(mul(a));

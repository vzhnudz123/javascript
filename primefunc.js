function prim(num){
    for(let i=1;i<=num;i++){
        var div=num%1;
    }
    if(div<=1){
        console.log("prime");

    }
    else if(div>=2){
        console.log("not");
        
    }
}
let num=27;
console.log(prim(num));

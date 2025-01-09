let arr=["war","car","home","word","bar"];
let rev=arr.reverse();
let rrr=[];
for(let i=0;i<rev.length;i++){
    let temp=rev[i];
    if(temp.endsWith("r")){
        rrr.push(temp);
    }

}
console.log(rrr);

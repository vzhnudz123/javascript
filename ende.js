let arr=["care","apple","orange","kiwi","mango"];
let nw=[];
for(let i=0;i<arr.length;i++){
    let temp=arr[i];
    if(temp.includes("e")){
        nw.push(temp);
    }
    
    
}
console.log(nw);
let arr=[4,8,0,4,0,6];
let size=arr.length;
let count=0;
for(let i=0;i<=size;i++){
    if(arr[i]==0){
        arr.splice(i,1);
        count++;
         
    }
}
for(let j=0;j<count;j++){
    arr.push(0);
   
}

console.log(arr);




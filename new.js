

let arr=['cat','apple','car','carrot'];
//['cat','car','carrot']
let arre=[];
for(let i=0;i<arr.length;i++){
    
    let temp=arr[i];
    
    if(temp[0]=='c'&&temp[1]=='a'){
        arre.push(temp);
    }
}
console.log(arre);



// let arr = ["car", "cat", "apple", "carret","cop"];

// for (let i = 0; i < arr.length; i++) {
//     let temp = arr[0];
//     let temp2 = arr2[1]; 
//     if (arr[i][0][1] === temp[0]&&temp[1]) { 
//         console.log(arr[i]);
//     }
// }

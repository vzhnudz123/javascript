const arr=["one","two","three","four","five","six","siven","eight","nine","ten"];

let posi=arr.indexOf("one");
console.log(posi);

let lastt=arr.findLastIndex(x=> "six");
console.log(lastt);//last occurance

let a=arr.includes("five");
console.log(a);// ckeck 

let v=arr.find(x=>arr);
console.log(v);//find 1st student

let fistin=arr.findIndex(x=>arr);
console.log(fistin);//fist student index

let laststu=arr.findLastIndex(x=>arr);
console.log(laststu);//last student index


let l=arr.findLast(x=>arr);
console.log(l);// last 





let arr=["tvs","honda","bmw","ferarri","audi"];
let len=arr.length;
console.log("array length is",len);

let a="carracing";
let index=a.charAt(5);
console.log("character at index 5",index);

let unicode=a.charCodeAt(5);
console.log("unicode is",unicode);

let lastchar=a.charAt(a.length-1);
console.log("last character",lastchar);

let acc=a.at(3);
console.log("character at index ",acc);

let ex="javascript";
let extra=ex.slice(4,10);
console.log("extracted is=",extra);

let b="you are Awesome kuttan";
let sub=b.substring(8,15);
console.log(sub);

let n="vishnu";
let nam=n.toUpperCase();
console.log("uppercase",nam);

let v="VISHNU";
let low=v.toLowerCase();
console.log("lowercase",low);

let co="let,s";
let coo=" Learn!";
let con=co.concat(coo);
console.log(con);

let t="        helloooo     ";
let tr=t.trim();
console.log(t.length);

console.log(tr.length);

let numb="25";
let padd=numb.padStart(25,"*");
console.log(padd);

let str="25";
let revpad=str.padEnd(25,"-");
console.log(revpad);

let j="welcome";
let text=j.repeat(2);
console.log(text);

let k="it is very awesome";
let repl=k.replace("awesome","cool");
console.log(repl);

let g=" running fast ";
let run=g.replaceAll(" ","-");
console.log(run);

let string="one,two,three,four,five";
let array=string.split(",");
console.log(array);




























const playlist=["aashiq2","crazy frog","song3","wowww"];
let len=playlist.length;
console.log("length is",len);

playlist[4]="kgf";
console.log(playlist);//adding an string

let sli=playlist.slice(1);//remove
console.log(sli);


playlist.pop();
console.log(playlist);//remove one

playlist.splice(3,1)
console.log(playlist);//remove

console.log(playlist[0],playlist[2]);//access 1st and last

playlist.toString();
console.log(playlist);

const array2=["kgf","kgf2","unii vavavoo"];

const fulplaylist=playlist.concat(array2);
console.log(fulplaylist);

const a=[["one","two"],["three","four"] ];

const flatt=a.flat();
console.log(flatt);

flatt.splice(0,2);          ``
console.log(flatt);

flatt.unshift("hii","hello");
console.log(flatt);

const nw=["b","c","a","h","v","c"];
nw.sort();
console.log("sort",nw);











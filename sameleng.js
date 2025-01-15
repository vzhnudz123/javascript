let arr = ["vishnu", "vishnu", "Rocky", "arun", "rocky"];
let rev=arr.map(Element=>Element.toLowerCase()).sort();

for (let i = 1;i<rev.length; i++) {

    if (rev[i].length == rev[i - 1].length) {
        console.log(rev[i]);
    }
}




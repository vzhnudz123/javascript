let arr = ["vishnu", "vishnu", "rocky", "arun", "rocky"];
let rev=arr.sort();

for (let i = 1;i<rev.length; i++) {

    if (rev[i].length == rev[i - 1].length) {
        console.log(rev[i]);
    }
}




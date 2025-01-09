let arr=["one","two","three","Three","four","five"];
let sor=arr.map(v=>v.toLowerCase()).sort();
for(let i=0;i<=sor.length;i++){
    if(sor[i]==sor[i-1]){
        console.log(sor[i]);
        
    }
}





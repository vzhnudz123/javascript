let arr=["one","two","three","three","four","five","five"];
let sor=arr.sort();
for(let i=1;i<=sor.length;i++){
    if(sor[i]==sor[i-1]){
        console.log(sor[i]);
        
    }
}





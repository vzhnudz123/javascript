let i;
let line="";

for(i=1;i<=8;i++){
    for(let j=1;j<=8;j++){
    if(i==1||i==8||j==1||j==8){
        line+=" *";

    }
    else{
        line+="  ";
    }
    }
line+="\n";

}
console.log(line);
let i;
let line="";

for(i=1;i<=8;i++){
    for(let j=i;j<=8;j++){
        line+=" ";
    }
    for(let k=1;k<=i;k++){
        if(i==8|| k==1||k==i){
            line+=" *";   

        }
        else{
            line+="  ";
        }
    }
    line+="\n";
}
console.log(line);

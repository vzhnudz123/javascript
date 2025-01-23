


let star="";
for(let i=1;i<=7;i++){
    for(let j=1;j<=i;j++){
        star+=" ";
        
    }
    
for(let k=1;k<=1;k++){
    star+="*";
}

for(let v=1;v<=1;v++){
    for(let p=i;p<=6;p++){
        if(v==1||p==5){
            star+="  ";
        } 
    }
    for(let n=1;n<=1;n++){
        star+="*"
    }
   
}

    star+="\n";
}



console.log(star);


let right=8;
let left=6;
let down=4;

if(right==left & right==down & left==right& left==down & down==right &down==left){
    console.log("all equal");
    
}
else if(right==left || right==down ||left==right|| left==down ||down==right||down==left){
    console.log("two side equal");
    
}
else{
    console.log("all side diff");
    
}
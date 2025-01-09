function anag(word,word2){
    if(word.length!==word2.length){
        return false;
        
        
    }
    else{
        let sor=word.split('').sort().join();
        let sort=word2.split('').sort().join();

        if(sor==sort){
            return true;
            
        }
        else{
            return false;
        }
            
        
        
    }
}
let word="greet";
let word2="greet";
console.log(anag(word,word2));

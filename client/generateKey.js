function generateEncryptedKey(userEnteredKey ){
    
   var count = 0;
   var items = 0;
   var  keySize = 16;
   
   
     console.log(userEnteredKey);
   var userKeyLength = userEnteredKey.length;
   var newUserKey = [];
   console.log(userEnteredKey)
    
    for(items = 0;items < keySize; items++) {
        
             if(count !== userKeyLength) {
                  
                  
                   newUserKey[items] =  userEnteredKey[count++];
                 
                 
                 
             }
        else {
               count = 0;
                newUserKey[items] =  userEnteredKey[count];
                
                
            }        
        
        
    }
    
      console.log( "n "+newUserKey);
    
                newUserKey =  newUserKey.join('');
       
             newUserKey =  generateHashKey( newUserKey);
          
                newUserKey = newUserKey.toString();
          
            console.log( "name password "+newUserKey)
     
                 return  newUserKey;   

    


}

   





function addUserRecords(){
    
    
   
     enterUserRecords();
    
    
}
function enterUserRecords(){
    
   var rowCount,columnCount=2;
   
    var  userDate = generateCurrentDate();
    var  userKey  =  getSessionPassword()
    var userData = [];
    var uncheckedFields = [];
    var textboxId = getTextBoxId();
    var userRecord = getData(textboxId);
    var count = 0;
   var propertyNameArr = ["name","password","website","hint","date"];
   
    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
   
    // var settingField = getSettingFieldId(); 
    // var settingFieldId =  getSettingFieldActivityId(); 
     
     
    db.executeSql("select * from setting").then(function(data){
        
       var record = data[0].checkbox;
     
      for(rowCount = 0 ;rowCount < record.length ; rowCount++){
          
   
        if(record[rowCount][0]){
           
                
                
                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])
                        

                        
                        switch(userInput){
                            
                            
                            case 0 :
                                         if(checkForEmpty(userRecord[rowCount])){
                        
                         
                        
                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));
                        
                      
                                         }
                                        else{
                                            
                                                 document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));
                                                
                                            
                                            
                                        }
                                       
                                        break;
                            
                               
                            case 1 :
                                
                                         if(checkForEmpty(userRecord[rowCount])){
                        
                         
                        
                                                 userData[rowCount] = performEncryption(userRecord[rowCount],userKey);
                            
                                         }
                        
                                        else{
                                            
                                                
                                                 userData[rowCount]="Nil";
                                                
                                            
                                            
                                        }
                                        
                                        break;
                            
                               
                            case 2 :
                                       
                                        
                                         
                                         
                                          if(checkForEmpty(userRecord[rowCount])){
                        
                         
                        
                                                 userData[rowCount] = userRecord[rowCount];
                            
                                         }
                        
                                        else{
                                            
                                                document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]="";
                                                
                                            
                                            
                                        }
                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                        break;
                            
                            
                             case 3 :
                                          
                                           if(checkForEmpty(userRecord[rowCount])){
                        
                         
                        
                                                 userData[rowCount] = userRecord[rowCount];
                            
                                         }
                        
                                        else{
                                            
                                                
                                                 userData[rowCount]="Nil";
                                                
                                            
                                            
                                        }
                                        
                                        break;
                                       
                                        break;
                                     
                            
                            
                            default :
                            break;
                            
                            
                        }
            
          
        }
        
        else{
          
                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])
                        
                       
                        
                        switch( userInput){
                            
                            
                            case 0 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                      
                                       userData[rowCount]="";
                                       
                                        break;
                            
                               
                            case 1 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                        
                                       userData[rowCount]="";
                                        break;
                            
                               
                            case 2 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                         
                                       userData[rowCount]="";
                                        break;
                            
                            
                             case 3 :
                                          
                                          
                                      userData[rowCount]="Nil";
                                        break;
                            
                            
                            
                            default :
                            break;
                            
                            
                        }
                        
                        
                        
            
            
                         
                       
                    }
                    
                    
                    
       
   



}
   
      
  userData[rowCount] = userDate;
      
      
     
      if(verifyUserData(userData)){
          
             
  
       
             obj =  getUserDataObject(userData,propertyNameArr);
   
            console.log( obj);
   
              db.put('user',obj).done(function(x) {
                  
                          alert("User  Record  Entered ");
                          
                     
                  });
                  
          
          window.setTimeout(function(){ clearTextBoxValue() },1000);
      }
      else{
          
          if(uncheckedFields.length > 0){
              
               alert("Please Select Display Option For "+uncheckedFields.join());
              
          }
           window.setTimeout(function(){ clearFileds() },1000);
           
           userData = getData(textboxId);
          
           setData(userData,textboxId);
          
         
          
         
           
      }
      
      
      
    
    
      
    });
    
    
    
    
    
}

function verifyUserData(userData){
    
    
    var items = 0;
    var count = 0;
    for(items = 0; items < userData.length ; items++){
        
        if(userData[items])
        {
          count = count + 1;
          
        }
     
        
        
        
    }
    
   
  if(count == items){
      
      return true;
      
  }
  else{
      
       
      return false;
  }
    
    
    
}


function checkRecords(userData){
    
var items,count;

for(items = 0 ;items < userData.length ; items++){
    
    
    if(userData[items]){
    
            count = 0;
    
    }
    else{
        
        
        count = count + 1;
        
    }

}



if(count){
    
    
    return false;
    
}
else{
    
    return true
    
}


}

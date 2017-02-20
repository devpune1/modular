function getTableData(userDatabaseName,userTableName){
    
    var userData = new Promise(function(res,rej){
      var numberOfItem = 0;  
        var uData = [];
     
 var db = getUserDatabaseObject(sessionStorage.getItem(userDatabaseName));
 
  var userKey = getSessionPassword();
  
   var userArray=['userinfo','website','hint','date'];
        db.executeSql('SELECT * FROM '+userTableName).then (function(results) {
   
 
 
  
 if(results.length){
          
    
       
 
          
    
                   
                    for(numberOfItem =  0 ; numberOfItem < results.length ; numberOfItem++) {
            userData = decryptUserData(results[numberOfItem],userArray,userKey);
                        
                        uData[numberOfItem] =  userData ; 
                       
                   
          
          
 }
 
 res(uData);
 
}
        
      
        
        
        
        
     
}, function(e) {
    
  throw e;

    
});


    
    
        
        
        
        
        
        
        
        
    });
    return userData;
    
    
    
    
    
    
    
}



var data = getTableData('databaseName','user');
var template = data.then(function(value){
    
   console.log("he template ")
console.log(value)
})



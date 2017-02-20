





var  masterPassword ;


   ydn.debug.log('ydn.db', 'fine');
var db_name = 'bicnet-storage';
var schema = {stores: [
  {
    name: 'bicnetuser',
    encrypted: true
  }
]};
var db;
function loadDb() {
    
    
    
 var secrets = [];
  
  
 masterPassword = prompt('enter ur master Password',masterPassword);
   var secrets = [];
   
  var key1 = 'aaaa';
  //var key2 = document.getElementById('masterkey').value;
 var passphase1 = 'monkery';
  //var passphase2 = document.getElementById('masterkey').value;
 
  if (key1 && passphase1) {
      
    secrets.push({
      name: key1,
      key: passphase1
      
    });
  }
  /*
  if (key2 && passphase2) {
    secrets.push({
      name: key2,
      key: passphase2
    });
  }
  */
  var options = {
    Encryption: {
      secrets: secrets
    }
  };
  db = new ydn.db.Storage(db_name, schema, options);


}

 loadDb();
 
 
 
 
 
 
 function encryptD(){
     
    
      
  var userName = document.getElementById('username').value;
     
     //var encryptedData = CryptoJS.AES.encrypt("hello  greate", userName);
     
     
    // var CryptoJS = require(“crypto-js”);

	 //userName = CryptoJS.enc.Hex.parse( userName );
 
	
	var encrypted = CryptoJS.AES.encrypt(userName,"message");

alert("Encrypted value is "+encrypted);
     
     	var decrypted = CryptoJS.AES.decrypt(encrypted,"message");
     	
     	
  alert("dncrypted value is "+CryptoJS.enc.Utf8.stringify(decrypted));
     
 }
 
 
 
 
 
 
 
 
 
 
 
 function decryptD(encrypted ){
     
    
      
  var userName = encrypted ;
     
     //var encryptedData = CryptoJS.AES.encrypt("hello  greate", userName);
     
     
    // var CryptoJS = require(“crypto-js”);

	 //userName = CryptoJS.enc.Hex.parse( userName );
 
	
	var decrypted = CryptoJS.AES.decrypt(userName,"abhishek");

alert("decrypted value is"+decrypted);
     
     
 }
 
 
 
 
 
 
 
 
 
 
 
 
function addUser() {
  
  
  
  var userName = document.getElementById("username");
 var  userMobile = document.getElementById("usernumber");
 var  userEmail = document.getElementById("useremail");
var  userPassword = document.getElementById("userpassword");
var data;

//userTable.style.visibility='visible';





if(isFieldEmpty()){

    if( validateFields(userName,userMobile,userEmail,userPassword)){

             data = {
                        "name" : userName.value,
                        "number" : userMobile.value,
                        "email" : userEmail.value,
                        "password" : userPassword.value
                    };
                        
                       
                                        
                        data = setEncryptionData(data);
                        
                        
                        masterPassword = encryptMasterKey( masterPassword);
                        
                        
                if(masterPassword ){        
                                        
                    db.put('bicnetuser', data,masterPassword ).fail(function(e) {
                    
                        throw e;
                        
                    });
  
                      alert("Record Entered Thanks");
                }

        }
    
    else {
    
    
                reloadPage();
        }    
    
    
}
else{
  
 alert("Fields Cannot be empty");
 reloadPage();
  
}

 
 // getAllTodoItems();


}


function init() {

}

/*

   
    

/*  view decrypted records   */

/*
function   viewRecord(key){
 
   var enterData=null;
   var table = document.getElementById("choicedetail");
   
   var df = db.values('userdata');
   
   
    
    table.innerHTML = "";
 
 


    db.executeSql('SELECT * FROM userdata ').then(function(results) {
        
    var numberOfItem=0;
    var encryptKey;
        
        
        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {
          
            encryptKey = results[numberOfItem].password;
          
              if(encryptKey == key){
            
                         viewUserRecords(results);    
                        break;        
            
                    }
            
            
        }
        
        
        
        

}, function(e) {
    
  throw e;

    
});
    

}

*/








/*  view data records    */

function viewDemoRecord(){
  
  //alert("1")
 
 
 //var options = loaddb(useremail,userPassword);

//var db = new ydn.db.Storage('todo', schema, options);

 
   var enterData = null;
   var table = document.getElementById("choicedetail");
   
   var df = db.values('bicnetuser');
   
   
    
    table.innerHTML = "";
 
 


  db.executeSql('SELECT * FROM bicnetuser').then(function(results) {
        
                viewUserRecords(results);

        
    }, function(e) {
  throw e;
});
    
    

                
  
  
}


/*
 * searching records from database  

*/

function storeObject(value){
    
    
    var newObj={};
   
        
  
    
            var dataArray=['name','number','email','password'];
            
            var dataEncryptedArray=[];
            
            
            for(var items=0 ;items < dataArray.length ; items++){
                
              dataEncryptedArray[items] = encryptData(dataArray[items]);
                
                
            }
            
        
  
            for(var items=0 ;items < dataArray.length ; items++){
                
                
                newObj[dataArray[items]] = value[dataEncryptedArray[items]];
              
                
            }
            
    
    return newObj;
}




function searchRecords(){
  
  var count=0;
  
 
  
  
        var viewTable=document.getElementById('recordtabledemo');
    
        var masterUserPassword = prompt('Enter Master Password', masterUserPassword);
 
        var masterKeyPassword = encryptMasterKey(masterUserPassword);
  
         var encryptData =[];     
       
            
            
            
  
  
  viewTable.innerHTML="";
  
 
   db.get('userdata', masterKeyPassword ).done(function(items) {
       
       
        
            
    var encryptData = storeObject(items);
    
      var  encryptData = getEncryptedData(encryptData);
  
        
              createHeaderTable();
              
      
      
      
      if (encryptData) {
        
        
        
               createTable(encryptData.name,encryptData.number,encryptData.email,encryptData.password);
        
        
        
      } else {
          
                     document.getElementById('recordtabledemo').textContent =' Record not found';
     
      }
    
       
       
   });
  
  
  
  /*
  
  df.done(function (x) {
    
    
    
    var n = x.length;
    
    var value = JSON.stringify(x);
    
    alert(n);
    alert(''+ value.name);
    
    */
 
  /*
      createHeaderTable();
      //createEditHeaderTable();
    
     for (var i = 0; i < n; i++) {
  
  alert("here"+items[i].name);
              if(items[i].name == username){          
  
  alert(items[i].name);
   
                  createTable(items[i].name,items[i].number,items[i].email,items[i].password);
                  
                  //createEditTable(results[i].name,results[i].number,results[i].email);

              }
                
                
      }
    
    
      

});
 */
}



function viewUserRecords(results){
  

  var viewTable=document.getElementById('recordtabledemo');
 
 
  viewTable.innerHTML="";
  
  var df=db.values('userdata');
  
  df.done(function (results) {
    
    var n = results.length;
    
    //alert(''+n);
    
    
 
  
      createHeaderTable();
      //createEditHeaderTable();
    
     for (var i = 0; i < n; i++) {
  
   
               createTable(results[i].name,results[i].number,results[i].email,results[i].password);
                  //createEditTable(results[i].name,results[i].number,results[i].email);

       }
    
    
      

});
  
  
}







function createTable(username,usermobile,useremail,userpassword){
  

alert(username);

   var viewTable=document.getElementById("recordtabledemo");
  
   var table = document.createElement("Table");
   
    var tableBody = document.createElement('TBODY');
   
    table.appendChild(tableBody);
    table.setAttribute('id','records');
    
       var tr = document.createElement('TR');
       
       tableBody.appendChild(tr);
       
              
             var userName = document.createElement('TD');
             var userMobile = document.createElement('TD');
             var userEmail = document.createElement('TD');
             var userPassword = document.createElement('TD');
             
        
             var deleteButton =document.createElement('TD');  
               var viewButton =document.createElement('TD'); 
              
            var deleteDataButton = document.createElement('input');
            var viewDataButton = document.createElement('input');
            
            
            deleteDataButton.type='button';
            deleteDataButton.value='DELETE';
            

              deleteDataButton.onclick=function(){
                
                deleteTodo(useremail);
                reloadPage();
      
            }
            
            
            
            viewDataButton.type='button';
            viewDataButton.value='VIEW';
            viewDataButton.width='10px';
            
            viewDataButton.onclick= function(){
              
              //var key = prompt("Enter Your Password",key);
              
              //viewRecord(key);
              
              
            }
            


              userName.width='175';
              userMobile.width='175';
              userEmail.width='175';
                userPassword.width='175';
              viewButton.width='175';
              deleteButton.width='175';
  
                userName.appendChild( document.createTextNode( username ));
                userMobile.appendChild( document.createTextNode( usermobile ));
                userEmail.appendChild( document.createTextNode( useremail ));
                userPassword.appendChild(document.createTextNode( userpassword))
                viewButton.appendChild(viewDataButton);
                 deleteButton.appendChild(deleteDataButton);
                 
                       tr.appendChild(userName);
                       tr.appendChild(userMobile);
                       tr.appendChild(userEmail);
                       tr.appendChild(userPassword);
                       tr.appendChild(viewButton);
                       tr.appendChild(deleteButton);
         
        table.appendChild(tr);
  
  
  viewTable.appendChild(table);
     
  
}


function createHeaderTable(){
  
  
  
   var viewTable=document.getElementById('recordtabledemo');
  
   var table = document.createElement("Table");
   
    var tableBody = document.createElement('TBODY');
   
    table.appendChild(tableBody);
    table.setAttribute('id','records');
    
       var tr = document.createElement('TR');
       
       tableBody.appendChild(tr);
      
      
           var userNameHeader = document.createElement('TD');
            var userMobileHeader = document.createElement('TD');
             var userEmailHeader = document.createElement('TD');
              var userPasswordHeader = document.createElement('TD');
              var viewButtonHeader =document.createElement('TD');  
               var deleteButtonHeader =document.createElement('TD');
           
              userNameHeader.width = '305';
              userMobileHeader.width = '305';
              userEmailHeader.width = '305';
              userPasswordHeader.width = '305';
              viewButtonHeader.width='305';
             deleteButtonHeader.width='305';
              

  
           userNameHeader.appendChild( document.createTextNode("USER NAME"));
           userMobileHeader.appendChild( document.createTextNode("USER MOBILE"));
           userEmailHeader.appendChild( document.createTextNode("USER EMAIL"));
           userPasswordHeader.appendChild( document.createTextNode("USER PASSWORD"));
           
           viewButtonHeader.appendChild(document.createTextNode("BUTTON"));
          
        
            deleteButtonHeader.appendChild(document.createTextNode("BUTTON"));
            
            
            
         tr.appendChild(userNameHeader);
         tr.appendChild(userMobileHeader);
         tr.appendChild(userEmailHeader);
          tr.appendChild(userPasswordHeader);
          
         tr.appendChild(viewButtonHeader);
          tr.appendChild(deleteButtonHeader);
         
        table.appendChild(tr);
  
  
   viewTable.appendChild(table);
     
  
}



function reloadPage(){
  
  
  setTimeout(function(){  window.location.href="../sampledb/sampledb.html"},50);

}



function isFieldEmpty(){
  
  var count=0;
  var userEnteredData=['username','usernumber','useremail','userpassword'];
  var userData=userEnteredData.length;
  var userField=null;
  
  for( var numberOfItem=0; numberOfItem<userData ; numberOfItem++ ) {
   
        userField = document.getElementById(userEnteredData[numberOfItem]);    
    
      if( userField.value == null || userField.value== "" ) {
    
           userField.style.borderColor="FF9900";
           
            count=count+1;  
      }
     
  
  }
  
  
  if(count==0){
    
     return true;
    
  }
  else{
    
     return false;
    
  }
  
}


/*Validation of inputs*/



function validateFields(userName,userMobile,userEmail,userPassword){
  
  var count=0;
  var patternName = /[a-zA-Z]{5,8}$/;
  var patternNumber = /^[789]\d{9}$/;
  var patternEmail = /\S+@\S+\.\S+/;
  var patternPassword = /[a-zA-Z]/;


        if(!patternName.test( userName.value ) ) {

                                        userName.style.borderColor= "red" ;
                                        userName.style.borderWidth="2px";
                                          
                                        alert("Pls Enter Valid User Name");
                          count=count+1;                           
  
                     }
                     
        if(!patternNumber.test( userMobile.value ) ) {
            
                                        userMobile.style.borderColor="red" ;
                                        userMobile.style.borderWidth="2px";
                                         
                                         alert("Pls Enter Valid Mobile Number");
                         count=count+1; 
                     }             
                     
                    
            if(!patternEmail.test( userEmail.value ) ){
                
                                        userEmail.style.borderColor = "red";
                                        userEmail.style.borderWidth = "2px";
                                          
                                          alert("Pls Enter Valid Email");
                         count=count+1; 
                     }             
                              
                     
                     
                     
            if(!patternPassword.test( userPassword.value ) ){
                
                                        userPassword.style.borderColor = "red";
                                        userPassword.style.borderWidth = "2px";
                                          
                                          alert("Pls Enter Valid Email");
                         count=count+1; 
                     }             
                              
                              
                     
                     
                     
                     
                     
                     
                     
             
             if(count==0){
                 
                 return true;
                 
             }
             else{
                 
                 
                    return false;
             }
             
                     
    
    

}







/* Encryption  Of Records */



function encryptUserDataByChar(data){
    
  var encryptData = ['A','B','*','C','D','%','E','F','@','G','H','#','I','J','>','K','L','^','M','N','&','O','P','(','Q','R',')','S','T','_','U','V','-','W','X','=','Y','Z','{','1','2','}','3','4','|','5','6','<','7','8',':','9','.','a','b','!','c','d','$','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for(var len=0 ; len<encryptData.length ; len++) {
        
        
        if(data == encryptData [len]){
            
            return encryptData [len+3]; 
            
            break;
            
        }
        
        
    }
    
    
}













function setEncryptionData(userData){
    

var userName = userData.name;
var userNumber = userData.number;
var userEmail = userData.email;
var userPassword = userData.password;


var userDataArray = [userName,userNumber,userEmail,userPassword];
var userEncryptedObj =  {
};

var userEncryptionValue =['name','number','email','password'];



for(var numberOfId=0; numberOfId < userEncryptionValue .length ; numberOfId++) {
    
    
    userEncryptionValue [numberOfId]=encryptData(userEncryptionValue [numberOfId])
    
    alert(''+userEncryptionValue[numberOfId]);
    
    
}



var encryptedData=[]

for(var items=0; items < userDataArray.length ; items++)
{

    encryptedData[items] = encryptData(userDataArray[items]);
    
    userEncryptedObj[userEncryptionValue[items]]=encryptedData[items];
}

/*
for(var items=0; items < userDataArray.length ; items++)
{

    alert("Encrypted Value="+encryptedData[items]);
    


}


getData(userEncryptedObj);


*/


return userEncryptedObj;

//alert(name1.length);

// document.getElementById('cipher').value = name1.join('') ;

}



function encryptData(userData) {
    
    
    var dataLength = userData.length;
    var encryptedData = [] ;
    for( var items =0 ; items < dataLength ; items++) {
        
           encryptedData[items] = encryptUserDataByChar(userData[items]);
           
        
    }
    
    return encryptedData.join("");     
    
}








function encryptUserId(userData) {
    
    
    var dataLength = userData.length;
    var encryptedData = [] ;
    for( var items =0 ; items < dataLength ; items++) {
        
           encryptedData[items] = encryptUserDataByChar(userData[items]);
           
        
    }
    
    return encryptedData.join("");     
    
}








/* Decryption Of Records */







function decryptUserDataByChar(data){
    
   var decryptData = ['A','B','*','C','D','%','E','F','@','G','H','#','I','J','>','K','L','^','M','N','&','O','P','(','Q','R',')','S','T','_','U','V','-','W','X','=','Y','Z','{','1','2','}','3','4','|','5','6','<','7','8',':','9','.','a','b','!','c','d','$','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
  var symbolPattern = ['!','@','#','$','%','^','&','*','(',')','_','=','-','[',']',':','.','/','?','>','<'];
  
  var numberPattern = ['0','1','a','2','b','3','4','5','6','7','8','9'];
     
    
    
    //alert (data);
    
    var decryptLen=[];
    
    for(var len=0 ; len<decryptData.length ; len++) {
        
        
        if( data == decryptData [len]){
                
        //alert(len)
             
            
    
            
            return decryptData [len-3]; 
            
            break;
            
        }
        
        
    }
    
    
}








function getKeys(userData){
    
    var objectKey;
    var lenght=userData.length;
    
    
      for( var items =0 ; items < lenght ;items++) {
        
         alert(userData.keys());
           
        
    }
    alert(objectKey);
    
}


function getEncryptedData(userData){

var userDecryptionValue =[];

var userName = userData.name;
var userNumber = userData.number;
var userEmail = userData.email;
var userPassword = userData.password;


var userDataArray = [userName,userNumber,userEmail,userPassword];
var userDecryptedObj =  {
};

var userDecryptionValue =['name','number','email','password'];



var decryptedData=[];

for(var items=0; items < userDataArray.length ; items++)
{

    decryptedData[items] = decryptData(userDataArray[items]);
    
    userDecryptedObj[userDecryptionValue[items]]=decryptedData[items];
}

/*
for(var items=0; items < userDataArray.length ; items++)
{

    alert("Encrypted Value="+encryptedData[items]);
    


}


getData(userEncryptedObj);


*/


return userDecryptedObj;



}



function decryptData(userData) {
    

    var dataLength = userData.length;
    var decryptedData = [] ;
    
    for( var items =0 ; items < dataLength ; items++) {
        
           decryptedData[items] = decryptUserDataByChar(userData[items]);
           
        
    }
    
    return decryptedData.join("");     
    
}


function encryptMasterKey(masterKey) {
    
    var masterKeyLenght = masterKey.length;
    var encryptedMasterKey=[];
    for(var items =0 ; items < masterKeyLenght; items++){
        
        encryptedMasterKey[items] =  encryptUserDataByChar(masterKey[items]);
        
    }
    
    return  encryptedMasterKey.join("");
    
}



function decryptMasterKey(masterKey) {
    
    alert("Key uis:"+masterKey);
    
     var masterKeyLenght = masterKey.length;
     
    var decryptedMasterKey=[];
    
    for(var items =0 ; items < masterKeyLenght ; items++){
        
        decryptedMasterKey[items] =  decryptUserDataByChar(masterKey[items]);
        
    }
    
    return  decryptedMasterKey;
    
}









function callEncrypt(){
    
    
    var name = '{"name":"asdasdasd","number" : "asd asd" }';
    
    encryptEncrypData(name);
    



}

function encryptEncrypData(userData) {
    
    var encryptData = JSON.stringify(userData);
    
    
    alert( encryptData.toString());
    
   var name=encryptMasterKey(encryptData)
    
  alert(name);
    
}



function callDecrypt(){
    
    
   
    decryptEncrypData()
    
}







function decryptEncrypData() {
    
 

    
    alert(name);
    
   var encryptData  = encryptMasterKey ( name) ;
   
    
    
     alert(encryptData);
    
   
   var decryptData  = decryptMasterKey ( encryptData ) ;
   
  
   
      
      decryptData  = JSON.parse(decryptData);
      
      
  alert(decryptData);
   
   
   
   if(decryptData == encryptData){
       
       alert('success');
   }
   
   
   /*
   var obj = JSON.parse(name);
   
  var decryptKey = decryptMasterKey(obj);

        alert("decryption key is"+decryptKey);


     var obj = JSON.parse(decryptKey);
     
     alert(obj);
      
  //var name = JSON.parse()
  
           alert(name);
  
    */
}



/*

function getMasterKey( masterKey ) {
    
   
    
     var decryptedKey;


  var df = db.keys('userdata');

  df.done(function (keys) {
      
    var numberOfKeys = keys.length;
    
    for(var items = 0;items <numberOfKeys ; items++ ) {
        
        decryptedKey  = decryptMasterKey(keys);
        
         if(decryptedKey ==  masterKey ){
             
             alert("success"+decryptedKey)
             decrypted = keys;
             break;
             
         }
        
        
    }
    
    
    
  });

  df.fail(function (e) {
    console.error(e);
  })
    
    
    
}


*/
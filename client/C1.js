/*s

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





return userEncryptedObj;



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













function decryptUserDataByChar(data){
    
   var decryptData = ['A','B','*','C','D','%','E','F','@','G','H','#','I','J','>','K','L','^','M','N','&','O','P','(','Q','R',')','S','T','_','U','V','-','W','X','=','Y','Z','{','1','2','}','3','4','|','5','6','<','7','8',':','9','.','a','b','!','c','d','$','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
  var symbolPattern = ['!','@','#','$','%','^','&','*','(',')','_','=','-','[',']',':','.','/','?','>','<'];
  
  var numberPattern = ['0','1','a','2','b','3','4','5','6','7','8','9'];
     
    
    

    
    var decryptLen=[];
    
    for(var len=0 ; len<decryptData.length ; len++) {
        
        
        if( data == decryptData [len]){
                
        
             
            
    
            
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
}

*/

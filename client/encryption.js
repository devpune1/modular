
 
 
 function encryptData(userData,userKey){

      var encryptedData = "";


                
                encryptedData = sjcl.encrypt(userKey,userData);




           return encryptedData;




 }


 function generateHashKey(userKey){

      var hashedKey=null;



     hashedKey = sjcl.hash.sha256.hash(userKey);

      hashedKey = sjcl.codec.hex.fromBits(hashedKey);

    return hashedKey;


}


function getUserDataInObject(userDataKey,userDataValue,encryptionKey){

    var items =0;
    var dataObject = {};


    for(items = 0; items < userDataKey.length ; items++ ){


        if(validateTexboxId(userDataKey[items])){


            dataObject[userDataKey[items]] =   encryptData(userDataValue[items],encryptionKey) ;


        }

    }

    return dataObject;
}


function validateTexboxId(textboxId){


    if(textboxId == 'Password'){


        return false;
    }


    return true;
}

function storedUserRecords(userDataObject){

  var db = getUserInfoDatabaseObject();

  //db = getDatabaseObject();
  //db =  getUserInfoDatabaseObject(sessionStorage.getItem('databaseName'));

    try {
    db.put('user',userDataObject).done(function(){

       alert("Record Entered ");
    });
    }
    catch(e){
        console.log( e.message +""+e.name);

    }

}

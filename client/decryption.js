function decryptData(userDataObject,userEncryptionKey){

 
// Set up decryptData empty.

  	var decryptedData = "";

// Perform decryption.

  	decryptedData = sjcl.decrypt(userEncryptionKey,userDataObject);

// Return plain object by converting json string to object.

 // decryptedData = JSON.parse(decryptedData);

// return decrypted data.

  	return decryptedData;




 }

 function decryptToPlainData(userData,userKey){

  console.log("vale "+ userData)

   console.log(userKey);

   var x =  sjcl.decrypt(userKey,userData);

   

return x ;


 }

 function decryptUser(userData,userKey){

   console.log("vale "+ userData)

    var x =  sjcl.decrypt(userKey,userData);



   return x ;
 }

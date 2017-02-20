"use strict"

/////
/*

var schema = {


stores: [{

    name: 'userinfo',
 autoIncrement: true,


},

{
 name: 'user',    // required. object store name or TABLE name

    autoIncrement: true, // if true, key will be automatically created


},

{

    name : 'setting'    // required. object store name or TABLE name
    // if true, key will be automatically created




}]


};




*/











function getTextBoxData(windowId){

 var userData = [];

 var getTextBoxObj = {};

 var items = 0;



            getTextBoxObj = document.getElementsByName(windowId);


    for( items = 0 ; items < getTextBoxObj.length ; items++ ){




        userData[items] = getTextBoxObj[items].value;


    }

  console.log(userData +""+items+getTextBoxObj.length)



  return userData;

}


function register(object){


      var choice = "";



    choice = object.id;

  switch (choice) {

      case 'login':


              var userData = [];

             userData = getTextBoxData("loginformdiv");


            if(isUserTextBoxEmpty(userData,"loginformdiv")){


                    loginUser("loginformdiv");


                  setTimeout(clearTextBoxInput('loginformdiv'),100);

            }
            else{

                console.log("Here");
                setTimeout(function (){ promptAboutEmpty("loginformdiv")},100);

            }



          break;

         case 'signup':
            $("#userdate").datepicker("enable");
         if(remoteStorage.connected){

             $('#registrationmodal').modal('show');

        $(function() {

          $( "#userdate" ).datepicker({ dateFormat: 'dd-mm-yy' ,  changeMonth: true,changeYear: true});

            document.getElementById('show').addEventListener("click",showPassword);
            //document.getElementById('password').addEventListener("keyup",setHashKey);
            document.getElementById('showConfirmPassword').addEventListener("click",showConfirmPassword);
            //document.getElementById('confirm').addEventListener("keyup",setHashKey);

      });

            clearInput('InputName');

}
else{

        alert("Please connect to remote storage.")
        $('#remoteloginmodal').modal('show');

}

          break;

          case 'remotelogin':


              $('#remoteloginmodal').modal('show');



           break;



      default:

         break;
  }




}





function isUserTextBoxEmpty(userEnteredData,textBoxID){



    var items = 0, textboxObject = "",count = 0, flag = false ;

    var getTextBoxObj = {};

    getTextBoxObj = document.getElementsByName(textBoxID);

    for(items = 0 ; items < userEnteredData.length ; items++){




        if(userEnteredData[items] == "" ) {


                count = count + 1;

                 getTextBoxObj[items].style.borderColor = "red";
                 getTextBoxObj[items].style.color= "red";
                 getTextBoxObj[items].value = "Cannot Be Empty";

                 getTextBoxObj[items].focus();






        }



    }

    console.log(count)

 if(count > 0) {


     return false;

 }
else{


    return true ;

}





}



function promptAboutInvalidData(textboxID,message,pos){



    var getTextBoxObj ="";

    getTextBoxObj = document.getElementById(textboxID);

                    getTextBoxObj.setCustomValidity(message);


                    getTextBoxObj.style.borderColor = "red";

                    getTextBoxObj.style.color = "black";

                    getTextBoxObj.title =  message;

                    getTextBoxObj.onchange = function(){

                      $( function() {

                          $( document ).tooltip({

                              position: {


                                      my: "left top",
                                      at: "right+5 top-5",
                                      collision: "none",
                                      color : 'red',
                                      using: function( position, feedback ) {
                                              $( this ).css( position );
                                              $( this ).tooltip( "open" );

                                              $( "<div>" )
                                              .addClass( "arrow" )
                                              .addClass( feedback.vertical )
                                              .addClass( feedback.horizontal )
                                              .appendTo( this );
                              }
                    }
                  });

                });
        }



}


function promptAboutValidData(textboxID,message,pos){



    var getTextBoxObj = {};

    getTextBoxObj = document.getElementById(textboxID);

                    getTextBoxObj.style.borderColor = "lightblue";
                      getTextBoxObj.setCustomValidity("");

                    getTextBoxObj.style.color = "black";
                    // getTextBoxObj.value = message ;





}






function promptAboutEmpty(textboxID){

    console.log("here in empty");
     var items = 0, textboxObject = "",count = 0, flag = false ;
    var count = 0;
    var getTextBoxObj = {};

    getTextBoxObj = document.getElementsByName(textboxID);


    for(items = 0 ; items < getTextBoxObj.length ; items++){




        if(getTextBoxObj[items].value === "Cannot Be Empty" ){


                if(count >= items){
                    getTextBoxObj[items].focus();

                }

                    getTextBoxObj[items].style.borderColor = "red";

                    getTextBoxObj[items].style.color = "black";
                    getTextBoxObj[items].value = "";

        }
        else{

                    getTextBoxObj[items].style.borderColor = "lightblue";

                    getTextBoxObj[items].style.color = "black";

        }



    }




}

function clearTextBoxInput(textID){


     var items = 0, textboxObject = "",count = 0, flag = false ;

    var getTextBoxObj = {};

    getTextBoxObj = document.getElementsByName(textID);


    for(items = 0 ; items <getTextBoxObj.length ; items++){




        if(getTextBoxObj[items].value){

                    getTextBoxObj[items].focus();
                    getTextBoxObj[items].style.borderColor = "";
                    getTextBoxObj[items].style.color = "black";
                    getTextBoxObj[items].value = "";



        }


    }




}

function clearInput(textID){


     var items = 0, textboxObject = "",count = 0, flag = false ;

    var getTextBoxObj = {};

    getTextBoxObj = document.getElementsByName(textID);


    for(items = 0 ; items <getTextBoxObj.length ; items++){




        if(getTextBoxObj[items].value){



                    getTextBoxObj[items].value = "";



        }


    }




}

/**
* This function validate user registration information and store user registration information in local and indexed dn storage.


*/




function signUp(){


    var createDiv = "";
    var regPopupWindow;
    var formTitle;
    var titleName = "Sign In";
    var userTextBoxId = [];

    var items = 0;
    var textBoxImage = [];
    var registerButton = {};
    var closeButton = {};

    var userDataObject = {};
    var  checkBoxLabel = [];
    var title = "Sign-up";
    var getEncryptedKey = '';
    var userData = [];
   // clearTextBoxInput('regform');

    userTextBoxId  = ["fullname","userid","email","mobile","birthdate"];
    textBoxImage = ['images/name.png','images/name.png','images/phone.png','images/email.png','images/calendar.png','images/password.png'];



          var userData = [];


        /// if(isUserTextBoxEmpty('InputName')){



         userData = getTextBoxData('InputName');

          if(validateTextboxInput(userData,'InputName') ){

         if(validateConfirmPassword(userData[5],userData[6])){

           checkUserIdExist(userData[1]).then(function(result){
              console.log(result)

                 if(result){


                       promptAboutValidData("userid",userData[1],1);

                    console.log("valid no match ")



                getUserEnteredPassword(userData[5]);
        // console.log(getUserEnteredPassword(userData[5]));

                getEncryptedKey = getSessionKey();

              var key = generateHashKey(userData[1]+ generateHashKey(userData[5]));

              console.log(key)


                 userDataObject = getUserDataInObject(userTextBoxId,userData,getEncryptedKey);

                userDataObject["key"] = key;

                  console.log(getDecryptedUserDataInObject(userTextBoxId,userDataObject,getEncryptedKey))


                // Store registration details to remote storage.
                console.log(userData[1])
                 storeRegistrationDetails(userDataObject,userData[1])

                 storeUserIdToRemoteStorage(userData[1],userData[1])
                 storedUserRecords(userDataObject);



                  // regPopupWindow.style.display = "none";


                 $("#userdate").datepicker("disable");
                $('#registrationmodal').modal('hide');
                $("#custalert").toggle();
                $("#custalert").toggle();
         }
 else{
            //  console.log("invalid found match ")
              //document.getElementById('customAlert').style.display ="block";

              $("#custalert").toggle();
        promptAboutInvalidData("userid","User id already exist!! ",1);
        //  alert("User id already exist");
}
});
}
}

}



console.log("Done wwww asdas...........")


function remoteSubmit(){


var userData = getTextBoxData('remoteInputName');

if(validateUserId(userData[0])){
if(validateEmail(userData[1])){


    console.log(userData[1])



       remoteStorage.widget.view.form.userAddress.value = userData[1];


	     remoteStorage.widget.view.events.connect(new Event(""));

	       sessionStorage.setItem('databaseName',userData[0]);

         loadRemoteStorageRecords();



}else{

            alert("Invalid email address")
      //  promptAboutInvalidData("remoteInputName","Invalid email address",1)


}
}
else{

            alert("User id in-valid")
      //  promptAboutInvalidData("remoteInputName","Invalid email address",1)


}
}








function createButton(buttonObj,buttonId){




   buttonObj = document.createElement('input');
   buttonObj.type = "button";
   buttonObj.id = buttonId;


  return buttonObj;

}




function createImageButton(windowObject,imageIcon){


     var imageTextbox= new Image();
       imageTextbox.src = imageIcon;


    imageTextbox.type = "text";

    imageTextbox.style.width ="30px";
    imageTextbox.style.height = "20px";
    imageTextbox.style.marginLeft = "85px";

     imageTextbox.style.display = 'inline-block';

    windowObject.appendChild(imageTextbox);

    return windowObject;


}



function createTextBox(windowObject,textId,placeHolder){

    var textBox = "";



textBox = document.createElement('input');


if(placeHolder == 'Password' ){


  textBox.setAttribute('type', 'password');


}
else{

       textBox.setAttribute('type', 'text');
}


textBox.title = "Enter Your " + placeHolder;
textBox.name = textId;
textBox.class = textId;
textBox.id  = placeHolder;

textBox.style.width  = "200px";
textBox.style.height  = "30px";
textBox.style.marginTop  = "10px";

textBox.placeholder = "Enter Your "+ placeHolder + " Here";

textBox.onclick = function(){




            $( function() {
       $( document ).tooltip({

      position: {

        my: "left center",
        at: "right+20 center",
        collision: "none",
        using: function( position, feedback ) {
          $( this ).css( position );

          $( "<div>" )

            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );
   $(textBox.id).tooltip('toggle');

    if(textBox.id == 'Date'){


           $(' #Date').datepicker( {

              changeMonth: true,
                changeYear: true,
               dateFormat: 'dd/mm/yy',
               yearRange: "1960:2000",


}).focus();










}

}
windowObject.appendChild(textBox);

    return windowObject;

}

function setWindowSize(windowObject,widthSize,heightSize){

    windowObject.style.width = widthSize ;
    windowObject.style.height = heightSize ;

    return windowObject;

}


function storedUserRecords(userDataObject){

  var db = getUserInfoDatabaseObject();

  //db = getDatabaseObject();
  //db =  getUserInfoDatabaseObject(sessionStorage.getItem('databaseName'));

    try {


    db.put('userinfo',userDataObject).done(function(){

       alert("Record Entered ");
    });


    }
    catch(e){
        console.log( e.message +""+e.name);

    }

}

function getUserDataInObject(userDataKey,userDataValue,encryptionKey){

    var items =0;
    var dataObject = {};


    for(items = 0; items < userDataKey.length ; items++ ){


        if(validateTexboxId(userDataKey[items])){


            //dataObject[userDataKey[items]] =   userDataValue[items] ;

          dataObject[userDataKey[items]] =   encryptData(userDataValue[items],encryptionKey) ;


        }

    }

    return dataObject;
}


function getDecryptedUserDataInObject(userDataKey,userDataValue,encryptionKey){

    var items =0;
    var dataObject = {};


    for(items = 0; items < userDataKey.length ; items++ ){


        if(validateTexboxId(userDataKey[items])){


            //dataObject[userDataKey[items]] =   userDataValue[items] ;

          dataObject[userDataKey[items]] =   decryptData(userDataValue[userDataKey[items]],encryptionKey) ;


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





function createLabel(windowObject,labelName,mLeft,mTop,fsize){
    var label    = [];




    label = document.createElement('label');
    label.for = labelName;
    label.innerHTML = labelName;
    label.style.display = 'block';
    label.style.fontSize = fsize;
    label.style.marginTop = mTop;
    label.style.marginLeft = mLeft;

         windowObject.appendChild(label);


    return  windowObject;


}











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

             newUserKey =  generateHashKey(newUserKey);

                newUserKey = newUserKey.toString();

            console.log( "name password "+newUserKey)

                 return  newUserKey;




}









function getUserEnteredPassword(textId){


    var getPassword = '';


   getPassword =   textId;


  setSessionKey(getKeyName(),generateHashKey(getPassword));




}



function setSessionKey(keyName,keyValue){


     sessionStorage.setItem(keyName,keyValue);

}



function getKeyName(){


    return "userKey";

}

function getSessionKey(){


    var  keyName = "";

    keyName = getKeyName();


   return sessionStorage.getItem(keyName);




}










 function validateTextboxInput(userData,textboxID){




     var items = 0;
   var count = 0;

    var validInput = [];


    // console.log("DAta"+userData);




     for(items = 0 ; items < userData.length ; items++){


         switch(items){



             case 0 :

                    if(userData[items]){


                    if(validateString(userData[items])){
                        validInput[items] = true;
                        promptAboutValidData("fullname",userData[items],items);

                    }
                    else{

                          validInput[items] = false;

                        promptAboutInvalidData("fullname"," Only String Accepted With Space ",items);


                    }
                }
                else{

                     validInput[items] = false;

                        promptAboutInvalidData("fullname","Cannot Be Empty",items);



                }





                 break;

                case 1 :



                 if(userData[items]){

                    if(validateUserId(userData[items])){

                        validInput[items] = true;

                        promptAboutValidData("userid",userData[items],items);


                    }
                    else{

                          validInput[items] = false;

                          promptAboutInvalidData("userid","Must be string or alpha-numeric ",items);

                    }
                 }
                 else{

                       validInput[items] = false;

                         promptAboutInvalidData("userid","Cannot Be Empty",items);




                 }

                   // console.log(validateUserId(userData[items]));

                 break;






                  case 3 :


                 //   console.log(validateMobileNumber(userData[items]))


                    if(userData[items]){

                    if(validateMobileNumber(userData[items])){

                         validInput[items] = true;
                      promptAboutValidData("mobileno",userData[items],items)

                    }
                    else{

                         validInput[items] = false;
                         promptAboutInvalidData("mobileno","Only Number Accepted Up To 10 Digit",items);



                    }
                   }

                  else{

                         validInput[items] = false;
                         promptAboutInvalidData("mobileno","Cannot Be Empty",items);



                    }

                 break;


                    case 2 :

                    if(userData[items]){

                    if(validateEmail(userData[items])){

                        validInput[items] = true;
                        promptAboutValidData("email",userData[items],items)

                    }
                    else{

                        validInput[items] = false;

                         promptAboutInvalidData("email","Enter Valid Email Address ",items);
                    }
                    }
                    else{


                         validInput[items] = false;

                         promptAboutInvalidData("email","Cannot Be Empty",items);
                    }



                 break;


                  case 4:



                    if(userData[items]){
                          validInput[items] = true;
                       promptAboutValidData("userdate",userData[items],items);

                    }
                    else{

                          validInput[items] = false;

                         promptAboutInvalidData("userdate","Cannot Be Empty",items);

                    }



                 break;




                 case 5 :

                // console.log("case"+validatePassword(userData[items]))

                 if(userData[items]){

                    if(validatePassword(userData[items])){

                          validInput[items] = true;
                       promptAboutValidData("password",userData[items],items);

                    }
                    else{

                          validInput[items] = false;

                         promptAboutInvalidData("password","Must Be At Least 8 with 1 UpperCase,1 Digit and character",items);

                    }
                 }
                 else{

                       validInput[items] = false;

                         promptAboutInvalidData("password","Cannot Be Empty",items);




                 }

                   // console.log(validatePassword(userData[items]));

                 break;

        case 6:
             if(userData[items]){

                    if(validatePassword(userData[items])){

                          validInput[items] = true;
                       promptAboutValidData("confirm",userData[items],items);

                    }
                    else{

                          validInput[items] = false;

                         promptAboutInvalidData("confirm","Must Be At Least 8 with 1 UpperCase,1 Digit and character",items);

                    }
                 }
                 else{

                       validInput[items] = false;

                         promptAboutInvalidData("confirm","Cannot Be Empty",items);




                 }





            break;


             default :

             break;

         }



     }


     for(items = 0; items < validInput.length; items++){

        console.log(validInput[items])
         if(!validInput[items]){

             count = count + 1;

         }

     }


     if(count){



         return false;

     }
    else{


        return true;

    }




 }


function validateString(userEnteredName) {



      var namepattern= /^([a-zA-Z]*((\s)))+[a-zA-Z]*/;




    if(namepattern.test(userEnteredName))
    {


                return true;
    }
    else{



                return false;
    }


}

function validateEmail( userEnteredEmail ) {

    var emailpattern = /\S+@\S+\.\S+/;



    if(isFiledEmpty(userEnteredEmail) && emailpattern.test(userEnteredEmail)){

        return true;


    }
    else{

        return false;
    }



}


function validateMobileNumber(userEnterednumber){


    var numberpattern = /^[978]{1}[0-9]{9}$/;

  //  console.log( "asdasd" +numberpattern.test(userEnterednumber));

        if(isFiledEmpty(userEnterednumber) && numberpattern.test(userEnterednumber))
        {


              return true;


         }
         else
          {

              return false;
         }


}




function validatePassword(password){


var passPassword=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?!.*\s).{8,}/;



if(passPassword.test(password) && isFiledEmpty(password) ){



    return true


}

else{


    return false;



}



}




function getDatabaseObject(){

    var db = {};
    db_name = 'bDb';

   db = new ydn.db.Storage(db_name, schema);

    return db;

}

function loginUser(textboxID){


var userData = [] ;
var key ="";
var db = {};
var numberOfRecords = 0;

var items = 0 ;

var userName = "";

var userPassword = "";

var count = 0;

var decryptedName = "";

var name = "";


db = getUserInfoDatabaseObject();




userData = getTextBoxData(textboxID);

userName = userData[0];
userPassword = userData[1];



try {



db.executeSql('Select * from userinfo').then(function(records){

    key = generateHashKey(userName + generateHashKey(userPassword));
   console.log(key);
   //userPassword = generateHashKey(userPassword);


if(records.length){


  for(items = 0 ; items < records.length ; items++){


   name = records[items].key;

     console.log(name);


      if(name){

     //console.log(validateCredential(userName,name));

          if(validateCredential(key,name)){


              count = count + 1;

                setTimeout(addLoader(),100);

               setSessionKey(getKeyName(), generateHashKey(userPassword));

                 setSessionKey("databaseName",(userName));
                setSessionKey("recordKey",key);



             window.location.href = "../entc.html";
              break;


          }

      }




  }

 console.log(count)
  if(count == 0){

    ///
      alert('User Id or Password Invalid');
  }

}
else{

    alert("Click To Remote Login Button To Access Your Credentials");

     $('#remoteloginmodal').modal('show');
}

});


}

catch(err) {

   alert(err.message);
}






}


function validateCredential(userRecordName,userName){



    if(userName === userRecordName){


        return true;

    }
    else{

        return false;
    }









}




function isFiledEmpty( filedData ) {

    if(filedData ===""){

        return false;
    }
    else{

         return true;

    }
}


function getRandowmName(userName){



     var count = 0;
   var items = 0;
   var  keySize = 8;
   var userKeyLength = userName.length;
   var newUserKey = [];


    for(items = 0;items < keySize; items++) {

             if(count !== userKeyLength) {


                   newUserKey[items] =  userName[count++];



             }
        else {
               count = 0;
                newUserKey[items] =  userName[count];


            }


    }

     // console.log( "n "+newUserKey);

                newUserKey =  newUserKey.join('');

             newUserKey =  generateHashKey( newUserKey)

                newUserKey = newUserKey.toString();

           // console.log( "name password "+newUserKey)

                 return  newUserKey;













}




function addLoader(){


        var loaderDiv  =  document.getElementById("registerform");

        var loadingDiv = document.createElement('label');
        loadingDiv.id = "sample";
        loadingDiv.value = "Loading Please Wait..." ;
         loadingDiv.style.fontSize = "20px" ;
          loadingDiv.style.color = "white" ;
         loadingDiv.style.display ="block";


          loaderDiv.style.display ="block";
        loaderDiv.appendChild(loadingDiv);









}

function getClear(){

   clearTextBoxInput('InputName');

  $('#registrationmodal').modal('hide');


}

function disconnectRemoteModal(){

   if(remoteStorage.connected){

      remoteStorage.disconnect();

     $('#remoteloginmodal').modal('hide');


   }
   else{


        $('#remoteloginmodal').modal('hide');
   }

}





function validateConfirmPassword(Password,confirmPassword){

    if(Password != confirmPassword){
         document.getElementById('confirm').setCustomValidity("Passwords Don't Match");
     return false;

    }
    else{


        return true;
    }




}






function checkUserIdExist(userId){

var tabbleName =  'uniqueid';
  var count = 0;
var db = getUserInfoDatabaseObject();

var returnValue = db.executeSql("Select * from "+tabbleName).then(function(results){


              for(var key in results){

                  if(userId == results[key].userid){

                    count = count + 1;

                      break;

                  }



              }

              if(count){

                return false;

              }
              else{

                return  true;


              }




});


return returnValue;

}





function validateUserId(password){


var passPassword=/^[a-zA-Z0-9]+(?:[a-zA-Z0-9]+)*$/;



if(passPassword.test(password) && isFiledEmpty(password)  ){



    return true


}

else{


    return false;



}



}

function showPassword(){



if ($("#password").attr("type") == "password") {
  document.getElementById("show").value ="Hide"
  $("#password").attr("type", "text");

} else {
  document.getElementById("show").value ="Show"
  $("#password").attr("type", "password");
}


}

function showConfirmPassword(){


  if ($("#confirm").attr("type") == "password") {
      document.getElementById("showConfirmPassword").value ="Hide";
    $("#confirm").attr("type", "text");

  } else {
      document.getElementById("showConfirmPassword").value ="Show";
    $("#confirm").attr("type", "password");
  }

}




function setHashKey(){
  $("#password").click(function() {
      if ($("#password").attr("type") == "password") {
        $("#password").attr("type", "text");

      } else {
        $("#password").attr("type", "password");
      }
    });

    $("#confirm").click(function() {
        if ($("#confirm").attr("type") == "password") {
          $("#confirm").attr("type", "text");

        } else {
          $("#confirm").attr("type", "password");
        }
      });
}


(function(){



      setTimeout(function(){loadRemoteStorageRecords()},3000)


    document.getElementById('remoteconnect').onclick = remoteSubmit;
     document.getElementById('remotedisconnect').onclick = disconnectRemoteModal;

})()

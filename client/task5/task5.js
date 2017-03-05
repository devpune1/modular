/*
(function() {
  'use strict';



var getUserCredentials = {

        el : '',
        userName:'same',
        userPassword:'same;',

      cacheDom : function(){

        this.el = document.getElementById('myform');

        this.userName = this.el.elements[0].value;
        this.userPassword = this.el.elements[1].value;
        this.button = this.el.elements[2].value;

      },

      init : function(){

        this.cacheDom();


          //alert();

      },
      validate : function(){

        alert("validate")
          if(this.userName === "a"){

              alert();
          }
        },

          bindClickEvent : function(){

              this.button.on('click',validate);

          }






}
getUserCredentials.init();

}());


(function() {
  'use strict';

var getUserCredentials = function(){


  var     cacheDom = function(){




      }

var init = function(){

          alert("type2");

      }


return {

  init : init

}

}
//.init();
}());
*/



/******************** Revealing module pattern ******************/

(function() {
  'use strict';

$('myform').validator();


}());

/*** Authentication module.***/
/******************** User module *************/

var userModule = (function() {

function clearTextbox(){

  document.getElementById('userid').value ="";
  document.getElementById('userpassword').value="";

}


function getUserCredentials(){

  console.log("asd");

  var userCredentialObject = {

    "userid": document.getElementById('userid').value,

    "userpassword" : document.getElementById('userpassword').value



  };
  console.log(userCredentialObject);

    return userCredentialObject;
  }
//alert(userCredentialObject.getUserData());



return {


  getUserData : getUserCredentials,
  clearText : clearTextbox
};

}());

//console.log(userModule.getUserData());


var authenticationModule = (function() {

  var submitButton = document.getElementById('submit');
/*** Validate credentials **/

function validateCredentials(){

var userCredential = userModule.
getUserData();

if(userCredential.userid === "asd" && userCredential.usepassword === "asdasd" ){


  console.log("login")
}
else{

customAlertModule.customAlert(" user id or password do not match")
  console.log("not valid user");
}
userModule.clearText();


}


  function setEvent(){


    submitButton.onclick =  authenticationModule.validate;


  }





return {

  validate : validateCredentials,
  initialize : setEvent

}

}());
/********************* Custom alert module  ******************/
var customAlertModule = (function() {

  'use strict';

// This function display Custom alert
  function customAlert(msg){

// alert user.

    alert(msg);

  }

// Return function.

return{

  customAlert : customAlert
}


}());

console.log("Initializing module");

authenticationModule.initialize();


// This function bind events.

function  bindClickEvent(button,fun){

            button.onclick = fun;

}





var validation = (function(){


  function validateForEmpty(fieldValue){

      if(fieldValue){

          return true;

      }
      else{

          return false;

      }
}

      function validateForString(fieldValue){

          var pattern =/^[a-zA-Z]/;

          if(pattern.test(fieldValue)){

             return true;

          }
          else{

            return false;
          }


      }


return  {

  validateString : validateForString,

}




})();
// This modular function accept,display user record from html page.

var user = (function(){

// Accept records.

  var records = [];

// Get name object.

  var name = document.getElementById('username');

// Get age object.

  var age = document.getElementById('userage');

// Get button object.

  var register = document.getElementById('submit');

// Get status object.


  var status = document.getElementById('status');




  //This function clear value inside textbox.

    function clearField(){

      // This function bind events.

      name.value="";
      age.value="";


    }


//This function cache dom that assign objects.

  function cacheDom(){

    // This function bind events.

      bindClickEvent(register,addUserRecord)



  }

// This fetch user data from html page.

  function fetchUserData() {

    //alert(name.value)

      var userData = {

        "username" : name.value || -1,
        "userage" : age.value

      };
      clearField();

      if(userData.username == -1){
        //alert()a
        console.log("true")
      }else {

        return userData;

      }

  };


// This function displya user enter records.

  function displayRecord(){

    document.getElementById('totalcustomer').innerHTML =notify.displayCount();

        for(var key in records){

    //status.innerHTML = records[key].username;

    var li = document.createElement('li');

    li.appendChild(document.createTextNode(" Name : " + records[key].username));


    li.appendChild(document.createTextNode(" , Age : " +records[key].userage));


  /*  li.appendChild(document.createTextNode(" , Email : " +names[id].email));
    li.appendChild(document.createTextNode(" ,Qualification : " +names[id].qualification));
    li.appendChild(document.createTextNode(" , Birth Date : " +names[id].birthdate));
    li.appendChild(document.createTextNode(" , Password :" +names[id].password));
*/
  }

  status.appendChild(li);

}
  function addUserRecord(){

    var userData =  fetchUserData();
if (userData) {

  records.push(userData);
  displayRecord();

  console.log(records);

}
else{

alert("Fill the given fields")

}


  }


return  {
init : cacheDom

}


})();

user.init();


var notify = (function() {
  'use strict';
var count = 0;

var displayCount = function(){

console.log(count);

 count = count + 1

return count;

};

return {


  displayCount :  displayCount
}


}());



var validation =  (funtion(){

function checkForEmpty(userData){
    



}




}());

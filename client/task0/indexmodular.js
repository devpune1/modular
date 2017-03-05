




var validateUser = (function(){

function validateName(){





}


return {



}



})();



var stats = (function(){

var names = [];



function attach(userObject){

if(userObject){

      names.push (userObject);


    var ul = document.getElementById('setName');


    for(var id in names){

            var li = document.createElement('li');

            li.appendChild(document.createTextNode(" Name :" + names[id].name));
            li.appendChild(document.createTextNode(" , Address :" +names[id].address));
            li.appendChild(document.createTextNode(" , Mobile :" +names[id].mobile));
            li.appendChild(document.createTextNode(" , Email : " +names[id].email));
            li.appendChild(document.createTextNode(" ,Qualification : " +names[id].qualification));
            li.appendChild(document.createTextNode(" , Birth Date : " +names[id].birthdate));
            li.appendChild(document.createTextNode(" , Password :" +names[id].password));

          }



        ul.appendChild(li);
}
}


function displayStatus(count){
console.log(name)

document.getElementById("state").innerHTML = count;

}
function displayAddedRecordName(person){



document.getElementById("currentname").innerHTML = person["name"];
}

return {

          attach : attach,
          displayStatus : displayStatus,
 displayAddedRecordName : displayAddedRecordName
}



})();

/**asdasd asdasdads*/
var EventBus = {
  topics: {},

  subscribe: function(topic, listener) {
    // create the topic if not yet created

    this.topics[topic] = [];

    // add the listener
    this.topics[topic].push(listener);

    console.log(this.topics)
  },

  publish: function(topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if(!this.topics[topic] || this.topics[topic].length < 1) return;

    // send the event to all listeners
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
};

var textID = (function(){

//// moduler asdasdasd
      var textBoxID =["name","address","email","mobile","birthdate","qualification","password"];


      function getTextBoxID(){

            return textBoxID;

      }

return {


    getTextBoxID : getTextBoxID


}

})();


/*

object that helps user to add deata,display data ,and fetch records

*/

var userDetails = (function(){


    var userDataObject = {};
    var textBoxID ="name";
    var input = document.getElementsByClassName(textBoxID);
    var count = 0;
/* Fetch user enter data from textbox and store into array*/

function  addUserData(){


  $('#myForm').validator()
var userData = fetchData(textBoxID );

var userTextBoxID  = textID.getTextBoxID();


            for(var items = 0 ;items < userData.length; items++){

                      userDataObject[userTextBoxID[items]] = userData[items];

              }



              EventBus.subscribe('display', stats.attach);
              EventBus.subscribe('status', stats.displayStatus);
              EventBus.subscribe('currentname', stats.displayAddedRecordName);



              EventBus.publish('display', userDataObject);
              EventBus.publish('status',count++);
              EventBus.publish('currentname', userDataObject);

clear();

}

function  fetchData(textBoxID){

            var userData = [];

            var registerObject = document.getElementById("registrationform");

            var input = document.getElementsByClassName(textBoxID);


              for(var items= 0 ;items < input.length; items++){



                   if(input[items].value){

                      userData.push(registerObject[items].value);


                    }else{

                        alert("Cannot Be Empty")
                        break;
                    }



}
        return userData;


}




function clear(){

  for(var items = 0 ;items < input.length; items++){


            input[items].value = "";

    }




}

function  bindClickEvent(button,fun){

            button.onclick = fun;

}

function  getUserDataInObject(userData){

    var textboxID = textoxID.getTextBoxID();


}



function initialize(){


  bindClickEvent(document.getElementById('submitUser'),addUserData);

}
return {

init : initialize


}

})();


userDetails.init();






var  validationModule = (function(){



function  validateInputTextbox(){


var inputRecord = document.getElementsByClassName('name');

for(var items = 0; items <  inputRecord.length ; items++){


    if(inputRecord[items].value == ""){

        alert("Cannot be empty")

    }


}

}

return {


  validateMobileNumber : validateInputTextbox

}




})();

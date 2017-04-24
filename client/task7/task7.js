
var customer = (function() {
  //'use strict';

var formObject =  document.getElementsByTagName("input");
var userRecord= {};
var buttonApply = document.getElementById('save');
var collage = "D.Y.Patil";

console.log("hererer");
function init(){


//alert(formObject.elements['name'].length);
buttonApply.onclick = getCustomerRecord;

}

function getCustomerRecord(){

var length = formObject.length;


for (var i = 0; i < length; i++) {

    alert(formObject[i].value);


}

}

function createObject(formObject) {




}





return  {


initalize : init

};



}());


customer.initalize();




//alert(customer.setCollageName);

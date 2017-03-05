
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

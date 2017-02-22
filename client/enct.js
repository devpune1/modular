


function loadDb() {


  if(!window.indexedDB){

      alert("Your BrowserDo not support Indexed db");
  }

  else{


      userEncryptionKey = getSessionPassword();


db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 setUserProfile();




 if(userEncryptionKey  !== ''){


    sessionStorage.setItem('userKey',userEncryptionKey);





}
else{

    loadDb();

}

  }

}













/*===================================================ADD USER RECORD=========================================================*/



function getTextBoxId(){

     var userTextBoxId = ["username","userpassword","userwebsite","userhint"];


    return userTextBoxId;
}


function getData(textboxID){


     var userData = [];



  for(var items = 0; items <  textboxID.length ; items++){


    userData[items] = document.getElementById(textboxID[items]).value;



}

//userData[items++] = userDate;





return userData;




}


function createDataSource( dataSource ){

   $(document).ready(function() {

    $('#example').DataTable( {

        data:dataSource ,

        columns: [
            { title: "Name" },
            { title: "Password" },
            { title: "Website" },
            { title: "Hint" },
            { title: "Date" },
            { title: "Action" }
        ]
    } );
} );




}


/*===================================================CREATE  USER RECORD TABLE =========================================================*/



function createTable(count,userName,userPassword,userWebsite,userHint,userDate,uniqueKey){

    var userRowNumber,userTable,createUserTable,userRow,userPasswordRow,userWebsiteNameRow,userNameRow,userHintRow,userDateRow,userActionButton,deleteRecord,editRecord;
     var userKey;
   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));




        deleteRecord = document.createElement('label');
        deleteRecord.id = 'deletebutton';
        deleteRecord.value="Delete" ;


         userRow = document.createElement('tr');


          userTable=document.getElementById('usertable');
           var createTablebody = document.createElement('tbody');
          createUserTable=document.createElement('Table');
          createUserTable.id='result';

          userRow=document.createElement('tr');

          deleteRecord = document.createElement('input');
           deleteRecord.type="button";
          deleteRecord.id = 'deletebutton';
             deleteRecord.width = '30';




          editRecord = document.createElement('input');
            editRecord.type="button";
          editRecord.id= 'editbutton';

          deleteRecord.style.background = "edit.png" ;


          userRowNumber =document.createElement('td');
          userNameRow=document.createElement('td');
          userPasswordRow=document.createElement('td');
          userWebsiteNameRow=document.createElement('td');
          userHintRow=document.createElement('td');
          userDateRow = document.createElement('td');



          deleteRecord.onclick = function (){

               userKey = getSessionPassword();
               console.log(uniqueKey)
               deleteData(uniqueKey);


           }

           editRecord.onclick = function() {

            var userEdittedData ={};

               // userKey = getSessionPassword();
                $("#myEditModal").modal();
                 $(".modal-body #name").val(userName);
                  $(".modal-body #password").val( userPassword);
                   $(".modal-body #website").val( userWebsite);
                    $(".modal-body #hint").val( userHint );




  $(document).one("click", ".modal-footer #savedetails", function () {


                    // Set time of creation.


                    // Set string format of date.


                    // Store new record into varibale.
            var userEdittedData = [];

                    userid  = $(".modal-body #name").val();
                    userpassword = $(".modal-body #password").val();
                    userwebsite = $(".modal-body #website").val();
                    userhint =  $(".modal-body #hint").val();


                 userEdittedData = [userid,userpassword,userwebsite,userhint];


            console.log("Her")

         performEditOperation(uniqueKey,userEdittedData,'user');


            $("#myEditModal").modal('hide');
    });





 }






        console.log(userDate)
          userRowNumber.appendChild(document.createTextNode(count));
          userNameRow.appendChild(document.createTextNode(userName));
          userPasswordRow.appendChild(document.createTextNode(userPassword));
          userWebsiteNameRow.appendChild(document.createTextNode(userWebsite));
          userHintRow.appendChild(document.createTextNode(userHint));
         userDateRow.appendChild(document.createTextNode((userDate)));

           userRowNumber.width='25px';
           userNameRow.width='175px';
           userPasswordRow.width='175px';
           userWebsiteNameRow.width='175px';
           userHintRow.width='175px';
           userDateRow.width='175px';

            userRow.appendChild(userRowNumber);
            userRow.appendChild(userNameRow);
            userRow.appendChild(userPasswordRow);
            userRow.appendChild(userWebsiteNameRow);
            userRow.appendChild(userHintRow);
           userRow.appendChild( userDateRow);



            userRowNumber.width='100px';

            userActionButton = document.createElement('td');

           userActionButton.width ='150px';

           userActionButton.appendChild(deleteRecord);

           userActionButton.appendChild(editRecord);

         userRow.appendChild(userActionButton);


         createUserTable.appendChild(userRow);
         createTablebody.appendChild(createUserTable);

        userTable.appendChild(createTablebody);



}




function createTableHeader(){


    var userRowNumber,userTable,userRow,createTable,userNameRow,userWebsiteRow,userPasswordRow,userHintRow,userDateRow;
    var userDeleteButton,deleteRecord,userEditButton,editRecord;


      userNameRow = document.createElement('th');

 /*

          userNameRow.onclick = function(){




             var userData = [];
             var dataSource = []
             var table = $("table ");



            table.find('tr').each(function (i) {

                var $tds = $(this).find('td'),


            username = $tds.eq(1).text();
            userpassword = $tds.eq(2).text();
            userWebsite = $tds.eq(3).text();
            userHint = $tds.eq(4).text();
            userDate = $tds.eq(5).text();
            userImg = $tds.eq(6).text();


              userData = [ username,userpassword, userWebsite,userHint, userDate,userImg];



    });


      document.getElementById("tbodyid").innerHTML = "";
                createSortedTable(dataSource);

          }

   */

          userTable = document.getElementById('usertable');
          createTable = document.createElement('Table');
          createTable.id='headertable';
          createTable.class='tablesorter';
          createTable.style.borderColor="black";



          userRow=document.createElement('tr');
          userDeleteButton = document.createElement('th');
          userEditButton = document.createElement('th');

          userRowNumber = document.createElement('th');
          userNameRow = document.createElement('th');
          userPasswordRow = document.createElement('th');
          userWebsiteRow = document.createElement('th');
          userHintRow  = document.createElement('th');
          userDateRow  = document.createElement('th');





          userRowNumber.appendChild(document.createTextNode("No."));
          userNameRow.appendChild(document.createTextNode("User Name"));
          userPasswordRow.appendChild(document.createTextNode("User Password"));
          userWebsiteRow.appendChild(document.createTextNode("User Website"));
          userHintRow.appendChild(document.createTextNode("User Hint"));
          userDateRow.appendChild(document.createTextNode("Last Update"));



           userDeleteButton.appendChild(document.createTextNode("Action"));

           userRowNumber.width='25px';
           userNameRow.width='175';
           userPasswordRow.width='175';
           userWebsiteRow.width='175';
           userHintRow.width='175';
           userDateRow.width='175';

           userDeleteButton.width='175px';
           userEditButton.width='175px';

          userRow.appendChild(userRowNumber);
           userRow.appendChild(userNameRow);
           userRow.appendChild(userPasswordRow);
           userRow.appendChild(userWebsiteRow);
           userRow.appendChild(userHintRow);
           userRow.appendChild(userDateRow);

           userRow.appendChild(userDeleteButton);







            createTable.appendChild(userRow);

        userTable.appendChild(createTable);



}



function resetStaticCount(){

    staticCount().count = 0;

}

/*===================================================DELETE USER RECORD=========================================================*/



function deleteData(userData) {




    var flag = null;
  var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));



              flag = confirm("Do you want to delete");


                    if(flag){

                 //path = JSON.parse(userRemoteID);



                      deleteUserRecord("user",userData,db);



                    }





}


function deleteUserRecord(userTable,userId,db){


 remoteStorage.bicnSystCorp.removeUserData(userId);

     db.remove(userTable,userId).done(function(x) {

                reloadTable();

 });
}


 function deleteUserProfileRecord(userTable,recordKey,dbConnectionObject){

     dbConnectionObject.remove(userTable,recordKey).done(function(x) {

  });


}


function addRecord(userTable,userObject,dbObject){

  var userProfile = sessionStorage.getItem('databaseName');


  var userFolderName ="Records";

  remoteStorage.bicnSystCorp.init(userProfile+"/"+userFolderName);

  remoteStorage.bicnSystCorp.addUserData('Data',userObject.userdate,userObject);


     dbObject.put(userTable,userObject).done(function(x) {

          console.log("Inside add record")

                  });


}



/*===================================================RELOAD  USER RECORD=========================================================*/


function clearTable(){


     document.getElementById('usertable').innerHTML="";

}




function getArrayOfData(userData,userProperty){


    var items = 0;
    var dataItem = [];
    var userDateRow = {};

    for(items = 0;items < userProperty.length;items++ ){

        if(userProperty[items] == 'date'){



        dataItem [items] = (userData[userProperty[items]]);


        }
        else{

        dataItem [items] = (userData[userProperty[items]]);

        }

    }

    return dataItem;



}




function reloadTable(){



  var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
  var dataItem = [];

  var dataSource = [];
   var userArray=['userid','userpassword','userwebsite','userhint','date','userdate'];

     var userKey = getSessionPassword();

   var userDisplayArray=[["userid","userpassword","userwebsite","userhint","date","userdate"]];

  document.getElementById('usertable').innerHTML="";

syncRemoteStorage();

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


 var df = db.values('user');

  df.done(function (items) {

    var n = items.length;

    if(n){


     createTableHeader();

    for (var i = 0; i < n; i++) {

     userData = decryptUserData((items[i]),userArray,userKey);
     console.log(userData)
     createTable( i + 1 ,userData.userid,userData.userpassword,userData.userwebsite,userData.userhint,userData.date,userData.userdate);


    }
    }
else{

    document.getElementById('usertable').innerHTML = "No Records Found ";


    }




  } );

  df.fail(function (e) {
    console.error(e);
  });







}



function displaySortedData(dataSource,timestamp){

     $(document).ready(function() {

  $('#example').DataTable( {
        responsive: true,
        "bJQueryUI": true,
         "destroy": true,
        data: dataSource,
              columns: [
                        { title: 'Name',  className: "center", },
                        {title: 'Password' ,  className: "center",},
                        { title: 'Website',  className: "center", },
                        {title: 'Hint',className: "center", },
                       {title: 'Date',className: "center", },


                         {
                         title : 'Action',
                         default :-1,
                      className: "center",
                "defaultContent": "  <input type= 'button'  class = 'editButton' id = 'editButton'> </input><input type= 'button' id='deleteButton' class = 'deleteButton' > </input>"


                        }

                     ,
                        /*

                         {
                            render: function(o, type, data) {
                return "<a class='md-btn' onClick='deleteData(this, &quot;" + timestamp + "&quot;)'>Delete</a>";
             }
        },*/



                ],







    });




     $('#example').on('click', 'input.editButton', function (event) {

     var table = $('#example').DataTable();

     var dataSelected = table.row( $(this).parents('tr') ).data();

     var oldKey = dataSelected[0];



      generateEditForm(dataSelected[0],dataSelected[1],dataSelected[2],dataSelected[3],userKey,uniqueKey);

      //remoteStorage.bicnSystremoveData(previoususerData.userName);

   dataSelected.length = 0;


    } );






    });











}
















function selectedButton(choice,object){


    if(choice == 'editButton'){

    }

    if(choice == 'deleteButton'){


    var dataSelected = [];
    var table = $('#example').DataTable();


 /*
$('#example tbody').on( 'click', 'td', function () {

     var userKey = getSessionPassword();
   dataSelected.push(table.cell( this ).data())

       var userDate = new Date(dataSelected[4]);
     userDate =  userDate.getTime();

            console.log("asd"+ userDate)
         deleteData( dataSelected[4].getTime());

    dataSelected.length = 0;


} );
   */



    }



}






/*===================================================GET USER RECORD=========================================================*/




function getRecord() {

        //$('#example').destroy();

reloadTable();
  document.getElementById("usertable").innerHTML = "";

     document.getElementById("example").innerHTML = "";
  document.getElementById("demo").innerHTML = "";


 //createTableHeader();
   // setPaging();
    //addSortOption();


}










function dbClear() {

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
var flag;

flag = confirm("All Data Will Be Lost Are You Sure ?")

    if(flag){


          db.clear('user').done(function() {


            reloadTable();

  });

    }





}



/*===================================================SEARCH USER RECORD=========================================================*/

function searchRecord (){


     var userDate = null;
    userDate = prompt("enter Date to be searched ");

    createTableHeader();



}




/*===================================================EDIT USER RECORD=========================================================*/



/*
function performEditing(previousRecordKey,userRecord,tableName){

    console.log("Here in perform editing ")

    var userData =  [];

    var  userDate = new Date().getTime();

    var userKey =  getSessionPassword();

    var propertyNameArr =["userid","userpassword","userwebsite","userhint"];


     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


     db.executeSql("select * from setting").then(function(data){

       var record = data[0].checkbox;




      for(var rowCount = 0 ;rowCount < record.length ; rowCount++){


        if(record[rowCount][0]){



                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])



                        switch(userInput){


                            case 0 :
                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));


                                         }
                                        else{

                                                 document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));



                                        }

                                        break;


                            case 1 :

                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = performEncryption(userRecord[rowCount],userKey);

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

                                        break;


                            case 2 :




                                          if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{

                                                document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]="";



                                        }




                                        break;


                             case 3 :

                                           if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);;



                                        }

                                        break;





                            default :
                            break;


                        }


        }

        else{


                                           if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

        }


}




console.log("========Done Editing==============")
console.log(userData)
      if(verifyUserData(userData)){

    console.log("User Record Data")



             var obj = getUserDataObject(userData,propertyNameArr);

            obj = createSensitiveEncryptedObject(obj,propertyNameArr,userKey)
            console.log("===========================editedData===================")
            console.log(userDate)

            obj['userdate'] = userDate;
             obj['date'] = epochToDate(userDate);


            remoteStorage.bicnSystCorp.addUserData('Data',obj.userdate,obj);

              db.put(tableName,obj).done(function(x) {

             });



          window.setTimeout(function(){ clearTextBoxValue() },1000);

      }
      else{



          window.setTimeout(function(){ clearFileds() },1000);


      }




});
//    document.getElementById('userTable').innerHTML="";

}
*/

function performEditOperation(previousRecordKey,userData,tableName){

var flag =confirm("Do you want to edit data ?")

       if(verifyUserData(userData) && flag){


             var userDate = new Date();

             var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

             var userKey =  getSessionPassword();

             var propertyNameArr =["userid","userpassword","userwebsite","userhint"];

             var obj = getUserDataObject(userData,propertyNameArr);



            obj = createSensitiveEncryptedObject(obj,propertyNameArr,userKey)

            obj['userdate'] = userDate.getTime();

             obj['date'] = epochToDate(userDate.getTime());


            remoteStorage.bicnSystCorp.editUserData(obj.userdate,obj);


              db.put(tableName,obj).done(function(x) {

            });

            deleteUserRecord(tableName,previousRecordKey,db);

          window.setTimeout(function(){ clearTextBoxValue() },1000);

      }
      else{



          window.setTimeout(function(){ clearFileds() },1000);


      }

}








function setData(userData,userId){

var items = 0;



for(items = 0 ;items < userId.length; items++){


    document.getElementById(userId[items]).value = userData[items];







}






}





/*===================================================EDIT USER RECORD=========================================================*/




function validateUserData(userDataObject,results,userEncryptionKey,userDataProperty){

    var flag = 0;


   results = decryptUserData(results,userEncryptionKey,userDataProperty);

   userDataObject = decryptUserData(userDataObject,userDataProperty,userEncryptionKey);



    console.log(results);


console.log(userDataObject);

    if(userDataObject){



    for(var items = 0; items <  userDataProperty.length ; items++){


  console.log( results[userDataProperty[items]]);

    console.log(userDataObject[userDataProperty[items]]);

            if(results[userDataProperty[items]] == userDataObject[userDataProperty[items]]){


                        flag = 1;



            }
            else {



                flag = 0 ;
                break ;
            }



    }


    }

else{


    flag = 0;


}

    return flag;


}


/*=================================================== User  Plain Object  Function =========================================================*/




function getUserDataObject(userData,propertyNameArr){

var userDataArr =[];
      console.log("her"+ userData)

     userDataArr = userData;

  var userDataObject = {};

  var items = 0;


    for(items = 0; items < propertyNameArr.length; items++){


         userDataObject[propertyNameArr[items]] = userDataArr[items];


    }


    return userDataObject;




}


/*=================================================== User Encrypted Object Function =========================================================*/


function getEncryptedUserObject(userName,userPassword,userWebsite,userHint,userDate,userKey){



  var propertyNameArr = ["userid","userpassword","userwebsite","userhint","date","userdate"]
  var userDataArr = [userName,userPassword,userWebsite,userHint,userDate];
  var userDataObject = {};
  var items=0;

   var  userEncryptionKey = userKey ;

    console.log( userEncryptionKey)

    userDataArr = encryptedUserData(propertyNameArr, userDataArr,userEncryptionKey);


console.log(userDataArr)

    for(items = 0; items < propertyNameArr.length; items++){



         userDataObject[propertyNameArr[items]] = userDataArr[items];


    }
    console.log(userDataObject);

    return userDataObject;


}
























/*=================================================== Clear Function=========================================================*/




function clearFileds(){


     var userID = ['username','userpassword','userwebsite','userhint'];

     for(var numberOfItem = 0 ; numberOfItem < userID.length ; numberOfItem++){




          var item = document.getElementById(userID[numberOfItem]);

          if(item.value == "Cannot Be Empty"){

          item.value = "";
          item.style.color = "black";


          }


      }



}


function clearTextBoxValue(){


     var userID = ['username','userpassword','userwebsite','userhint'];

     for(var numberOfItem = 0 ; numberOfItem < userID.length ; numberOfItem++){




          var item = document.getElementById(userID[numberOfItem]);



          item.value = "";
          item.style.color = "black";




      }



}




















/*=================================================== Validation Of User Data   Function=========================================================*/


 function validateData(){

    var userID=['username','userpassword','userwebsite','userhint'];
    var count = 0;
    var placeHolder,item;
    var numberOfItem;

    for(numberOfItem = 0 ; numberOfItem < userID.length ; numberOfItem++){

          placeHolder = document.getElementById( userID[numberOfItem]).placeholder;

           item = document.getElementById(userID[numberOfItem]);



            if ( item.value == null || item.value == '' ){



                 count = count + 1;

                 item.value = 'Cannot Be Empty';
                 item.style.color = "red";

            }




      }

       //item.style.color = "black";

   if(count == 0){


                return 1;
                 //item.style.color = "black";

            }
            else{


                  return ;

            }




 }

function setFont(){


     document.getElementById("userdetail").style.Color = "black";


}




 /*=================================================== Encryption   Function =========================================================*/












 function encryptedUserData(userProperty,userData,userEncryptionKey){



   var items = 0;
   var userDataObject = [];


   console.log(userData);


      for(items = 0; items < userProperty.length; items++){



                 if(userProperty[items] !== "date"){

                     userDataObject[items] = encryptData(userData[items],userEncryptionKey);
                 }
                 else{

                     userDataObject[items] = userData[items];

                 }

    }




    console.log( userDataObject);

  return userDataObject;

 }



 function encryptedUserInfoData(userProperty,userData,userEncryptionKey){



   var items = 0;
   var userDataObject = {};


   console.log(userProperty);
   console.log(userData);


      for(items = 0; items < userProperty.length; items++){



            if(userProperty[items] !== "date"){

                     userDataObject[userProperty[items]] = encryptData(userData[userProperty[items]],userEncryptionKey);
            }
            else{


             userDataObject[userProperty[items]] = userData[userProperty[items]]

    }


      }



  return userDataObject;

 }


 /*=================================================== Decryption   Function=========================================================*/







function getObjectKey(){


/*
  db.open(function(icursor) {
  var player = icursor.getValue();
  var key = icursor.getKey();
  var primary = icursor.getPrimaryKey();


  });



    console.


    var keyName = [];

    db.keys('user').then(function(keys) {

        db.values('user').then(function(results){
     console.log(results.getKey(0));

        });

}, function(e) {
  throw e;
});
*/


}





 function decryptAllData(userData,userKey,userArray){




         var userDecryptedData = {};
          var userEncryptionSetting ;

         for(var items = 0; items < userArray.length ; items++){



                     if(userArray[items] == "date"){


                           userDecryptedData[userArray[items]] = userData[userArray[items]];

                     }

                     else{
                        console.log("000000000000000000000000000000000");
                          var userDecryptedData = decryptData(userData[userArray[items]],userKey)
                          userDecryptedData[userArray[items]] = userDecryptedData.replace(/^"(.*)"$/, '$1');




                     }







         }

         return userDecryptedData;



 }




 function decryptUserAllData(userData,userArray,userKey){

   console.log(userData)
   console.log(userArray)
   console.log(userKey)
         var userDecryptedData = [] ;
          var userEncryptionSetting= "" ;

         for(var items = 0; items < userArray.length ; items++){


            userDecryptedData[items] = decryptUser(userData[userArray[items]],userKey);


}



         return userDecryptedData;


 }


function decryptDatabaseData(userData,userArray,userKey){





         var userDecryptedData =[];
          var userEncryptionSetting ;

         for(var items = 0; items < userArray.length ; items++){





                     if(decryptData(userData[userArray[items]],userKey) == ""){


                           userDecryptedData[items] = userData[userArray[items]];


                     }

                     else{


                          userDecryptedData[items] = decryptData(userData[userArray[items]],userKey);




                     }


                     }









         return userDecryptedData;



 }




function getUserDateFormatChoice(setting ){


    switch(setting){


        case "DD/MM/YYYY" :


            return 1;
            break;

        case  "YYYY/MM/DD" :


            return  2;

        break;

         case  "MM/DD/YYYY" :


            return  3;

        break;


        default :

        return 1;

              break;

    }





}






function epochToDate(userEpochDate){

    var choice;
    var  userDateSetting = [];

    var userDate = new Date(userEpochDate);

    var userDateRow = "";

      userDate =  properDate(userDate.getDate()) + "/" + properDate(userDate.getMonth() + 1)  +"/" +userDate.getFullYear();


    userDateRow = userDate;







/*
    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

     db.executeSql("select * from setting").then(function(result){


       userDateSetting = result[0].dateFormat;






    });


    console.log( userDateSetting);
    choice = getUserDateFormatChoice(userDateSetting);



    switch( choice){

     case  1 :

                userDate =  properDate(userDate.getDate()) + "/" + properDate(userDate.getMonth() + 1)  +"/" +userDate.getFullYear();

               userDateRow = (userDate);

        break;

    case  2 :

                userDate =  userDate.getFullYear() + "/" + properDate(userDate.getMonth() + 1) +'/' +properDate(userDate.getDate())  ;

               userDateRow= (userDate);
        break;


         case  3 :

                userDate =  properDate(userDate.getMonth() + 1) +"/"+  properDate(userDate.getDate()) +"/" +userDate.getFullYear();

               userDateRow= (userDate);

        break;



        default :

                userDate =  properDate(userDate.getDate()) + "/" + properDate(userDate.getMonth() + 1)  +"/" +userDate.getFullYear();


               userDateRow = (userDate);

        break;


    }








*/









    return   userDateRow ;


}






function properDate(userEnteredDate){



    if(userEnteredDate < 10){



        return '0' + userEnteredDate;


    }
    else{

        return userEnteredDate ;

    }




}






/*=================================================== Pagination   Function=========================================================*/




function pagination(){




}










/* Encryption  Of Records */





/*=================================================== Generate Key    Function=========================================================*/


function generateKey(){

    var userName = [];
    var userNameLenght = 0;
    var keySize = 16;
    var userKey =[];
    var count = 0;
    var iteration = 0;
    var  masterPassword ;
    var  promptValue = "Enter Key here";


            masterPassword = prompt('Enter your value for  key ',promptValue);


            userName = masterPassword;


           if( masterPassword  == null ){


               alert("Cancel presed ");


               close();

           }


           if(  masterPassword == promptValue){

                 keyCount = staticCount();

                  if(keyCount < 3) {


                        alert("Your Attempt Made "+keyCount);
                        loadDb();

                   }
                    else{


                              window.close();


               }



           }








if(masterPassword !== 'null' || masterPassword === ''){


     userNameLenght = userName.length;


    for(var items = 0;items < keySize; items++) {

             if(count !== userNameLenght) {


                   userKey[items] = userName[count++];



             }
        else {
               count = 0;
                userKey[items] = userName[count];


            }


    }




               userKey = userKey.join('');



            if(userKey !==''){


               userKey =  generateHashKey(userKey)

               userKey = userKey.toString();



                 return userKey;

          }
           else{

                      var keyCount = staticCount();

                  if(keyCount < 3) {


                        alert("Your Attempt Made "+keyCount);
                        return userKey;
                   }
                    else{


                              window.close();


               }








}

}



}

/*=================================================== MD5 HASH   Function=========================================================*/




function getMd5Hash(){


   var name = document.getElementById("name").value;

     generateHashKey(name);

}







/*=================================================== Validation Of User Data   Function=========================================================*/


function returnProperty(value){


    var propertyName = ["userid","userpassword","userwebsite","userhint","date","userdate"];




    for(var items = 0;items <propertyName.length ; items++){
         if(value == items){

             return propertyName[items];

         }

    }







}


function staticCount(){




    staticCount.temp  = ++ staticCount.temp || 1;



    return    staticCount.temp ;
}













/*=================================================== Retrive password stored inSession  Function=========================================================*/


function getSessionPassword(){

 return sessionStorage.getItem('userKey');


}





function removeSessionPassword(){

  sessionStorage.clear();
}

/*=================================================== Session Exit   Function=========================================================*/

function exit(){

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 db.close();
removeSessionPassword();
  db.close();

   close();




}

/*=================================================== Validation Of User Data   Function=========================================================*/

function checkRefresh(){

     userEncryptionKey  = sessionStorage.getItem('userKey');
  if (sessionStorage.clickcount) {



    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));



    setDefaultSetting();

    setUserProfile();


} else {


   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));



          setCurrentSetting();
    sessionStorage.clickcount = 0;



        loadDb();

}


}


/*=================================================== Validation Of User Data   Function=========================================================*/

function generateCurrentDate(){




    var curDate = new Date();

   var  currentDay = curDate.getDate();
   var currentMonth = curDate.getMonth();
   var currentYear = curDate.getFullYear();


    console.log(curDate.getTime());

    var  date = new Date(currentYear,currentMonth,currentDay);



 return date.getTime();





}


function getEpochDate(userDate){










}





function covertToTwoDigit(userDate){



    if(userDate < 10){

         userDate  = "0" + userDate.getDate();

    }




}
/*=================================================== Check  for property   Function=========================================================*/


function checkProperty(userNameProperty){





    if(userNameProperty == "website"){


        return false;

    }
    if(userNameProperty == "date"){

        return false;


    }

   return true

}




/*=================================================== Date    Function=========================================================*/







function checkLeapYear(userYear){



    if( userYear % 4 == 0){




        return true;

    }

    else{


        return  false;

    }




}






function getUserDataByDates(userDay,userMonth,userYear,property){



    var curDate= new Date();
    var year,month,day;
    var currentDate  =  curDate.getDate();
    var currentMonth = curDate.getMonth() + 1;
    var currentYear  = curDate.getFullYear();
    var userDate ;
    var numberOfDays;




for(year = userYear ; year <= currentYear ; year++ ){


    for(month = userMonth ; month <= currentMonth ; month++){



               numberOfDays = daysInMonth(month,year);


              for( day = userDay ; day <= numberOfDays ; day++){




                      userDate = day+"/"+month+"/"+year;



                       serachByUserRecord(userDate,property);



                }


                userDay = resetDate();


         }



    }







}





function resetDate(){


    return 1;


}









function  checkForLeapYear(userYear){


    if(userYear % 4 == 0 ){


        return true;


    }
    else{


        return false ;
    }





}

function toDate(userDate,dateFormat){


     var newDate = userDate.split("/");


    return new Date(newDate[2], newDate[1] - 1, newDate[0]);


}


/************************************************* Search By User Selected Data  *******************************************************/

function searchUserRecordByDate(){


   $(function() {

       // Set date picker to date input text box
          $("#tospecifieddate" ).datepicker({

              dateFormat: 'dd/mm/yy'
           });


    $("#fromspecifieddate" ).datepicker({

        dateFormat: 'dd/mm/yy'

           });

    $( "#fromdate" ).datepicker({

         dateFormat: 'dd/mm/yy'

         });
});


       $("#searchRecordModal").modal();



  $('#selectedType').on("click", function () {


       if($("#selectedType").val()){

           // Get Modal name of elected textbox.

           var $modalName = $("#selectedType").val();

            $modalName = $modalName.replace(/ /g, "");



        console.log($modalName);

        if($modalName == 'SearchByWebsiteName'){

               $('#SearchByWebsiteName').modal();
        }

         if($modalName == 'SearchByDate'){

               $('#SearchByDate').modal();
        }

         if($modalName == 'SearchByDateRange'){

               $('#SearchByDateRange').modal();
        }


         // $("#searchRecordModal").modal('hide');


       }


          $(' #fromdate').datepicker({


               dateFormat: 'dd/mm/yy',



          });


          $(' #tospecifieddate').datepicker({


               dateFormat: 'dd/mm/yy',



          });

          $('#fromspecifieddate').datepicker({


               dateFormat: 'dd/mm/yy',



          });

    });

    /*************   searchbywebsite *************/


   $(document).on("click", ".modal-footer #searchbywebsite", function () {

         var websiteName  = $(".modal-body #searchbywebsitename").val();

                    serachByUserEnteredData(websiteName);
                    $(".modal-body #searchbywebsitename").val("");
                   $("#SearchByWebsiteName").modal('hide');
                    $("#searchRecordModal").modal('hide');

   });

   /*************   searchbydate *************/


  $(document).one("click", ".modal-footer #searchbydate", function (event) {

  console.log("Clicke me")


 var fromDate  = $(".modal-body #fromdate").val();

        fromDate = toDate(fromDate);

                  getRecordByDates(fromDate,fromDate);

                  $(".modal-body #fromdate").val("");
                    $("#SearchByDate").modal('hide');
                    $("#searchRecordModal").modal('hide');



  });


 /************* searchbyrange *************/

 $(document).one("click", ".modal-footer #searchbyrange", function (event) {

   console.log("Clicke me")

 var fromUserDate  = $(".modal-body #fromspecifieddate").val();


 var toUserDate  = $(".modal-body #tospecifieddate").val();



    searchByDateRange(fromUserDate,toUserDate)
              $(".modal-body #fromspecifieddate").val("");
                $(".modal-body #tospecifieddate").val("");
                   $("#SearchByDateRange").modal('hide');
                  $("#searchRecordModal").modal('hide');

   });


}






function searchByDateRange(userStartDate,userEndDate){

     var  currentDate = new Date();

     document.getElementById("usertable").innerHTML = "";

        document.getElementById("example").innerHTML = "";
     document.getElementById("demo").innerHTML = "";


           //   inputType.innerHTML = "FROM DATE = "+ setDate(userStartDate) +"     "+" TO DATE = " +setDate(userEndDate);





               var  value = validateByDates(userStartDate,userEndDate);



                switch(value) {



                    case 1 :
                                     console.log(0)
                                    createTableHeader();
                                 reloadTable();




                                break;

                    case 2 :
                          console.log(2)

                          userStartDate = toDate(userStartDate);

                         userEndDate = currentDate;

                                 createTableHeader();


                                   //inputType.innerHTML = "FROM DATE = "+setDate(userStartDate) +"    "+" TO DATE =" +setDate(currentDate);

                                    if(userStartDate >  userEndDate){

                                        alert("Your from date is greater then current to date")

                                    }else{
                                          getRecordByDates(userStartDate,userEndDate);

                                        }



                                break;


                    case 3 :
                          console.log(3)
                                 createTableHeader();

                                  userEndDate = toDate(userEndDate);

                                    var getDay = "01";
                                    var userNewDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),getDay);

                                    // userNewDate =(userNewDate);
                                    console.log(userNewDate)
                                      console.log(userEndDate)
                                    //inputType.innerHTML = "FROM DATE = "+ setDate(userNewDate)+"    "+" TO DATE =" +setDate(userEndDate);

                                    if(userEndDate >  userNewDate){

                                     getRecordByDates(userNewDate,userEndDate);
                                   }
                                   else{

                                      alert("Your to date is smaller that  current from date")
                                   }

                                break;



                     case 4 :
                        console.log(4)

                                    createTableHeader();

                                     userStartDate = toDate (userStartDate);

                                     userEndDate = toDate(userEndDate)

                                     if(userStartDate < userEndDate){
                                      getRecordByDates(userNewDate,userEndDate);
                                    }
                                    else{


                                          alert("Your from date is greater then to date");

                                    }

                                break;

   default :
   break;


}







}








function setDate(userDate){

   var dateString = null;

    if(userDate)
    {
        userDate =  new Date(userDate);

        dateString = userDate.getDate()+"/"+(userDate.getMonth() + 1) +"/"+userDate.getFullYear();

    console.log( dateString);

      return dateString;
    }
    else{


        return "empty";

    }

}
function validateEqualDate(startDate,endDate){



     if(startDate !== endDate){


        return false;
        }

      else{

          return false;

    }






}

function validateByDates(startDate,endDate){


  if(!checkDate(startDate) && !checkDate(endDate)){


      return 1;

  }
   if(checkDate(startDate) && !checkDate(endDate)){

      return 2;

  }


   if(!checkDate(startDate) && checkDate(endDate)){


      return 3;

  }


   if(checkDate(startDate) && checkDate(endDate)){


      return 4;

  }



}




function checkDate(userDate){


    if(userDate){


        return true;


    }
    else{


        return false;

    }



}


function getchoice(choice){


    if( choice == "By Website Name"){


        return choice;
    }

        if(choice == "By Dates"){

          return choice;
        }

         if(choice == "By Date Range"){


          return choice;
        }




}










function validateDate(startDate,endDate){


    if(startDate <= endDate){

        return true;


    }
    else{

        return false;

    }






}




function validateMonth(startMonth,endMonth){


    if(startMonth <= endMonth){

        return true;


    }
    else{

        return false;

    }






}





function validateYear(startYear,endYear){


    if(startYear <= endYear){

        return true;


    }
    else{

        return false;

    }






}




function searchByLike(userWebsiteName,recordWebsiteName){



    var matchPattren = new RegExp(userWebsiteName);


    if(matchPattren.test(recordWebsiteName))
    {
      return true;


    }

    else{


        return false;

    }

}





/******************************************************* Search By User Entered Data ***********************************************************************/

function serachByUserEnteredData(websiteName){

console.log("serachByUserEnteredData");


console.log(websiteName)


    //  Create connection object.

   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

   //

    var userArray=['userid','userpassword','userwebsite','userhint','date','userdate'];

    // Get Password from remote storage.

     var userKey = getSessionPassword();

   // Set value of count.

    var count = 0;

    // Check for empty.

  if ( websiteName) {


    //
      db.executeSql('SELECT * FROM user ').then(function(results){

    // Set number of records inisde database.

      var records = results.length ;

  document.getElementById("usertable").innerHTML = "";

     document.getElementById("example").innerHTML = "";
  document.getElementById("demo").innerHTML = "";



//Create Header.

createTableHeader();








    // Check if records exist.


      if(records){

              for(var numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {

                        // Store object to variable.

                          var userData =results[numberOfItem];

                        // Check for flag which return true on match o parent

                           var  flag = searchByLike( websiteName,userData.userwebsite);




                          console.log(flag)

                            if(flag){



                                 if(userData.userwebsite){

                                        count = count + 1 ;

                                            userData = decryptUserData(userData,userArray,userKey)

                                           createTable( count,userData.userid,userData.userpassword,userData.userwebsite,userData.userhint,userData.date,userData.userdate);


                                       // dataSource.push(getArrayOfData(userData,userArray));




                                   }

                       }


                     }


        if(count == 0){



            document.getElementById("usertable").innerHTML="No Match Found For Record";

        }
        else{

            //displaySortedData(dataSource)

        }




      }

      else{


           document.getElementById('usertable').visibility = "hidden ";
           document.getElementById('usertable').innerHTML = "Record Not Found";


      }




}, function(e) {

  throw e;


});



  }







}







        function daysInMonth(userMonth,userYear) {

    return new Date(userYear, userMonth, 0).getDate();

}




function getRecordByDates(startDate,endDate){


  console.log(typeof startDate+""+endDate);
var  userData = {};
var  userDate;
var property = "date";
var records;
var count=0;
 var userArray=['userid','userpassword','userwebsite','userhint','date',"userdate"];
var userEncryptionKey =  getSessionPassword();
var dataSource = [];

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


  document.getElementById("usertable").innerHTML = "";

     document.getElementById("example").innerHTML = "";
  document.getElementById("demo").innerHTML = "";




createTableHeader();

      db.executeSql('SELECT * FROM user ').then(function(results){


          records = results.length ;


                   if(records){



                              for(var numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {



                                        userData  = results[numberOfItem];


                                       userDate = new Date(userData.userdate);


                                         userDate = new Date(userDate.setHours(0,0,0,0));


                                      console.log(typeof startDate)
                                        console.log(typeof userDate)
                                          console.log(typeof endDate)

                                        if(startDate <= userDate &&   userDate  <= endDate ){

                                          count = count + 1 ;


                                             userData  = decryptUserData(results[numberOfItem],userArray,userEncryptionKey);

                                            createTable( count ,userData.userid,userData.userpassword,userData.userwebsite,userData.userhint,userData.date,userData.userdate);



                                       }



                         }


                     if(count){


                     }
                 else{

                      isemptyTable();
                 }



     }
     }, function(e) {

  throw e;


});








}




function isemptyTable(){


                           document.getElementById("usertable").style.fontSize = "xx-large";
                           document.getElementById("usertable").innerHTML=" NO RECORD FOUND";

}













function addSortOption(){


    var addOnWindow = document.getElementById('demo');
    var sortOption =  document.createElement('Select');
    var items = 0;

      document.getElementById("usertable").innerHTML = "";
  document.getElementById("demo").innerHTML = "";



    var sortFieldName  = ["Sort By Name","Sort By Old To New Date","Sort By New To Old Date"];


     sortOption.id ="sort";

    for(items  = 0 ;items < sortFieldName.length ; items++){


        var option =  document.createElement("option");


          option.value = sortFieldName[items];


        option.appendChild(document.createTextNode(sortFieldName[items]));


          sortOption.appendChild(option);



         sortOption.onclick = function(){


             sortBy(this.value);



         }



    }


   addOnWindow.appendChild(sortOption);





}





 function sortBy(value){



        if(value == "Sort By Name"){


            getRecord();

        }



     if(value = "Sort By Old To New Date"){

           sortOldDate();
     }



     if(value = "Sort By New To Old Date"){


         sortNewDate()
     }




 }



function sortedDataByDate(){


var  userData = {};
var  userDate;
var property = "date";
 var records;
var count=0;
var dateCount = 0;
var startDate,userDate;
var sortedArray = [];

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 var userArray=["userid","userpassword","userwebsite","userhint","date","userdate"]

document.getElementById("usertable").innerHTML="";

//createTableHeader();

      db.executeSql('SELECT * FROM user ').then(function(results){


          records = results.length ;


                   if(records){



                              for(var numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {







                                        userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                                         userDate = new Date(userData.date);

                                       for(var numberOfRecords = numberOfItem + 1 ; numberOfRecords < results.length ; numberOfRecords++) {



                                        userData  = decryptAllData(results[numberOfRecords],userEncryptionKey,userArray);

                                        startDate = new Date(userData.date);




                                        if(startDate != userDate ){








                                        }



                                       }
                              }

                   }





    }, function(e) {

  throw e;


});











}









    function dbsort(){

         var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
        db.from('user').order('date').list(10).done(function(records) {

});

    }







/*=================================================== Setting function =========================================================*/





    function userSetting(){

    $('#settingmodal').modal('show');


$(document).on('click','.modal-footer #savesetting',function(){


userSettingWindow();




    });


}



    function displayPreviousSetting(userTable,settingDiv,settingPopUp,selectDateFormat,selectPagination,save,cancel){


   var settingField = ["Name", "Password","Website","Hint"];
   var settingFieldId = ["Display", "Mandatory","Encryption"];
   var  checkedFields,settingRow;

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

    db.executeSql("Select * from setting").then(function(data){

        checkedFields = data[0].checkbox ;

        if(checkedFields){

            for(var item=0; item < settingField.length ; item++){

                 settingRow = document.createElement('tr');
                settingRow.style.fontSize = "20"+ "px";
                settingRow.id = settingField[item];
                settingRow.appendChild(document.createTextNode(settingField[item]));

          for(var items = 0 ; items < settingFieldId.length ; items++){

                if( checkedFields[item][items]){

                 settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow);
                }
                else{

                     settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow)


                }

             }

        }


        }
        else{


             for(var item=0; item < settingField.length ; item++){

                 settingRow = document.createElement('tr');
                settingRow.style.fontSize = "20"+ "px";
                settingRow.id = settingField[item];
                settingRow.appendChild(document.createTextNode(settingField[item]));

          for(var items = 0 ; items < settingFieldId.length ; items++){

                if( checkedFields[item][items]){

                 settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow);
                }
                else{

                     settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow)


                }

             }

        }






        }




          settingDiv.appendChild(userTable);

          save.type = 'button';
         save.id = 'save';

          cancel.type = 'button';
         cancel.id = 'cancel';


        //settingRow.style.padding = "10px";



        settingDiv.style.width =  "600px";
        settingDiv.style.height = "500px";

            save.style.marginLeft = 200 +"px";
            save.style.marginTop = 80+"px";
            save.style.display = "block";

            cancel.style.marginLeft = 300 +"px";
            cancel.style.marginTop = -40+"px";
            cancel.style.display = "block";




         settingDiv.appendChild(document.createTextNode("Date Format"));



         settingDiv.appendChild(selectDateFormat);


        settingDiv.appendChild(document.createTextNode("Pagination"));

         settingDiv.appendChild(selectPagination);

         settingDiv.appendChild(save);
         settingDiv.appendChild(cancel);

         document.getElementById('editwindow').style.display = "block";

         settingPopUp.appendChild(settingDiv);








    });



    }




    function getSettingFieldId(){


        var   settingField = ["Name", "Password","Website","Hint"];

        return  settingField;


    }

     function getSettingFieldActivityId(){


        var    settingFieldId = ["Display", "Mandatory","Encryption"];

        return settingFieldId ;


    }

function userSettingWindow(){


  var settingField = ["Name", "Password","Website","Hint"];
  var settingFieldId = ["Display", "Mandatory","Encryption"];
  var settingOption = ["","YYYY/MM/DD","MM/DD/YYYY","DD/MM/YYYY"];


var userSettingObject = document.getElementById('usersettingtable');
var settingObj = [];
var settingObject = {};
var settingObjectKey = {};


//console.log(userSettingObject.rows[1].cells[1].getElementsByTagName('input')[0].checked);
//console.log(userSettingObject.rows[1].cells[2]);
//console.log(userSettingObject.rows[1].cells[3]);

for(var items = 1;items <= settingField.length ;items++){

  settingObj[items-1] = [] ;

for (var indexCheckbox=1 ; indexCheckbox <= settingFieldId.length; indexCheckbox++) {


          if(userSettingObject.rows[items].cells[indexCheckbox].getElementsByTagName("input")[0].checked){


                  //settingObj[items-1][indexCheckbox-1] =true;             //settingObj[settingFieldId[items-1]][settingField[indexCheckbox-1]] = true ;
                //  settingObj[settingField[indexCheckbox-1]] = true ;
                  //settingObject[settingFieldId[items-1]] =  settingObj;

                  settingObj[items-1][indexCheckbox-1] = true ;



             }


             else{

               //settingObj[items-1][indexCheckbox-1] =false;             //settingObj[settingFieldId[items-1]][settingField[indexCheckbox-1]] = true ;

              // settingObject[settingFieldId[items-1]]
               //[settingField[indexCheckbox-1]] = false ;
               settingObj[items-1][indexCheckbox-1] = false ;

               //settingObj[settingField[indexCheckbox-1]] = false ;
               //settingObject[settingFieldId[items-1]] =  settingObj

             }





          }

  //console.log(userSettingObject.rows[items].cells[i].getElementsByTagName('input')[0].checked);


}


//console.log(settingObj)
console.log(settingObj)

if(validateSelectedCheckbox(settingObj)){

 addUserSetting(settingObj,'DD/MM/YYYY',5);
    applyCheckboxSetting(settingObj)
}
/*
for (var i = 0; i < settingField.length; i++) {
console.log("pass"+i)

  for (var j = 0; j < settingFieldId.length; j++) {
  //  console.log("set value"+settingObj[i][j])
  //  settingObjectKey =  new Object();
    settingObjectKey[settingFieldId[j]] = settingObj[i][j] ;
console.log(settingObjectKey);
console.log("Data object")
      settingObject[settingField[i]].push(settingObjectKey);


  }
  //settingObject[settingFieldId[i]] =  settingObjectKey;

}
console.log(settingObject);



for (var i = 0; i < settingFieldId.length; i++) {
//console.log("pass"+i)

  for (var j = 0; j < settingField.length; j++) {
//    console.log("set value"+settingObjectKey[i][j])

    settingObject[settingField[i]] = settingObjectKey[i][j] ;

    //settingObject[settingFieldId[i]] =  settingObjectKey;

  }
  //settingObject[settingFieldId[i]] =  settingObjectKey;

}
console.log(settingObject)
//console.log(userSettingObject.rows[0].cells[1].getElementsByTagName("input")[1])




     var settingDiv,settingField,settingData, settingOption, settingFieldId, settingPopUp,settingData,settingCheckbox ,settingTable,settingRow, settingColumn,save,cancel;
     var  setDateFormat,selectDateFormat,settingDropDownList,selectPagination;
     var userSelectedPaging;
     var checkBoxArray = [];

     settingDiv = document.getElementById('editdiv');
     settingPopUp = document.getElementById('editwindow');
     settingDropDownList = document.getElementById('editwindow');



       settingField = getSettingFieldId();
     settingFieldId =  getSettingFieldActivityId();





     settingField = ["Name", "Password","Website","Hint"];
     settingFieldId = ["Display", "Mandatory","Encryption"];
     settingOption = ["","YYYY/MM/DD","MM/DD/YYYY","DD/MM/YYYY"];


     settingTable =  document.createElement('table');


     settingData = document.createElement('td');


     save =    document.createElement('input');

     cancel =  document.createElement('input');




     var settingObj = [];


    selectDateFormat = addOptionInList(settingOption);
    selectPagination = addPagingOptionInList(settingOption);

    save.type = "button";
    cancel.type = "button";




   removeUserSetting();







     selectDateFormat.onclick = function(){



        setDateFormat = selectDateFormat.value;



     }



     selectPagination.onclick = function(){


                userSelectedPaging = selectPagination.value;


     }

     save.onclick = function(){









         /*



 for(var items = 0; items < settingField.length ; items++){

  settingObj[items] = [] ;

    for(var indexCheckbox = 0; indexCheckbox < settingFieldId.length; indexCheckbox++){



        if(settingTable.rows[items].cells[indexCheckbox].getElementsByTagName("input")[0].checked){





           settingObj[settingField[items]][settingFieldId[indexCheckbox]] = true ;




           }


           else{


            settingObj[settingField[items]][settingFieldId[indexCheckbox]] = false ;

           }





        }




    }
















 for(var items = 0; items < settingField.length ; items++){

  settingObj[items] = [] ;

    for(var indexCheckbox = 0; indexCheckbox < settingFieldId.length; indexCheckbox++){



        if(settingTable.rows[items].cells[indexCheckbox].getElementsByTagName("input")[0].checked){




          // settingObj[settingField[items]][settingFieldId[indexCheckbox]] = true ;

           settingObj[items][indexCheckbox] = true ;




           }


           else{

               // settingObj[settingField[items]][settingFieldId[indexCheckbox]] = false;

            settingObj[items][indexCheckbox] = false ;

           }





        }




    }



if(validateSelectedCheckbox(settingObj)){


    if(selectPagination.value){

            addUserSetting(settingObj,setDateFormat,userSelectedPaging);
            setPaging();


    }
    else{

        userSelectedPaging = 1;
        addUserSetting(settingObj,setDateFormat,userSelectedPaging);


        setPaging();


    }

           document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";
}

else{



     document.getElementById('editwindow').style.display = "inline";




}



}






      cancel.onclick = function(){



          document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";



     }










addTitleSettingTable();

displayPreviousSetting(settingTable, settingDiv,settingPopUp,selectDateFormat,selectPagination,save,cancel);




    // var checkBox =  document.createElement('input');







       // checkBox.value = "Name";





*/

}








  function validateSelectedCheckbox(userCheckboxInput){

      var count = 0 ;
      var  uncheckedFields = [];
      console.log(userCheckboxInput);
      console.log(userCheckboxInput.length)
      for(var rowCount = 0 ;  rowCount  < userCheckboxInput.length ; rowCount++){


          if(userCheckboxInput[rowCount][0] ){


                  //console.log("case with colum "+0)

          }

          else{

            var userInput = validateCheckbox(userCheckboxInput[rowCount][1],userCheckboxInput[rowCount][2])

              //console.log("case with colum"+1)

                        switch( userInput){


                            case 0 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                        count = count + 1 ;


                                        break;


                            case 1 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                        count = count + 1 ;

                                        break;


                            case 2 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                         count = count + 1 ;

                                        break;


                             case 3 :


                                      count = 0;
                                        break;



                            default :
                            break;


                        }


          }



}


      if(count){


        alert("Please Select Display Option For " + uncheckedFields.join());

          return false;

      }
      else{


           return true;


      }








      }














    function displayMandatoryField(fieldName){



        if(fieldName == "Name"){


            return true;

        }

          if(fieldName == "Password"){


            return true;

        }


         return false;

    }






function addCheckBox(settingId,value){

        var settingCheckbox = document.createElement('input');
        var settingData = document.createElement('td');



       if(value){

         settingCheckbox.type = "checkbox";
         settingCheckbox.id = settingId;

        settingCheckbox.checked = true;




            settingCheckbox.onchange = function(){


              if(displayMandatoryField( settingCheckbox.id)){

                    settingCheckbox.checked = true;

             }

         }


           settingData.style.fontSize = "60px";
            settingData.style.fontStyle = "Arial";
           settingData.style.padding = "3px";
           settingData.style.width = "9pc";
           settingData.style.textAlign = "center";
           settingData.style.marginRight = "105px";
          settingData.appendChild(settingCheckbox);
       }

       else{


              settingCheckbox.type = "checkbox";
         settingCheckbox.id = settingId;
         settingCheckbox.checked = false;


           settingData.style.fontSize = "60px";
            settingData.style.fontStyle = "Arial";
           settingData.style.padding = "3px";
           settingData.style.width = "9pc";
           settingData.style.textAlign = "center";
           settingData.style.marginRight = "105px";
          settingData.appendChild(settingCheckbox);

       }



     return settingData;
}



function addTitleSettingTable(){


     var tableHeaderRow,tableHeaderRow,settingTable,settingPopUp ;
    var tableData;


     settingTable =  document.createElement('table');
     tableTitle = ["Fields","Display","Mandatory","Encrypted"];
     settingDiv = document.getElementById('editdiv');
     settingPopUp = document.getElementById('editwindow');

     tableHeaderRow = document.createElement('tr');
     settingTable =  document.createElement('table');
     settingDiv = document.getElementById('editdiv');
     settingPopUp = document.getElementById('editwindow');



  for(var items = 0 ; items < tableTitle.length ; items++ ){

          tableData = document.createElement('td');

          tableData.appendChild(document.createTextNode(tableTitle[items]));

          tableHeaderRow.appendChild(tableData);
  }



        settingTable.appendChild(tableHeaderRow);
        settingDiv.appendChild(settingTable);
        settingPopUp.appendChild(settingDiv);


}



function addOptionInList(optionList){

    var select,items;

    select =  document.createElement("select");
    select.style.marginLeft = 50 +"px";
    select.style.marginTop = 10 +"px";
    select.style.height = 30 +"px";
    select.style.width = 160 +"px";
    for(items = 0 ; items < optionList.length ; items++){


        var optionData  = document.createElement("option");

        optionData.appendChild(document.createTextNode(optionList[items]));

        select.appendChild(optionData);

    }


return select;

}



function addPagingOptionInList(settingOption){


    var select,items,size=25;

    select =  document.createElement("select");
    select.style.marginLeft = 0 +"px";
    select.style.marginTop = 10 +"px";
    select.style.height = 30 +"px";
    select.style.width = 160 +"px";

    for(items = 5 ; items <=  size ; items = items + 5){


        var optionData  = document.createElement("option");

        optionData.appendChild(document.createTextNode(items));

        select.appendChild(optionData);

    }


return select;

}







function addUserSetting(userCheckBoxSetting,userDateFormat,userSelectedPaging){

var db_name = 'setting';

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

userDateFormat = checkDateFromat(userDateFormat);

userSelectedPaging = checkPagingValue(userSelectedPaging);



 var obj  = {

        "checkbox"   :userCheckBoxSetting,
        "dateFormat" : userDateFormat,
         "paging"    : userSelectedPaging

    };


    db.put(db_name, obj , db_name).done(function(){

    });








}



function checkDateFromat(userDateFormat){

      var defaultDateFormat = "DD/MM/YYYY";

    if(userDateFormat){

        return userDateFormat;
    }
    else{


        return defaultDateFormat;
    }



}














function checkPagingValue(paggingValue){


  var defaultPaging = 5;

    if(paggingValue){

        return paggingValue;
    }
    else{


        return defaultPaging;
    }



}






function removeUserSetting(){

  document.getElementById("demo").innerHTML="";


}


function addCurrentPage(pageNumber){


    if(pageNumber){


     addCurrentPage.temp  = pageNumber;

}
else{


      addCurrentPage.temp  = 1;

}




    return   addCurrentPage.temp ;



}

function setPrevButtonDisable(subPagingPrev){


    subPagingPrev.style.display = 'none';
}


function  addPagination(userPaging,totalRecord){




    var data,mainPagination,subPagination,items,subPagingPrev,subPagingNext;

    var paginationWindow = document.getElementById("demo");

    var currentPage = addCurrentPage(page);


    mainPagination = document.createElement('ul');

    var noOfButton = Math.ceil(totalRecord/userPaging);
     var page ;



    var subPagingPrev = document.createElement('input');
    var subPagingNext = document.createElement('input');
    var previousPage,nextPage;

         subPagingPrev = addPagingButton(subPagingPrev,"<<");
         subPagingNext = addPagingButton(subPagingNext,">>");


       mainPagination.appendChild(subPagingPrev);

    for(items = 1 ; items <= noOfButton ; items++){

             var subPagButton = document.createElement('input');

             subPagButton = addPagingButton( subPagButton,items);





         subPagButton.onclick = function (){

            subPagingPrev.style.display = 'inline';
            subPagingPrev.style.marginLeft = "10px";

            subPagingNext.style.display = 'inline';
            subPagingNext.style.marginLeft = "10px";


              page  = this.value;

             currentPage = addCurrentPage(page);

             startPage = getStartPage(currentPage,userPaging);
             endPage   = getEndPage(currentPage,userPaging);

             paginationTable(startPage,endPage,subPagingPrev,subPagingNext);




    }


         subPagingPrev.onclick = function (){

            subPagingNext.style.display = 'inline';
            subPagingNext.style.marginLeft = "10px";



            previousPage = (currentPage - 1) ;



             startPage = getStartPage(previousPage,userPaging);
             endPage   = getEndPage(previousPage,userPaging);
             paginationTable(startPage,endPage,subPagingPrev,subPagingNext);
             currentPage = addCurrentPage(previousPage);
            //  document.getElementById('matchresult').innerHTML = ("Showing "+"   "+(startPage + 1)+ "   " + "to"+"   "+ (endPage) + "   "+ "entries" +"   " + " of "+"   "+ results.length).fontsize(10);



    }




     subPagingNext.onclick = function (){

            subPagingPrev.style.display = 'inline';
            subPagingPrev.style.marginLeft = "10px";


             nextPage = (++currentPage);
             startPage = getStartPage(nextPage,userPaging);
             endPage   = getEndPage( nextPage,userPaging);
             paginationTable(startPage,endPage,subPagingPrev,subPagingNext);

          currentPage = addCurrentPage(nextPage);

    }

          mainPagination.appendChild(subPagButton);


 }


         paginationTable(0,userPaging,subPagingPrev,subPagingNext);

         mainPagination.appendChild(subPagingNext);

         paginationWindow.appendChild( mainPagination);


}




function getStartPage(pageCount , userPaging){

    var startPage = (pageCount - 1 ) * (userPaging) ;


    return startPage;

}



function getEndPage(pageCount , userPaging){

     var endPage = (pageCount * userPaging);

     return endPage;
}



function addPagingButton(subPagButton,data){


             subPagButton.setAttribute("type","button");
             subPagButton.value = data;
             subPagButton.id ="pagingbutton" ;
             subPagButton.style.marginLeft = "10px";
             subPagButton.style.display = "inline";
             subPagButton.style.width = "20px";
             subPagButton.style.height = "20px";

    return  subPagButton;
}



function paginationTable(startPage,endPage,previousButton,nextButton){


  var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var dateArray = [];
  var dataSource = [];
   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

   var userArray=['userinfo','userwebsite','userhint','date','userdate'];

  document.getElementById('usertable').innerHTML="";


 db.executeSql('SELECT * FROM user ').then (function(results) {




 if(results.length){

          if(startPage <= 0){


        setPrevButtonDisable(previousButton)
       // paginationTable(1,endPage, previousButton,nextButton);

  }

    if(endPage > results.length-1){


     setPrevButtonDisable(nextButton) ;



  }


        userEncryptionKey = sessionStorage.getItem('userKey');


      createTableHeader();

        //alert(results.length);

        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {

                   console.log(results[numberOfItem]);

                  userData  = decryptUserData(results[numberOfItem],userArray,userEncryptionKey);

                    if(userData.website ){




                        if(startPage <= numberOfItem  &&  numberOfItem < endPage){


                             count = count + 1 ;
                             createTable( i + 1 ,userData.userid,userData.userpassword,userData.userwebsite,userData.userhint,userData.date,userData.userdate);
                           //dataSource.push(getArrayOfData(userData,userArray));



                        }



                       document.getElementById('matchresult').innerHTML = ("Showing "+"   "+(startPage + 1)+ "   " + "to"+"   "+ (endPage) + "   "+ "entries" +"   " + " of "+"   "+ results.length).fontsize(10);




                    }




        }

            if(count == 0){

                 document.getElementById('usertable').innerHTML = "No Records To Display";



            }
            else{

                displaySortedData( dataSource);


            }


 }

else{



                        //document.getElementById('usertable').visibility = "hidden ";
                        document.getElementById('usertable').innerHTML = "No Records Found ";






}









}, function(e) {

  throw e;


});



}



function setPaging(){

     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

var userPagingValue , userCheckboxValue;
var userRecords = [];
var record = [];

db.executeSql("select * from user ").then(function(data){


            record.push(data.length);



});



db.executeSql("select * from setting ").then(function(data){

 userCheckboxValue =  data[0].checkbox;
  userPagingValue = data[0].paging;

userRecords.push(userCheckboxValue);

            applyCheckboxSetting(userCheckboxValue);
           // applyMandatorySetting(userCheckboxValue);
            addPagination(userPagingValue,record[0]);





});







}







function applyCheckboxSetting(userCheckboxSetting){

   var settingField = ["userid", "userpassword","userwebsite","userhint"];

    var count = 0;
    var uncheckedFields = [];
    var userUnchecked;
    var rowcount, userInput,columncount = 0;



        for(rowcount = 0 ; rowcount < userCheckboxSetting.length ;rowcount++){




                if( validateCheckBoxOption(userCheckboxSetting[rowcount][columncount]) ){


                           document.getElementById(getTextboxId(rowcount)).style.display = "inline";


              }


              else{

                      document.getElementById(getTextboxId(rowcount)).style.display = "none";

                      document.getElementsByTagName('label')[0].style.display = "none";



                    userInput = validateCheckbox(userCheckboxSetting[rowcount][1],userCheckboxSetting[rowcount][2])

                        switch( userInput){


                            case 0 :
                                         uncheckedFields.push(getUserRecordId(rowcount));
                                        count = count+1;
                                        break;


                            case 1 :
                                         uncheckedFields.push(getUserRecordId(rowcount));
                                        count = count+1;
                                        break;


                            case 2 :
                                         uncheckedFields.push(getUserRecordId(rowcount));
                                        count = count+1;
                                        break;


                            default :
                            break;


                        }



              }




        }

          if(count > 0){




              alert("Please Select Display Option for "+ uncheckedFields.join() );
        }






}

        function validateCheckBoxOption(userValue){



            if(userValue){

                return true;

            }
            else{

                return false;

            }



        }



function validateCheckbox(mandatory,encryption){



     if(mandatory  && encryption){




                return 0;

     }


     if(!mandatory  && encryption){




                return 1;

     }

     if(mandatory  && !encryption){




                return 2;

     }


     if(!mandatory  && !encryption){




                return 3;

     }









}



function setCurrentSetting(){

         var rowCount;
           var userCheckboxSetting = [];
  var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


    db.executeSql("select * from setting").then(function(data){


   userCheckboxSetting = data['checkbox'];
   console.log(userCheckboxSetting)

  if(userCheckboxSetting){

         var userCheckboxSetting = data["checkbox"];

             applyCheckboxSetting(userCheckboxSetting)
       }

      console.log(userCheckboxSetting)


    });



    }





function setDefaultSetting(){

     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

   var userCheckboxSetting = getSetting();

   var obj  = {

        "checkbox"   : userCheckboxSetting,
        "dateFormat" : "DD/MM/YYYY",
         "paging"    : "10"

    };


    db.put("setting", obj ,"setting").done(function(){

    });



}


function getSetting(){




  var settingObj = [];

 for(var items = 0; items < 4 ; items++){

  settingObj[items] = [] ;

    for(var indexCheckbox = 0; indexCheckbox < 3; indexCheckbox++){


           settingObj[items][indexCheckbox] = true ;


        }

    }

return  settingObj;

}



function getTextboxId(value){


    switch(value){


        case 0  : return "username";

        break;


        case 1  : return "userpassword";

        break;


        case 2  : return "userwebsite";

        break;


        case 3  : return "userhint";

        break;

        default :

        break;


    }






}










function getUserRecordId(value){


    switch(value){


        case 0  : return "userid";

        break;


        case 1  : return "userpassword";

        break;


        case 2  : return "userwebsite";

        break;


        case 3  : return "userhint";

        break;

        default :

        break;


    }






}






function applyEncryptionSetting(userSetting){



    var userEncryptionSetting = userSetting ;

     var fieldToBeEncrypted = [];

        var rowcount, columncount = 2;



        for(rowcount = 0 ; rowcount <  userEncryptionSetting.length ;rowcount++){




                if(( userEncryptionSetting[ rowcount][columncount])){


                   fieldToBeEncrypted.push(getUserRecordId(rowcount));

                }







        }



         return fieldToBeEncrypted;



}





function getFieldToBeEncrypted(userField){



    switch(userField){


        case 'Name' :

        return "userid";

        break;

        case 'Password' :

        return "userpassword";

        break;
        case 'Website' :

        return "userwebsite";

        break;
        case 'Hint' :

        return "userhint";

        break;




    }









}



























function checkForEmpty(userData){



   if(userData){

       return true;

   }
   else{

       return false;

   }


}


function addUserRecords(){



     enterUserRecords();


}


function performEncryption(userData,userKey){


    if(userData){

        //userData = encryptData(userData,userKey);
        return userData;

    }
    else{


        return userData;

    }

}

function enterUserRecords(){

   var rowCount,columnCount=2;

    var  userDate = new Date().getTime();
    var  userKey  =  getSessionPassword()
    var userData = [];
    var uncheckedFields = [];
    var textboxId = getTextBoxId();
    var userRecord = getData(textboxId);
    var count = 0;
   var propertyNameArr =["userid","userpassword","userwebsite","userhint","userdate","date"]

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

    // var settingField = getSettingFieldId();
    // var settingFieldId =  getSettingFieldActivityId();


    db.executeSql("select * from setting").then(function(data){

       var record = data[0].checkbox;

      for(rowCount = 0 ;rowCount < record.length ; rowCount++){


        if(record[rowCount][0]){



                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])



                        switch(userInput){


                            case 0 :
                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));


                                         }
                                        else{

                                                 document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));



                                        }

                                        break;


                            case 1 :

                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = performEncryption(userRecord[rowCount],userKey);

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

                                        break;


                            case 2 :




                                          if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{

                                                document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]="";



                                        }









                                        break;


                             case 3 :

                                           if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

                                        break;

                                        break;



                            default :
                            break;


                        }


        }

        else{

                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])

                            //console.log(user)

                        switch( userInput){


                            case 0 :
                                        uncheckedFields.push(getUserRecordId(rowCount));

                                       userData[rowCount]= performEncryption("Nil",userKey);;

                                        break;


                            case 1 :
                                        uncheckedFields.push(getUserRecordId(rowCount));

                                       userData[rowCount]= performEncryption("Nil",userKey);;
                                        break;


                            case 2 :
                                        uncheckedFields.push(getUserRecordId(rowCount));

                                       userData[rowCount]= performEncryption("Nil",userKey);
                                        break;


                             case 3 :


                                      userData[rowCount]= performEncryption("Nil",userKey);
                                        break;



                            default :
                            break;


                        }







                    }








}


  userData[rowCount] = userDate;



      if(verifyUserData(userData)){



   console.log(userData);


             var obj = getUserDataObject(userData,propertyNameArr);

             obj["date"] = epochToDate(obj.userdate);

             obj = createSensitiveEncryptedObject(obj,propertyNameArr,userKey)


             remoteStorage.bicnSystCorp.addUserData('Data',obj.userdate,obj);

              db.put('user',obj).done(function(x) {


                        reloadTable();


                  });






          window.setTimeout(function(){ clearTextBoxValue() },1000);
      }
      else{

          if(uncheckedFields.length > 0){

               alert("Please Select Display Option For "+uncheckedFields.join());

          }
           window.setTimeout(function(){ clearFileds() },1000);

           userData = getData(textboxId);

           setData(userData,textboxId);





      }






    });





}

function verifyUserData(userData){


    var items = 0;
    var count = 0;
    for(items = 0; items < userData.length ; items++){

        if(userData[items])
        {
          count = count + 1;

        }




    }


  if(count == items){

      return true;

  }
  else{


      return false;
  }



}


function checkRecords(userData){

var items,count;

for(items = 0 ;items < userData.length ; items++){


    if(userData[items]){

            count = 0;

    }
    else{


        count = count + 1;

    }

}



if(count){


    return false;

}
else{

    return true

}


}


function sortOldDate(){



 var numberOfItem = null;
  var userSortedData = [];
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userOldDate = [];
   var userArray=["userid","userpassword","userwebsite","userhint","date","userdate"]
    var  userData = {};


 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 var setdate = "";




    document.getElementById('usertable').innerHTML="";

console.log( userOldDate);

db.executeSql('SELECT * FROM user ').then (function(results) {

 userEncryptionKey = getSessionPassword();


 if(results.length){







                    for(numberOfItem =  0 ; numberOfItem < results.length ; numberOfItem++) {

                        userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);
                        userSortedData[numberOfItem] = userData.name;



 }

}


        console.log( userSortedData.sort());

         displayRecordByOldDate(userSortedData.sort())



}, function(e) {

  throw e;


});




}






function displayRecordByOldDate(userSortedData){

var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
   var userArray=["userid","userpassword","userwebsite","userhint","date","userdate"]

     document.getElementById('usertable').innerHTML="";

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 var setdate = "";



 db.executeSql('SELECT * FROM user ').then (function(results) {

 userEncryptionKey = getSessionPassword();


 if(results.length){

     // createTableHeader();





        for(var Item = 0 ; Item < userSortedData.length ; Item++) {


                  console.log("Oter="+Item);

                    for(numberOfItem =  0 ; numberOfItem <  userSortedData.length ; numberOfItem++) {



                   console.log("Inner="+numberOfItem);
                    userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                    if( userSortedData[Item] ===   userData.name){


                             console.log("Match="+numberOfItem);
                             count = count + 1;
                            dataSource.push(getArrayOfData(userData,userArray));
                         console.log(dataSource);


                    }





             }



 }

}









}, function(e) {

  throw e;


});










}





function getSortedList(oldname,newname){



    if(oldname.length < newname.length){


        return 1;

    }
    else{


        return 0;
    }



}








function sortNewDate(){



 var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
   var userArray = ['username','userpassword','userwebsite','userhint','date',"userdate"];



 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 var setdate = "";



 db.executeSql('SELECT * FROM user ').then (function(results) {

 userEncryptionKey = getSessionPassword();


 if(results.length){

      createTableHeader();





        for(var Item = 0 ; Item < results.length ; Item++) {


                   setDate = results[Item].date;

                    for(numberOfItem =  Item + 1 ; numberOfItem < results.length ; numberOfItem++) {






                    if( setDate => results[numberOfItem].date){

                            userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);
                          count = count + 1;
                               createTable( i + 1 ,userData.userid,userData.userpassword,userData.userwebsite,userData.userhint,userData.date,userData.userdate);



                    }





             }



 }

}









}, function(e) {

  throw e;


});












}






function sortByDate(records){

    records = records.sort();


}


/*+++++++++++++++++++++++++++++++++ Setting  GForm++++++++++++++++++*/


function userSettingPage(){


    var setting  = document.getElementById("left");






}

function setUserProfile(){


    console.log("key====");

    // Get encryption/decryption  password.

    var userKey = sessionStorage.getItem('userKey');

    // Initilize variable.

    var items  = 0;

    // De
    var decryptedUserData = [];


    // Get Array that holds unique record keys.

      var userUniqueObjectKeys =["fullname","userid","email","mobile","birthdate","key"];

      var uniqueKey = sessionStorage.getItem('recordKey') ;


      //  document.getElementById('right').innerHTML = "";


    var db = getUserInfoDatabaseObject();

    console.log( uniqueKey)


  console.log("key===="+uniqueKey)

    db.executeSql('Select * from userinfo').then(function(records){

  console.log("key===="+uniqueKey)

    for(items = 0 ;items < records.length ; items++){

        var userAdata = records[items].key;


            if(userAdata === uniqueKey){

                  console.log("key===="+uniqueKey)

                  console.log(records[items])

                    decryptedUserData = getDecryptedUserInfo(records[items],userUniqueObjectKeys,userKey);

                    console.log(decryptedUserData)

                     setRightDiv(decryptedUserData.fullname);
                     setCurrentSetting();
                      loadRemoteStorageData();

                      break;


            }





    }
    });


}





function setRightDiv(userName){
    console.log(")______")
    console.log(userName)

    document.getElementById('userfullname').innerText = userName ;

/*
    var items = 0;

    var setObj = document.getElementById('right');



    var imageIcon = ["images/setting.png","images/logout.png"];

     var settingButton = {};
    var logoutButton = {};
    var rightDiv ={};
    var settingLabel,logoutLabel;


     rightDiv  = document.createElement('div');
      rightDiv.class = 'rightdiv'


   setObj.appendChild(setUserFullName(userName,rightDiv));

*/

}


function getDbObject(){



    return sessionStorage.getItem('dbObject');



}



function setUserFullName(userInfo,rightDiv){



  var userFiled = ["Name"]
    var items = 0;
    var userImg = {};
    var imageIcon = 'usericon';



    var leftDiv   =  document.createElement('select');


             leftDiv.id  = imageIcon ;

            leftDiv.width = "500px";
            leftDiv.heigth = "500px";


           rightDiv.id = "settingRight";






   leftDiv.onmouseover = function(){


         leftDiv.innerHTML = "";
        // addDropDownList( leftDiv);



    }


     var label = createLabel(userInfo);

        label.id ="userrightname";
         label.style.whiteSpace = "nowrap";
          label.style.textAlign = "center";

          rightDiv.appendChild(label);

          rightDiv.appendChild(leftDiv);




    return rightDiv;


}


function  getDecryptedUserInfo(userInfo,infoIdArray,userKey){


    var userInformation = {};
    var items = 0;
    var decryptedData ="";

     for(items = 0 ;items < infoIdArray.length; items++){

       var userData = userInfo[infoIdArray[items]];

        if(validateSensitiveData(infoIdArray[items])){


            decryptedData = decryptData(userData,userKey);

           userInformation[infoIdArray[items]] = decryptedData.replace(/^"(.*)"$/, '$1');

         }
         else{
           console.log()
            userInformation[infoIdArray[items]] = userData;

         }


    }





    return userInformation;




}




function  getEncryptedUserInfo(userInfo,userKey,infoIdArray){


    var userInformation = [];
    var items = 0;


     for(items = 0 ;items < infoIdArray.length; items++){


           userInformation[items] = encryptData(userInfo[infoIdArray[items]],userKey);



    }





    return userInformation;




}













function  getEncryptedUserDataObject(userInfo,userKey,userArray){


    var userInformation = {};
    var items = 0;


     for(items = 0 ;items < userArray.length; items++){


           userInformation[userArray[items]] = encryptData(userInfo[userArray[items]],userKey);



    }





    return userInformation;




}




function createLabel(value,mLeft,mTop,fsize){


 var userlabel = document.createElement('Label');


        userlabel.width = "20px";
        userlabel.height = "20px";
        userlabel.innerHTML = value;
          userlabel.style.fontSize = fsize;
         userlabel.style.marginLeft = mLeft;
          userlabel.style.marginTop = mTop;
          userlabel.style.display= "block ";


    return  userlabel;




}


function createImageButton(imageIcon,width,height){


        var imgButton;



   imgButton =   document.createElement('input');

     imgButton.type = "button";
     imgButton.id = imageIcon;

    imgButton.style.width  =  width;
    imgButton.style.height = height;

    return  imgButton;

}



function updateProfile(){

$('#updateprofile').modal('show');


    console.log("asdasd")

         var items = 0;
         var userKey = getSessionPassword();

        var recordkey = sessionStorage.getItem('recordKey') ;

         var decryptedDa = [];

         var recordKeyArray = ["fullname","userid","email","mobile","birthdate","key"];



     var textBoxImage = ['images/name.png','images/phone.png','images/email.png','images/name.png'];


    var dbConnectionObject = getUserInfoDatabaseObject();

    dbConnectionObject.executeSql('Select * from userinfo').then(function(records){


      for(items = 0 ;items < records.length ; items++){


        var userUniqueKey = records[items].key;


            if(userUniqueKey === recordkey){

                  console.log("key===="+recordkey)

                  console.log(records[items])

                  decryptedUserData = getDecryptedUserInfo(records[items],recordKeyArray,userKey);



                            $('.modal-body #fullname').val(decryptedUserData.fullname);
                            $('.modal-body #email').val(decryptedUserData.email);
                            $('.modal-body #mobile').val(decryptedUserData.mobile);

                      break;


            }





    }

    $(".modal-footer #saveprofile").click(function (e) {

        e.preventDefault();

        console.log("pass")

      var previousDetails = records[items];

      // New user profile data.

      var userProfileData = {

            fullname : $('.modal-body #fullname').val(),
            email : $('.modal-body #email').val(),
            mobile : $('.modal-body #mobile').val(),
            key : userUniqueKey,
            birthdate : decryptedUserData.birthdate,
            userid : decryptedUserData.userid


      };

      setRightDiv(userProfileData.fullname)

      // Encrypt user data.
      console.log(userProfileData);
      //  document.getElementById('userrightname').value ="";
      //  document.getElementById('right').value="";

//setRightDiv(userProfileData.fullname);
// Check for any empty input.

if(isTextBoxEmpty(userProfileData,recordKeyArray)){

  if(userProfileData)

        userProfileData =  createSensitiveEncryptedObject(userProfileData,recordKeyArray,userKey)


      //  console.log("Encrypted");
      //  console.log(userProfileData);


              //  userProfileData =  getDecryptedUserInfo(userProfileData,recordKeyArray,userKey)
//console.log("Decrypted");
                //console.log(userProfileData);

      updateUserInformation(userProfileData,'userinfo',dbConnectionObject);

      $('#updateprofile').modal('hide');

}
else{

        alert("Input field cannot be empty");


}
      //setUserProfile();
});






    });
  $(document).on("click", ".modal-footer #closeprofilemodal", function () {

        $('#updateprofile').modal('hide');

});

}





function storeUserName(userName){


    sessionStorage.setItem("userinfo",userName);

}






function updateUserInformation(newProfileData,tableName,dbConnectionObject){

console.log("inside Update Operation" );

var userId = sessionStorage.getItem('databaseName');


  storeRegistrationDetails(newProfileData,userId);

  dbConnectionObject.put(tableName,newProfileData).done(function(){

  });




}



function createTextBox(windowObject,textId,placeHolder){


     var textBox = "";


textBox = document.createElement('input');

 textBox.setAttribute('type', 'text');



textBox.title = "Enter Your " + placeHolder;
textBox.name = textId;
textBox.id  = textId;


textBox.style.width ="230px";
textBox.style.height = "40px";


textBox.style.marginTop = "10px";
  textBox.style.display = 'inline-block';
textBox.value =  placeHolder ;



windowObject.appendChild(textBox);

    return windowObject;


}



function createPlaceHolder(textboxID,placeholder){



    document.getElementById(textboxID).placeholder = "Enter Your "+ placeholder + " Password  Here";





}

function createIconButton(windowObject,imageIcon,mLeft,mRight){


     var imageTextbox= new Image();
       imageTextbox.src = imageIcon;


    imageTextbox.type = "text";

    imageTextbox.style.width ="30px";
    imageTextbox.style.height = "20px";
    imageTextbox.style.marginLeft = mLeft;

     imageTextbox.style.display = 'inline-block';

    windowObject.appendChild(imageTextbox);

    return windowObject;


}





function editUserDeatils(previousData,editedData,userKey,userDataProperty,tableName){

console.log(previousData.key);
console.log(previousData);
    findKey(previousData.key,editedData);



/*



 db.keys(tableName).done(function (keys){

 db.values(tableName).done(function(results) {

      var resultLength = results.length;
      var items=0;

          flag = confirm("Do You Want To Edit ?");

     if(flag){

     for(items = 0; items < resultLength ; items++){

                key = keys[items];

         flag = validateUserInformation(previousData,results[items],userDataProperty, userKey);


                    if(flag){


                         db.put(tableName,editedData,key).done(function(x) {

                             });

                               userAData= JSON.parse(editedData.UserID)

                            storeUserName(userAData.adata);

                           setUserProfile();



                      break;

                }


      }



     }
     else{




       db.put(tableName,previousData,key).done(function(x) {


                });
                  userAData= JSON.parse(editedData.UserID)

                            storeUserName(userAData.adata);


                     setUserProfile();







      }






    });


 });

*/
}


/*
function validateUserInformation(previousData,newData,userDataProperty,userEncryptionKey){

    var flag = 0;
     var previousAdata,newAdata;


      previousAdata = JSON.parse(previousData.UserID);
       previousAdata = previousAdata.adata;

     newData = JSON.parse(newData.UserID);
      newData = newData.adata;

    console.log(previousData);

     console.log(newData);

    if(previousData){

            if( previousAdata ===  newData){


                        flag = 1;



            }
            else {



                flag = 0 ;

            }






    }

else{


    flag = 0;


}

    return flag;



}
*/


function setUserHashKey(){

  $("#showoldpassword").click(function() {

      if ($("#oldpassword").attr("type") == "password") {

        $("#oldpassword").attr("type", "text");
        $("#showoldpassword").val("Hide")
      } else {

        $("#oldpassword").attr("type", "password");
          $("#showoldpassword").val("Show")
      }

    });

    $("#shownewpassword").click(function() {
        if ($("#newpassword").attr("type") == "password") {
          $("#newpassword").attr("type", "text");
            $("#shownewpassword").val("Hide")
        } else {
          $("#newpassword").attr("type", "password");
          $("#shownewpassword").val("Show")

        }
      });

      $("#showconfirmpassword").click(function() {

          if ($("#confirmpassword").attr("type") == "password") {

            $("#confirmpassword").attr("type", "text");
              $("#showconfirmpassword").val("Hide")
          } else {
            $("#confirmpassword").attr("type", "password");
                $("#showconfirmpassword").val("Show")
          }
        });
}
setUserHashKey();

/**
* This function update user password and also aplly password to user profile and user records.
*This function after applying password update local storage and remote storage.
*/



function updatePassword(){


  // Display Modal
$('#updatepassword').modal('show');



      var userKey = sessionStorage.getItem('userKey');

      var passwordId = ["oldpassword","newpassword","confirmpassword"];

     var editPopUp,editDiv,editForm, editUserDate,save,cancel;
     var items;
    var userData ;
    var editedData = [] ;

    $( ".modal-footer #savepassword").click(function (e) {
        e.preventDefault();
        console.log("pass")
var userPassword = {
        oldpassword : $('.modal-body #oldpassword').val(),

         newpassword : $('.modal-body #newpassword').val(),

         confirmpassword : $('.modal-body #confirmpassword').val()
      }



         if(isTextBoxEmpty(userPassword,passwordId)){

           var oldpassword = generateHashKey(userPassword.oldpassword)

         if(checkPassword(oldpassword,userKey))
         {

             if(checkPassword(userPassword.newpassword,userPassword.confirmpassword)){


              applyNewPasswordToUserProfile(userPassword.newpassword,oldpassword);


                  console.log("===================================")
                //  console.log(old)
                  //  console.log(userData[1])

            applyNewPasswordToUserData(userPassword.newpassword,oldpassword);

              $('#updatepassword').modal('hide');
             }
             else{

                   alert("New and confirm password do not match");


             }




         }
         else{


                    alert("Old  and new password should not be same");

         }




         }
         else{


                alert("Input field cannot be empty")

         }

          //$('#updatepassword').modal('hide');
    });


        $(document).on("click", ".modal-footer #closepasswordmodal", function () {

            $('#updatepassword').modal('hide');

});

}

/*
function addDropDownList(select){




var value = ["Update Profile","Update Password","LogOut"];

 var option

for(var items  = 0;  items < value.length ; items++ ){



   option = document.createElement('option');
     option.class = "dropdown-header";
    option.appendChild(document.createTextNode(value[items]));




 select.appendChild(option);


}


select.onclick = function(){


    callSelectedOption(this.value);


}

}


function callSelectedOption(choice){


    //alert(getDataBaseObject());


    if(choice == "Update Profile" ){


     updateProfile();



    }


    if(choice == "Update Password"){


          updatePassword();



    }
     if(choice == "LogOut"){


         alert("Successfully Logged Out ");




    }









}
*/
/**
* This logout function clear session storage,close database connection and also redirect to login page.
*
*
*/

function logoutUser() {

            // Display alert regarding logout.

           alert("Successfully Logged Out ");

           // Clear session storage.

           // Clear database name.

          sessionStorage.setItem("databaseName","");

          // Clear user password.

          sessionStorage.setItem("userKey","");

          // Clear user unique record key.

          sessionStorage.setItem("recordKey","");

          // Redirect to login page.

         window.location.href ="../index.html";


}








 function checkPassword(newPassword,oldPassword){



     if(oldPassword == newPassword){


         return true ;
     }
     else{


         return false

     }



 }



 function isTextBoxEmpty(userEnteredData,textBoxID){


console.log(userEnteredData)
console.log(textBoxID)

    var items = 0, textboxObject = "",count = 0, flag = false ;

    var getTextBoxObj = {};



    for(items = 0 ; items < textBoxID.length ; items++){

        var userData = userEnteredData[textBoxID[items]];
        console.log("value")
        console.log(userData)

        if(userData === "") {


                count = count + 1;

                $('#'+textBoxID[items]).css('border-color', 'red');

                //getTextBoxObj.style.borderColor = "red";
                // getTextBoxObj.style.color= "red";
                // getTextBoxObj.value = "Cannot Be Empty";
                 //getTextBoxObj.title = "Cannot Be Empty";
                // getTextBoxObj.focus();

      /* getTextBoxObj.onclick = function(){
                  $( function() {

      $( document ).tooltip({


      position: {

        my: "left top",
        at: "right+5 top-5",
        collision: "none",
        using: function( position, feedback ) {

       }



        }



    }*/

}
else{

  $('#'+textBoxID[items]).css('border-color', 'lightblue');

}
}

console.log(count)

 if(count) {


     return false;

 }
else{


    return true ;

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





function promptAboutEmpty(textboxID){


     var items = 0, textboxObject = "",count = 0, flag = false ;
    var count = 0;
    var getTextBoxObj = {};



    for(items = 0 ; items < textboxID.length ; items++){

        getTextBoxObj = document.getElementById(textboxID[items]);



        if(getTextBoxObj.value === "Cannot Be Empty" ){


                if(count >= items){
                    getTextBoxObj.focus();

                }

                    getTextBoxObj.style.borderColor = "red";

                    getTextBoxObj.style.color = "black";
                    getTextBoxObj.value = "";

        }
        else{

                    getTextBoxObj.style.borderColor = "lightblue";

                    getTextBoxObj.style.color = "black";

        }



    }




}


function applyNewPasswordToUserProfile(newPassword,oldPassword){


         var items = 0;


          var userEnteredKey  = oldPassword;



          var userRecordId =["fullname","userid","email","mobile","birthdate","key"];

          var recordkey  = sessionStorage.getItem('recordKey');
          var databaseName = sessionStorage.getItem('databaseName');

         var decryptedDa = [];

         var newUserProfile = {};

          var dbConnectionObject = getUserInfoDatabaseObject();

          var newUserPassword = generateHashKey(newPassword);

          sessionStorage.setItem('userKey',newUserPassword);

                           console.log("Key===");


    dbConnectionObject.executeSql('Select * from userinfo').then(function(records){


      for(items = 0 ;items < records.length ; items++){





            if(records[items].key == recordkey ){



                 decryptedDa = getDecryptedUserInfo(records[items],userRecordId, userEnteredKey );

                console.log(decryptedDa.userid + newUserPassword);

                 recordkey = generateHashKey(decryptedDa.userid + newUserPassword);

               newUserProfile = createSensitiveEncryptedObject(decryptedDa,userRecordId,newUserPassword);


                  newUserProfile["key"] = recordkey;


                  sessionStorage.setItem('recordKey',recordkey);


                    deleteUserProfileRecord('userinfo',records[items].key,dbConnectionObject);

                    updateUserInformation(newUserProfile,'userinfo',dbConnectionObject)



            }





    }

    });





}



///

function applyNewPasswordToUserData(newPassword,oldPassword){

      // Get table name from session storage.

      var databaseName = sessionStorage.getItem('databaseName') ;

      // Initialize variable.

      var items = 0;

      // Get array for user record keys.

      var  userRecordKeys = ["userid","userpassword","userwebsite","userhint","date","userdate"];

      // Create decrypted object.

      var decryptedUserData = {};


      // Create encrypted object.

     var  encryptUserData = {}  ;

     // Create connection object.

      var dbConnectionObject = getUserDatabaseObject(databaseName);

      // Create new password hash.

     newPassword = generateHashKey(newPassword);
        console.log("oldPassword")
     console.log(oldPassword)
          console.log("newPassword")
     console.log(newPassword)


     //   Store password into session storage.

     sessionStorage.setItem('userKey',newPassword ) ;


      // Create array that holds encrypted data.

    var   newEncryptedData = [];

    //  Perform database operation.

    dbConnectionObject.executeSql('Select * from user').then(function(records){


    for(items = 0 ;items < records.length ; items++){

        console.log("======================New data"+items);

        decryptedData = decryptUserData(records[items],userRecordKeys,oldPassword);

        console.log(decryptedData)

        encryptUserData = createSensitiveEncryptedObject(decryptedData, userRecordKeys ,newPassword)

        console.log(encryptUserData)

        decryptedData = decryptUserData(encryptUserData,userRecordKeys,newPassword);

        console.log(decryptedData)
        //storeUserData(encryptUserData,'user',dbConnectionObject);
        newEncryptedData.push(encryptUserData);

    }

    console.log(newEncryptedData);


    storeUserData(newEncryptedData,'user',dbConnectionObject);


    });





}

function storeUserData(newRecord,tableName,dbConnectionObject){

for(key in newRecord){

    addRecord(tableName,newRecord[key],dbConnectionObject)
}

}



function getUnEncryptedData(){



    var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
   var userArray=["userid","userpassword","userwebsite","userhint","date","userdate"];
  document.getElementById('usertable').innerHTML="";

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 db.executeSql('SELECT * FROM user ').then (function(results) {


 userEncryptionKey = getSessionPassword();


 if(results.length){

         console.log(results[numberOfItem]);
      createTableHeader();



        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {



                  userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                    if(userData.userid ){

                            count = count + 1;


                          createTable( i + 1 ,userData.userid,userData.userpassword,userData.userwebsite,userData.userhint,userData.date,userData.userdate);


                    }





             }

            if(count == 0){

                 document.getElementById('usertable').innerHTML = "No Records Found ";



            }


 }

else{



                        //document.getElementById('usertable').visibility = "hidden ";
                        document.getElementById('usertable').innerHTML = "No Records Found ";






}









}, function(e) {

  throw e;


});













}


function  validateSensitiveData(userid){


    switch (userid){

        case "userwebsite":

            return false;


        break;

        case "key" :

            return false;


        break;

      case "userdate":

            return false;


        break;

        case "date":

              return false;


          break;




        default :

         return true;

        break;


    }





}




function createSensitiveEncryptedObject(userData,userArray,userKey){

    var encryptedObj ={};
    var encryptedData ="";
    var items =0;

console.log("here")
console.log(userArray)
console.log(userKey)
console.log("here")
    for(items = 0 ; items <userArray.length; items++){

        encryptedData = (userData[userArray[items]]);

        if(validateSensitiveData(userArray[items])){

                 encryptedObj[userArray[items]] = encryptData(encryptedData,userKey) ;


        }
        else{

             encryptedObj[userArray[items]] = encryptedData;
        }


    }


    return   encryptedObj;



}




 function decryptUserData(userData,userArray,userKey){

  var encryptedObj ={};
    var encryptedData ={};
    var items =0;


     console.log("Decr :::");

     console.log(userData);
     console.log(userArray);
          console.log(userKey);
    for(items = 0 ; items <userArray.length; items++){

       encryptedData = (userData[userArray[items]]);

       console.log( encryptedData)

        if(validateSensitiveData(userArray[items])){

              encryptedData = decryptData(encryptedData,userKey);

            encryptedObj[userArray[items]] =  encryptedData.replace(/^"(.*)"$/, '$1');

        }
        else{

            encryptedObj[userArray[items]] = encryptedData;

        }



    }


         console.log("Decrypted data");
          console.log(encryptedObj);


   return    encryptedObj;
 }


 function getUserInfoData(userData,userArray){


     var userDecrytedData ={};

     for(var items = 0;items <userData.length ;items++  ){

         if(validateSensitiveData(userArray[items])){

           userDecrytedData[userArray[items]] = userData[userArray[items]];



         }



     }


     return   userDecrytedData;



 }



(function(){

  document.getElementById('add').onclick = addUserRecords ;
  document.getElementById('get').onclick = searchUserRecordByDate;
  document.getElementById('getall').onclick = getRecord ;
  document.getElementById('setting').onclick = userSetting ;
  document.getElementById('clear').onclick = dbClear ;
  document.getElementById('linkprofile').onclick = updateProfile ;
  document.getElementById('linkpassword').onclick = updatePassword ;
  document.getElementById('linklogout').onclick = logoutUser ;



/*
  localStorage.setItem("localHostUrl", document.URL);
    localStorage.setItem("webUrl","http://localhost/html/index.html");


    if(navigator.Online){
        document.getElementById('offline').style.display ="block";
        document.getElementById('offline').onclick = goOffline ;

    }
    else{
      document.getElementById('online').style.display ="block"
      document.getElementById('online').onclick = goOnline ;

    }
*/
  })();

/*
  function goOffline(){

  window.location.href = localStorage.getItem("localHostUrl");

    //document.getElementById('offline').style.display ="none";
    //document.getElementById('online').style.display ="block";


  }
  function goOnline(){

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
    db.close();

    window.location.href = localStorage.getItem("webUrl");
    //document.getElementById('online').style.display ="none";
    //document.getElementById('offline').style.display ="block";
      //document.getElementById('online').onclick = goOnline ;


  }
*/
function findKey(oldKey,object){

  var numberOfItem = null;
var userData = {};
var flag = false;
var userEncryptionKey = null;
var count = 0;
var countArray = [] ;
var userName = [];



var db =  getUserInfoDatabaseObject();

db.executeSql('SELECT * FROM userinfo ').then (function(results) {


userEncryptionKey = getSessionPassword();


if(results.length){


      for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {




                  if(oldKey == results[numberOfItem].key){

                      deleteUseRecord('userinfo',oldKey,db)
                      storedUserRecords(object);

                  }





           }


}









}, function(e) {

throw e;


});





}

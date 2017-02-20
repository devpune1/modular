function loadRemoteStorageData(){




    //  Get database name from session storage.

     var userProfile = sessionStorage.getItem('databaseName');

     // Get database connection object.

     var dbconnectionObject = getUserDatabaseObject(userProfile);

     // Get  sub folder name .

     var userFolderName ="Records";

    // Set  uniqueKey to identify records.

     var uniqueKey = "userdate"

     // Create database connection object.

      var dbconnectionObject = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

      // Set table name.

      var tableName = "user"

      //  Set false to window change event.

     RemoteStorage.config.changeEvents.window = false;

     // Specify access to remote storage folder.

    remoteStorage.access.claim('bicnSystCorp','rw');

    // Display remote storage ewidget.

    remoteStorage.displayWidget();

    // Set path to remote storage to acces records.

    remoteStorage.bicnSystCorp.init(userProfile+"/"+userFolderName);

console.log("loading spinner")
  // Display spinner.

  $('#spinner').modal('show');

  // Fetch records from remote storage .

   remoteStorage.bicnSystCorp.getUserData('Data').then(function(userData){

     // Loop through records .

        for(var items in userData){

          // Remove duplicate element from local data base.

            removeDuplicate(userData[items],tableName,uniqueKey,dbconnectionObject);


        }



    });

// Set time out.

    setTimeout(function(){

        // Hide spinner.

          $('#spinner').modal('hide')

          // Display table.

            reloadTable();

    },3000);





}

/**

  1.This function remove duplicate record from local storage each time when user reload.


*/



function removeDuplicate(object,tableName,uniqueKey,dbconnectionObject){

   console.log(   "1"+uniqueKey);

   // set variable.

  var numberOfItem = 0;

  // Create object.

  var userData = {};

  // Set Count.

  var count = 0;

// Fetch records from database.

 dbconnectionObject.executeSql('SELECT * FROM '+tableName).then (function(results) {

// Check for records in local database.

 if(results.length){

   // Loop through records.

        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {

                // Store record inside object variable.

                  userData  = results[numberOfItem];

                  // If record exist then do not add record to local storage.Here we compare time stamp.


                    if((userData[uniqueKey]) !==  (object[uniqueKey])){

                            // Increment count.

                             count = count + 1;


                    }
                    else{

                            // Set count to zero.

                                count = 0;

                       // Break throug loop.

                        break;

                    }




             }

              // If count

           if(count){

                          // Add record to local database.

                         dbconnectionObject.put(tableName,object).done(function(x) {


                             });


           }

 }
// If no record are their inside local database then add record.
 else{


                          // If no record exist then add record to local datbase.
                        dbconnectionObject.put(tableName,object).done(function(x) {


                           });


 }



}, function(e) {

  throw e;


});




    }




    function convertJsonToObject(userdata){

        var object = "";

        object = JSON.parse(userdata) ;


        return object;


    }





function clearRemoteStorage(uniqueKey){

reloadTable();


}






/**
* This function loads user credential storead at remote strorage.
* This function also validate user id and connection to remote storage.
* Here when user enter user id to remote storage
*/


function loadRemoteStorageRecords(){




        RemoteStorage.config.changeEvents.window = false;

        // Set access to remote storage.

         remoteStorage.access.claim('bicnSystCorp','rw');

         // Hide remote storage widget.

         remoteStorage.displayWidget(false);

         // Fetch user id name from session storage.

         var userId = sessionStorage.getItem("databaseName")

         console.log(userId)

    // If remote storage connected and user id exist.

    if(remoteStorage.connected && userId){

      // Fetch user id from remote storage.

      accessUserIdFromRemoteStorage(userId,function(status){

      // Check if user id exist from local storage.


                  if(status){


                        console.log("Fecthing user credential information....");

                        // Fetch user credential information from remote storage and store to database.

                        accessRemotestorageData(userId);

                        // Hide remote lgin modal.

                        $('#remoteloginmodal').modal('hide');

                        // Clear text box.

                        getClear()
                }
                else {

                          console.log("User Id not found");

                          // Alert user about  user id exist or not.

                          alert(" Entered user id do not exits ");

                          // Show remote login modal.

                          $('#remoteloginmodal').modal('show');


                  }








});
}
}



function accessRemotestorageData(userId){


    var mainFolder = "RegistrationRecord";

    var databaseName = 'Records';

     var userProfile =  userId;

     var dbconnectionObject =  getUserInfoDatabaseObject();



console.log(userProfile+"/"+mainFolder);
try {
     remoteStorage.bicnSystCorp.init(userProfile+"/"+mainFolder);

         remoteStorage.bicnSystCorp.getById(userProfile+"/"+mainFolder).then(function(userData){

      dbconnectionObject.put('userinfo',userData).done(function(x) {});
          $('#customspinner').modal('hide');
    });
}
catch(e){

    console.log("errro");

}





}


// Function to access user id from remote storage.


function accessUserIdFromRemoteStorage(userId,callBack){



//Set flag .

var setUserIdFlag = false;

// Get folder name.

    var mainFolder = "UniqueUserID";

// Get folder name.

    var databaseName = 'Records';

  // Get data base connection object.

     var dbconnectionObject =  getUserInfoDatabaseObject();

// Get a key value to identify record and access record from remote storage.

     var uniqueKey = "userid";

// Get table name.

var tableName = 'uniqueid';

console.log(mainFolder+"/"+databaseName);

// Initilize path to access user id from remote storage.

     remoteStorage.bicnSystCorp.init(mainFolder+"/"+databaseName);

// Fetch user id from remote storage.

    remoteStorage.bicnSystCorp.getUserData().then(function(userData){

        for(key in userData){

          if(userId === userData[key].userid){

                      setUserIdFlag = true;

          }


           removeDuplicate(userData[key],tableName,uniqueKey,dbconnectionObject)



    }

    callBack(setUserIdFlag);

    });






}




function storeRegistrationDetails(userRegistrationRecord,userId){


    var mainFolder = "RegistrationRecord";
    var databaseName = 'Records';

     var userProfile =  userId;


     remoteStorage.bicnSystCorp.init(userProfile);

     remoteStorage.bicnSystCorp.addUserData(mainFolder,mainFolder,userRegistrationRecord)





}









function storeUserIdToRemoteStorage(userRegistrationRecord,userId){


// create Object which holds user id.

var userIdObject = {

  'userid' : userId

}


// Get folder name to generate path.

    var mainFolder = "UniqueUserID";

// Get folder name to generate path.

    var databaseName = 'Records';

// Set user id.

     var userProfile =  userId;

// Generate path.

     var mainFolderName = mainFolder+ '/' + databaseName;

// Add to local indexed db database.

// Connection object.

var dbconnectionObject = getUserInfoDatabaseObject();

// Initilize path for remote storage.

     remoteStorage.bicnSystCorp.init(mainFolderName);

// Add user id record to remote storage.

     remoteStorage.bicnSystCorp.addUserData(mainFolder,userId,userIdObject);

// Add to local data base.

dbconnectionObject.put('uniqueid',userIdObject).done(function(x) {});



}


function syncRemoteStorage(){


  var databaseName = sessionStorage.getItem('databaseName');

  var dbconnectionObject = getUserDatabaseObject(databaseName);

  var uniqueKey = "userdate";


   var tableName = "user";

         $('.modal  #spinner').modal('show');

     remoteStorage.bicnSystCorp.getUserData('Data').then(function(userData){


          for(var items in userData){


              removeDuplicate(userData[items],tableName,uniqueKey,dbconnectionObject);




          }


$('.modal  #spinner').modal('hide');

      });


}
// working asdsadasd


(


function() {

  var username,userpassword,userwebsite,userhint;
  var formElement;
  var ulElement;
  var dataSource = [];
  var drinkRowPrefix = 'records-';
  
var userProperty = ['name','address','number','email'];


  function prefixId(id) {
    
    console.log(drinkRowPrefix + id);
    
    return drinkRowPrefix + id;
    
  }
  function unprefixId(prefixedId) {
      
    return prefixedId.replace(drinkRowPrefix, '');
    
  }
  
  function init() {
    
   
    
    username= document.getElementById('username');
     userpassword = document.getElementById('userpassword');
      userwebsite =  document.getElementById('userwebsite');
     userhint= document.getElementById('userhint');
    

	
   
    RemoteStorage.config.changeEvents.window = true;

   
    remoteStorage.access.claim('userRecords', 'rw');

   
    remoteStorage.displayWidget();

    remoteStorage.userRecords.init();

    remoteStorage.userRecords.on('change', function(event) {
      
      if(event.newValue && (! event.oldValue)) {
        
        
  
     addData(event.newValue.name,event.newValue.userAddress,event.newValue.userNumber,event.newValue.userEmail);
     
     
     
     
     
      }
      else if((! event.newValue) && event.oldValue) {
        console.log('Change from '+event.origin+' (remove)', event);
       
       
    
       
        undisplayDrink(event.relativePath);
      }
      else if(event.newValue && event.oldValue) {
        console.log('Change from '+event.origin+' (change)', event);
   
      }
    });





    remoteStorage.on('ready', function() {
      ulElement.addEventListener('click', function(event) {
        if(event.target.tagName === 'SPAN') {
          removeDrink(unprefixId(event.target.parentNode.id));
        }
      });

      formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        var trimmedText = name.value.trim();
          var trimmedAddress = address.value.trim();
            var trimmedNumber = number.value.trim();
            var trimmedEmail = emailAddress.value.trim();
          
          
        if(trimmedText) {
          addDrink(trimmedText, trimmedAddress ,trimmedNumber,trimmedEmail);
           addData(trimmedText,trimmedAddress,trimmedNumber,trimmedEmail);
        }
        
      name.value = '';
      number.value = '';
      address.value ='';
     emailAddress.value = '';
      
      
      });
    });






    remoteStorage.on('disconnected', function() {
      emptyDrinks();
    });
  }

  function addDrink(name,address,number,email) {
    remoteStorage.userRecords.addDrink(name,address,number,email);

  }

  function removeDrink(id) {
    alert(id)
    remoteStorage.userRecords.removeDrink(id);
  }

  function displayDrinks(drinks) {
    
    
    for(var drinkId in drinks) {
console.log("asdasd");

  displayDrink(drinkId, drinks[drinkId].name,drinks[drinkId].userAddress,drinks[drinkId].userNumber,drinks[drinkId].userEmail);
  
    }
  }

  function displayDrink(id, name,address,number,email) {
    
    


    
    
    
    var domID = prefixId(id);
    var liElement = document.getElementById(domID);
    if(! liElement) {
      liElement = document.createElement('li');
      liElement.id = domID;
      ulElement.appendChild(liElement);
    }
    liElement.appendChild(document.createTextNode("Name : " +name +",    Address : "+ address+",    Mobile Number : "+ number+",    Email : "+ email));//this will do some html escaping
    
   
    liElement.innerHTML += ' <span title="Delete">×</span>';
  }
  
  
  

  function undisplayDrink(id) {
    var elem = document.getElementById(prefixId(id));
    ulElement.removeChild(elem);
  }

  function emptyDrinks() {
    ulElement.innerHTML = '';
    name.value = '';
  }
  
 
    function displaySortedData(dataSource){
      
      
      
      
      
      
      
 
    $(document).ready(function() {
    
    $('#example').DataTable( {
        responsive: true,
        "bJQueryUI": true,
         "destroy": true,
        data: dataSource,
              columns: [
                        { title: 'Name',  className: "center", },
                        {title: 'Address' ,  className: "center",},
                        { title: 'Number',  className: "center", },
                        {title: 'Email',
                          className: "center",},{
                          
                          
                          title : 'Action',
                          default :-1,
                             className: "center",
                "defaultContent": " <input type= 'button' value = 'Delete' class = 'deleteButton' > </input>" 
                          
                          
                        }
                ]
    });
    
    
     
    $('#example').on('click', 'input.deleteButton', function (event) {
      
     var table = $('#example').DataTable();
     
     var dataSelected = table.row( $(this).parents('tr') ).data();
     
  remoteStorage.userRecords.removeDrink(dataSelected[0]);
 

     table
        .row( $(this).parents('tr') )
        .remove()
        .draw();
         

       
        
         
            
   //dataSelected.length = 0;
 
       
    } );
    
    
    
    
    
    
    
    
    
    
    
    
    });
}
    
    
function getArrayOfData(userData,userProperty){
    
    
    var items = 0;
    var dataItem = [];
    var userDateRow = {};

       
    for(items = 0;items < userProperty.length;items++ ){
       
       
        dataItem [items] = userData[userProperty[items]];
     
        }
        
    
    return dataItem;
    
    
    
}    
  document.addEventListener('DOMContentLoaded', init);

})();


*/
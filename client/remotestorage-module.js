   


  RemoteStorage.defineModule('u', function(privateClient) {
  privateClient.declareType('drink', {
    type: 'object',
    properties: {
      name: { type: 'string' },
       userAddress: { type: 'string' },
        userNumber: { type: 'string'},
         userEmail: { type: 'string' }
    },
    required: ['name','userAddress','userNumber','userEmail']
  });

  return {
    exports: {

      init: function() {
       privateClient.cache('');
      },

      on: privateClient.on,

      addDrink: function(name,uaddress,unumber,uemail) {
        var id = name.toLowerCase().replace(/\s|\//g, '-');
       
        
        
        
        return privateClient.storeObject('drink', id,{
         
         name : name,
         userAddress : uaddress,
         userNumber : unumber,
         userEmail : uemail
          
        });
      },

      removeDrink: privateClient.remove.bind(privateClient),

      listDrinks: function() {
        return privateClient.getAll('');
      }

    }
  };

});

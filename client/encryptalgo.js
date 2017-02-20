



function setData(){
    
var name = document.getElementById('name').value;



document.getElementById('plain').value = name ;

var len = name.length;

//alert(len);
var value = '#';

var name1=[];

for(var i=0; i < len; i++) {
    


   name1[i] = encryptChar(name[i].toUpperCase());
    
    
}



//alert(name1.length);

 document.getElementById('cipher').value = name1.join('') ;

}




function Char(){
    
    
    return '#';
    
}



function encryptChar(data){
    
  var encryptData = ['A','B','*','C','D','%','E','F','@','G','H','#','I','J','>','K','L','^','M','N','&','O','P','(','Q','R',')','S','T','_','U','V','-','W','X','=','Y','Z','{','1','2','}','3','4','|','5','6','<','7','8',':','9','.','a','b','!','c','d','$','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    for(var len=0 ; len<encryptData.length ; len++) {
        
        
        if(data == encryptData [len]){
            
            return encryptData [len+3]; 
            
            break;
            
        }
        
        
    }
    
    
}



function decryptChar(data){
    
   var encryptData = ['A','B','*','C','D','%','E','F','@','G','H','#','I','J','>','K','L','^','M','N','&','O','P','(','Q','R',')','S','T','_','U','V','-','W','X','=','Y','Z','{','1','2','}','3','4','|','5','6','<','7','8',':','9','.','a','b','!','c','d','$','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
  var symbolPattern = ['!','@','#','$','%','^','&','*','(',')','_','=','-','[',']',':','.','/','?','>','<'];
  
  var numberPattern = ['0','1','a','2','b','3','4','5','6','7','8','9'];
     
    
    
    
    
    var decryptLen=[];
    for(var len=0 ; len<encryptData.length ; len++) {
        
        
        if(data == encryptData [len]){
                
        //alert(len)
             
            
    
            
            return encryptData [len-3]; 
            
            break;
            
        }
        
        
    }
    
    
}


function getData() {
    
    
    
    var name = document.getElementById('cipher').value;
    
len = name.length;



var name1=[];
var decryptLen =[];

for(var i=0; i != len; i++) {

 document.getElementById('lenght').innerHTML = i;
 
   name1[i] = decryptChar(name[i]);
    
    
}

name1=name1.join("").toLowerCase();

findMatch(name1);



document.getElementById('decipher').value = name1;

   
    
    
}


function findMatch(decryptData){
    
   var userData = document.getElementById('name').value;
  
    
    if(userData == decryptData){
        
        alert (" success ");
    }
    else{
        
        alert("unsuccess")
    }
    
    
    
}
function validAll(){
    var name = document.getElementById("prodname");
    var price = document.getElementById("price");
    var active = document.getElementById("active");
    var dte = document.getElementById("dateOfLaunch");
   if(true){
       if(!name.checkValidity()){
            alert("Title is required. Title should have 2 to 65 characteres");
        }
        if(!price.checkValidity()){
            alert("Price is required. Price has to be Number.");
        }
        if(!dte.checkValidity()){
            alert("Date of Launch is required.");
        }
        
   }
    
    
}
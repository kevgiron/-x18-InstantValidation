function register()
{
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  window.alert("Username: " + userEntered + "\nPassword: " + passEntered );
}

function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var posZeroes = userEntered.search(" "); 


  if (userEntered.length < 6 || posZeroes > -1) 
  {
        if (userEntered.length < 6) {
      document.getElementById("usernameError").innerHTML="Username needs to be least be 6 characters.";
    }
    else
    {
      document.getElementById("usernameError").innerHTML="Username can not contain spaces.";
    }
    
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-error");

  }
}

function validatePassword(){
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;

    if(passEntered.length == 8) 
    {
    var posPass = passEntered.search(/password/i); 
    }

      if (posPass == 0 || passEntered == userEntered || passEntered.length < 6 || passEntered.length > 20){
  
      if(posPass == 0) {
        document.getElementById("passwordError").innerHTML="Password can not be password.";
      }
      else if(passEntered == userEntered){
        document.getElementById("passwordError").innerHTML="Password can not be the same as your Username.";
      }
      else if(passEntered.length < 6){
        document.getElementById("passwordError").innerHTML="Password needs to be at least 6 characters.";
      }
      else if(passEntered.length > 19){
        document.getElementById("passwordError").innerHTML="Password needs to be less than 20 characters.";
      }
     
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
    }
    else 
    {
     document.getElementById("passwordError").classList.add("hidden-message");
     document.getElementById("passwordGroup").classList.add("has-success");
     document.getElementById("passwordError").classList.remove("shown-message");
     document.getElementById("passwordGroup").classList.remove("has-error");
    }

}

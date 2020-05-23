// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails


// let email=document.getElementById("emailtext").value;
// console.log(email);
// console.log(checkEmail(email))
function checkUserName(){
    var username  = document.getElementById("usertext");
    var regExu = /[!@#$%^&*()_]/;
    if(username !="")
    {
    alert("Username should not be null");
    return false;
    }
    else if(username.length.trim()>9 && username.length.trim()<15)
    {
    alert("Username should be a minimum of 8 characters and should be less than 15 characters");
    return false;
    }
    else if(regExu.test(username))
    {
    alert("Username should not contain special characters");
    return false;
    }
    else
    {
    alert("Valid");
    return true;
      }
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(){
    var emaill = document.getElementById("emailtext");
    var regExe = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-])+.([A-Za-z]{2,10})$/;

    if(regExe.test(emaill))
    {
    alert("Valid");
    return true;
    }
    else
    {
    alert("Wrong email");
    return false;
    }
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(){
    var password = document.getElementById("passwordtext");
    var regExp = /^[a-zA-Z0-9!@#$%^&*()_]$/;
    if(regExp.test(password))
    {
    alert("Valid");
    return true;
    }
    else{
        alert("Password must contain atleast one Uppercase,one Lwercase, one number and special characters");
        return false;
    }
    
}
function checkAll()
 {
    checkUserName();
    checkEmail();
    checkPassword();
}
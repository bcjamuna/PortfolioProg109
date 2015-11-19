

function ValidateForm() {
    var validUsername = false;
    var validUserPassword = false;
    var errorMessages = "";

    /*********Validates Username **********/
    //Required field
    if (myContact.userName.value.length > 0 &&
        myContact.userName.value.length < 15)
        validUsername = true;

    else
        document.getElementById("errorMessages").innerHTML += "<p>The username must be less than 15 characters</p>";
    console.log(validUsername);

    return validUsername;

    /*********Validates Password **********/
    if (myContact.userPassword.value == null ||
      myContact.userPassword.value === "" ||
      myContact.userPassword.value > 15)
        errormessages += "<p>The password must be less than 15 characters and is required</p>";
    else
        validUserPassword = true;

    document.getElementById("errorMessages").innerHTML += errorMessages;

    return (validUsername && validUserPassword);
}




function validateEmail() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}






function ValidateForm() {
    var validUsername = false;
    var validUserPassword = false;
    //var validFName = false;
    //var validLName = false;
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





/*********Validates Firstname **********/
//Required field


function ValidateForm() {
    var validFName = false;
    var errorMessages = "";

    if (myContact.fName.value.length > 0 &&
        myContact.fName.value.length < 20)
        validFName = true;

    else
        document.getElementById("errorMessages").innerHTML += "<p>First name must be less than 20 characters</p>";
    console.log(validFName);

    return validFName;




/*********Validates Lastname **********/
        //Required field
    function ValidateForm() {
        var validLName = false;
        var errorMessages = "";


        if (myContact.lName.value.length > 0 &&
            myContact.lName.value.length < 50)
            validLName = true;

        else
            document.getElementById("errorMessages").innerHTML += "<p>Last name must be less than 50 characters</p>";
        console.log(validLName);

        return validLName;




        /*********Validates email **********/
        //Required field
        function validateEmail() {
            var x = document.forms["myForm"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                alert("Not a valid e-mail address");
                return false;
            }
        }






    }
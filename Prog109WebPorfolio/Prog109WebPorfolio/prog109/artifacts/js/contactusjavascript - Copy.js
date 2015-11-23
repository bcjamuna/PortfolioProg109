

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


















function validateForm() {
    var fname = document.getElementById('firstname').value;
    var lname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var phonum = document.getElementById('phonenumber').value;



    //First Name
    if (fname == null || fname === "") {
        alert("Please enter your first name.");
        return false;
    }
    if (fname.length >= 20) {
        alert("Your first name must be less than 20 characters long.");
        return false;
    }
    if (!isNaN(fname)) {
        alert("Your name cannot contain a number");
        return false;
    }

    //Last Name
    if (lname == null || lname === "") {
        alert("Please enter your last name.");
        return false;
    }
    if (lname.length >= 50) {
        alert("Your last name must be less than 50 characters long.");
        return false;
    }
    if (!isNaN(lname)) {
        alert("Your name cannot contain a number");
        return false;
    }

    // Email
    if (email == null || email === "") {
        alert("Please enter your E-mail address.");
        return false;
    }
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Not a valid E-mail address.");
        return false;
    }
    var uname = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    var ctry = document.getElementById('country').value;
    var zpc = document.getElementById('zipcode').value;
    var adrs = document.getElementById('adrs').value;
    var city = document.getElementById('city').value;
    // Phone Number
    if (phonum == null || phonum === "") {
        alert("Please enter your phone number.");
        return false;
    }
    if (phonum.length >= 15) {
        alert("Your phone number must be less than 15 characters long.");
        return false;
    }
    if (isNaN(phonum)) {
        alert("Your phone number must only contain numbers.");
        return false;
    }

    // User Name
    if (uname == null || uname === "") {
        alert("Please enter your user name.");
        return false;
    }
    if (uname.length >= 12) {
        alert("Your user name must be less than 12 characters long.");
        return false;
    }

    // Password
    if (pw == null || pw === "") {
        alert("Please enter your password.");
        return false;
    }
    if (pw.length >= 7) {
        alert("Your password must be less than 7 characters long.");
        return false;
    }

    // Address
    if (adrs == null || adrs === "") {
        alert("Please enter your address.");
        return false;
    }

    // City
    if (city == null || city === "") {
        alert("Please enter a city.");
        return false;
    }

    // Country
    if (ctry == "blank") {
        alert("Please select a country.");
        return false;
    }

    // Zip Code
    if (ctry == "usa") {
        if (zpc == null || zpc === "") {
            alert("Please enter a zip code.");
            return false;
        }
        if (isNaN(zpc)) {
            alert("Your zip code must be a number.");
            return false;
        }
        if (zpc.length >= 6 || zpc.length <= 4) {
            alert("Your zip code must be five characters long.");
            return false;
        }


    }

}

//function that checks whether input text is an alphabetic character or not.
function inputAlphabetforfirstname(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p1').innerText = alertMsg;  //this segment displays the validation rule for name
        //alert(alertMsg);
        inputtext.focus();
        return false;
    }
}


function inputAlphabetforlastname(inputtext, alertMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (inputtext.value.match(alphaExp)) {
        return true;
    } else {
        document.getElementById('p2').innerText = alertMsg;  //this segment displays the validation rule for name
        //alert(alertMsg);
        inputtext.focus();
        return false;
    }
}

function checkPasswords() {
    var inputPassword = document.getElementById("inputPassword").value;
    var inputConfirmPassword = document.getElementById("inputConfirmPassword").value;
    if (inputPassword !== inputConfirmPassword) {
        alert('passwords must match');

    }
   return false;
}


// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.

function emailValidation(inputtext, alertMsg) {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (inputtext.value.match(emailExp)) {
        return true;
    } else {
        document.getElementById('p3').innerText = alertMsg; //this segment displays the validation rule for email
        inputtext.focus();
        return false;
    }
}
  



function formValidation() {

    // Make quick references to our fields
    var inputFirstname = document.getElementById('inputFirstname');
    var inputLastname = document.getElementById('inputLastname');
    var inputEmail = document.getElementById('inputEmail');
    var inputPassword = document.getElementById('inputPassword');
    var inputConfirmPassword = document.getElementById('inputConfirmPassword');


    //  to check empty form fields.  

    if (inputFirstname.value.length == 0) {
        document.getElementById('head').innerText = "* All fields are mandatory *"; //this segment displays the validation rule for all fields
        inputFirstname.focus();
        return false;
    }

    // Check each input in the order that it appears in the form!
    if (inputAlphabetforfirstname(inputFirstname, "* For your firstname please use alphabets only *")) {
        document.getElementById('p1').innerText = null;
 
        if (inputAlphabetforlastname(inputLastname, "* For your lastname please use alphabets only *")) {
            document.getElementById('p2').innerText = null;

            if (emailValidation(inputEmail, "* Please enter a valid email address *")) {
                document.getElementById('p3').innerText = null;
                if (checkPasswords() === true) {
                    document.getElementById('p4').innerText = null;

                     

                    alert("successful");
                    window.location.href = "index.html";

                } 

            }
        }
    }

    else {
        alert("check details correctly");
    }

}
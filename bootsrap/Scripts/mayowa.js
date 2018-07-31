$(document).ready(function () {
    


    
        function validateForm() {
            var x = document.forms["myForm"]["email"].value;
            if (x == "") {
                $('.val').html("The Email field is required");
              
            }
            var y = document.forms["myForm"]["psword"].value;
            if (y == "") {
                $('.val2').html("The PassWord field is required ");
              
            }


        }
    
    

    function validateForm2() {
        var x = document.forms["myForm2"]["fstname"].value;
        if (x == "") {
            alert("FirstName must be filled out");
            return false;
        }

    }

    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".dropdown-menu li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });









});
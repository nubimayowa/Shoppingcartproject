"use strict";
$(document).ready(function () {
    //=================Preloader===========//
    $(window).on('load', function () {
        $('.preloader img').fadeOut();
        $('.preloader').fadeOut();
    });
    //=================end of Preloader===========//
    //$('input').iCheck({
    //    checkboxClass: 'icheckbox_minimal-blue',
    //    radioClass: 'iradio_minimal-blue',
    //    increaseArea: '20%' // optional
    //});
    $("#authentication").bootstrapValidator({
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'Please enter valid email format'
                    }
                },
                required: true,
                minlength: 3

            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Password is required'
                    }

                },
                required: true,
                minlength: 3
            }

        }
    });
    

});




        //var inputPassword = document.getElementById('password');
        //        var eye = document.getElementById('eye');
        //        eye.addEventListener('click', togglePass);
        //        function togglePass() {



        //            (inputPassword.type == 'password') ? inputPassword.type = 'text' :
        //                inputPassword.type = 'password';

        //        };


////  $(document).ready(function () {
////             $('#submit').click(function () {
              
////                 var emailAddress = $("#email").val();
////                        var passWord = $("#Password").val();
////                                if (emailAddress != "" && passWord != "") {
////                                    $.ajax({
////                                        url: 'http://localhost:62103/api/login',
////                                        type: "get",
////                                        dataType: 'json',
////                                        data: {emailAddress:emailAddress, passWord:passWord },
                                       

////                                        success: function (data) {

////                                            console.log(data);
////                                            window.location = "index.html";
////                                        },
////                                        error: function (err) {

////                                            console.log();

////                                        }

////                                    });
////                                }
////                                else {
////                                    alert("your fields are empty");
////                                }



////              });

         
////});

                               
   

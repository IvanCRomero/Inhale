/**
 * Function: Use Ajax plugin Validate Form
 * to set every required option easily to each
 * input for more information  go
 * https://jqueryvalidation.org/
 */
import { LogInFormData } from "../classes/logInForm.class.js";
import * as Cookies from "../utils/cookies.js";

export function validateLogInForm() {
  $("#form").validate({
    submitHandler: function (form) {
      let email = $("#email").val();
      let password = $("#password").val();
      let logInData = new LogInFormData(email, password);
      if ($("#remember")[0].checked) {
        Cookies.setCookie("email", email, 1);
      }
      const data = JSON.stringify(logInData);
      const request = $.ajax({
        type: post,
        url: "url",
        data: data,
        dataType: "json",
        success: function (response) {
          
        }
      });
    },
    invalidHandler: function (event, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        var message =
          errors == 1
            ? "You missed 1 field. It has been highlighted"
            : "You missed " + errors + " fields. They have been highlighted";
        $("div.form__message p span").html(message);
        $("div.form__message").show();
      } else {
        $("div.form__message").hide();
      }
    },
    rules: {
      email: {
        required: true,
        email: true,
        maxLength: 50,
        noSpace: true,
      },
      password: {
        required: true,
        minlength: 8,
        maxLength: 15,
        password: true,
      },
    },
    messages: {
      email:{
        noSpace: "Spaces are not allowed",
      },
      password: {
        required: "Please enter a valid password.",
        minlength: "Please enter at least 8 characters.",
        password: "Please enter a valid format like 'Password1'",
      },
    },
  });
}

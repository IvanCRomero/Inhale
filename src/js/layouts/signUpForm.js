/**
 * Function: Use Ajax plugin Validate Form
 * to set every required option easily to each
 * input for more information  go
 * https://jqueryvalidation.org/
 */

import { SignUpFormData } from "../classes/signUpForm.class.js";

export function validateSigUpForm() {
  $("#form").validate({
    submitHandler: function (form) {
      if ($("input[name=organizationType]").parent().hasClass("selected")) {
        if ($("#terms")[0].checked) {
          $(form).ajaxSubmit();
        } else {
          alert("You must accept the terms and conditions to continue");
        }
      } else {
        alert("You must selected your organization type to continue");
      }
      form.reset();
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
      organizationName: {
        required: true,
        minlength: 3,
        maxlength: 40,
      },
      administratorName: {
        required: true,
        minlength: 3,
        maxlength: 40,
      },
      email: {
        required: true,
        email: true,
        noSpace: true,
      },
      password: {
        required: true,
        minlength: 8,
        password: true,
      },
      confirmPassword: {
        required: true,
        minlength: 8,
        password: true,
        equalTo: "#password",
      },
      terms: {
        required: true,
      },
      organizationType: "required",
    },
    messages: {
      password: {
        required: "Please enter a valid password.",
        minlength: "Please enter at least 8 characters.",
        password:
          "Your password must have a number and at least one uppercaseand and one lowercase character",
      },
      confirmPassword: {
        confirmPassword: "The password must be in the correct format.",
        required: "Please confirm your password.",
        minlength: "Please enter at least 8 characters.",
        equalTo: "The password have to match.",
        password: "Your password must have correct format",
      },
      terms: {
        required: "Please accept our terms and conditions.",
      },
    },
  });
}

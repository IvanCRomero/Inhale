/**
 * Function: Use Ajax plugin Validate Form
 * to set every required option easily to each
 * input for more information  go
 * https://jqueryvalidation.org/
 */
import { ContactFormData } from "../classes/contact.class.js";

export function validateContactForm() {
  $("#form").validate({
    submitHandler: function (form) {
      $(form).ajaxSubmit();
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
      name: {
        required: true,
        minlength: 3,
        maxlength: 40,
        noSpace: true,
      },
      email: {
        required: true,
        minlength: 3,
        maxLength: 40,
        noSpace: true,
      },
      number: {
        required: true,
        number: true,
        noSpace: true,
      },
      comment: {
        required: false,
      },
      termsConditions: {
        required: true,
      },
    },
    messages: {
      name: {
        noSpace: "Correct sintax but spaces are not allowed",
      },
      email: {
        noSpace: "Spaces are not allowed",
      },
      number: {
        noSpace: "Spaces are not allowed",
      },
      password: {
        required: "Please enter a valid password.",
        minlength: "Please enter at least 8 characters.",
        password:
          "Your password must have a number and at least one uppercaseand and one lowercase character",
      },
      termsConditions: {
        required: "Please accept our terms and conditions.",
      },
    },
  });
}

import { REG_RULES } from "../utils/regex.js";
import { URL } from "../utils/url.js";
import * as SignUp from "../layouts/signUpForm.js";
import * as LogIn from "../layouts/logInForm.js";
import * as Contact from "../layouts/contactForm.js";

/*Set constants will use in all file */
const INPUTS = document.querySelectorAll("#form input");
const BUTTONS = document.querySelectorAll(".form__buttons input");

/*Set main variables */
var currentURL = jQuery(location).attr("href");

/*Set event listeners to each const */
INPUTS.forEach((input) => {
  //Inputs Events:keyup, blur
  $(input).on("keyup", (element) => {
    //Stablish Keyup for constant toggle event
    validateInputForm(element);
  });
  $(input).on("blur", (element) => {
    //Stablish blur for constant toggle event
    validateInputForm(element);
  });
});
BUTTONS.forEach((input) => {
  //Buttons Events:change
  $(input).on("change", (element) => {
    $("input[name=organizationType]").parent().removeClass("selected");
    if (element.target.checked) {
      $("#" + element.target.id)
        .parent()
        .addClass("selected");
    }
  });
});

/*Custom Validation Methods JQuery Validators Plugin*/
$.validator.methods.password = function (value, element) {
  return this.optional(element) || REG_RULES.password.test(value);
};
$.validator.methods.number = function (value, element) {
  return this.optional(element) || REG_RULES.spainNumber.test(value);
};

($.validator.methods.noSpace = function (value, element) {
  return value == "" || value.trim().length != 0;
}),
  "Spaces are not allowed";

if (currentURL === URL.logIn) {
  LogIn.validateLogInForm();
} else if (currentURL === URL.signUp) {
  SignUp.validateSigUpForm();
} else if (currentURL === URL.contact) {
  Contact.validateContactForm();
}

function validateInputForm(e) {
  getCases(e);
}

function getCases(inCase) {
  const cases = {
    name: (value) => {
      toggleDisplay(REG_RULES.name, "name", value);
    },
    organizationName: (value) => {
      toggleDisplay(REG_RULES.name, "organizationName", value);
    },
    administratorName: (value) => {
      toggleDisplay(REG_RULES.name, "administratorName", value);
    },
    email: (value) => {
      toggleDisplay(REG_RULES.email, "email", value);
    },
    password: (value) => {
      toggleDisplay(REG_RULES.password, "password", value);
    },
    confirmPassword: (value) => {
      toggleDisplay(REG_RULES.password, "confirmPassword", value);
    },
    confirmPassword: (value) => {
      toggleDisplay(REG_RULES.password, "confirmPassword", value);
    },
    number: (value) => {
      toggleDisplay(REG_RULES.spainNumber, "number", value);
    },
  };
  return cases[inCase.target.id](inCase.target.value);

  function toggleDisplay(regex, element, value) {
    regex.test(value)
      ? ($(`#group__${element}`).removeClass("--incorrect"),
        $(`#group__${element}`).addClass("--correct"),
        $(`#group__${element} i`).removeClass("fa-times-circle"),
        $(`#group__${element} i`).addClass("fa-check-circle"))
      : ($(`#group__${element}`).addClass("--incorrect"),
        $(`#group__${element} i`).removeClass("fa-check-circle"),
        $(`#group__${element} i`).addClass("fa-times-circle"));
  }
}

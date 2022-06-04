/**
 *Cookies Module that Specifies some functions for manipulate cookies from js
 */

export function deleteCookie(name) {
  setCookie(name, "", 0);
}

export function setCookie(name, value, expires) {
  let date = new Date();
  date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
  let exp = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value};${exp}; path=/`;
}

export function getCookie(name) {
  let cookName = name + "=";
  let cookList = document.cookie.split(";");
  for (let index = 0; index < cookList.length; index++) {
    let element = cookList[index];
    while (element.charAt(0) == " ") {
      element = element.substring(1);
    }
    if (element.indexOf(name) == 0) {
      return element.substring(cookName.length, element.length);
    }
    return "";
  }
}

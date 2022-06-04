/**
 * Module that defines LoginFormData class to send to backend
 */
export class SignUpFormData {
  constructor(
    organizationName,
    adminName,
    email,
    password,
    confpassword,
    terms,
    selected
  ) {
    this._organizationName = organizationName;
    this._adminName = adminName;
    this._email = email;
    this._password = password;
    this._confPassword = confpassword;
    this._terms = terms;
    this._selected = selected;
  }
  set organizationName(organizationName) {
    this._organizationName = organizationName;
  }
  set adminName(adminName) {
    this._adminName = adminName;
  }
  set email(email) {
    this._email = email;
  }
  set password(password) {
    this._password = password;
  }
  set confpassword(confirmPassword) {
    this._confPassword = confirmPassword;
  }
  set terms(terms) {
    this._terms = terms;
  }
  set selected(selected) {
    this._selected = selected;
  }

  get organizationName() {
    return this._organizationName;
  }
  get adminName() {
    return this._adminName;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get confirmPassword() {
    return this._confPassword;
  }
  get terms() {
    return this._terms;
  }
  get selected() {
    return this._selected;
  }
}

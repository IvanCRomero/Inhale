/**
 * Module that defines LoginFormData class to send to backend
 */
export class ContactFormData {
  constructor(name, email, number, comment) {
    this._name = name;
    this._email = email;
    this._number = number;
    this._comment = comment;
  }
  set name(name) {
    this._name = name;
  }
  set email(email) {
    this._email = email;
  }
  set number(number) {
    this._number = number;
  }
  set comment(comment) {
    this._comment = comment;
  }

  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get number() {
    return this._number;
  }
  get comment() {
    return this._comment;
  }
}

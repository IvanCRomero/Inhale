/**
 * Module that defines LoginFormData class to send to backend
 */
export class LogInFormData {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }

  set email(email) {
    this._email = email;
  }

  set password(password) {
    this._password = password;
  }

  get email() {
    return this._password;
  }

  get password() {
    return this._password;
  }
}

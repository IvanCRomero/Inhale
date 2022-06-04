/**
 * This module defines some of regular expression
 */

// Define Regular expression
export const REG_RULES = {
  name: /^[A-Za-z\s]{3,}/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  characters: /^[A-Za-z0-9\s]+$/g,
  // Estandard Official: RFC 5322
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  spainNumber: /^\+?(6\d{2}|7[1-9]\d{1})\d{6}$/,
};

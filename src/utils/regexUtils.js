export const regexes = {
  address: /[\w`#/&'-]*/,
  name: /^[A-Za-z]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/,
  phone: /^(07[\d]{9})$/,
  postcode:
    /^((GIR 0AA|X9 9RB|X9 9AA|X9 9BF|X9 9AJ|X9 9AB|X9 9TA|X9 9LG|X9 9BH|X9 9LF|X9 2TR|XE16 4QZ|XE11 1AA|XE98 1TL|XEP O11|XE99 3GG|XE0 2AQ|XE1A 1AA|XE18 3AN|XE7 4GJ|XE1P 2PR|XE2 7EJ|XE12 8JS|XE1H 9DW|XE 5GG|XE1X 7XA|XE1X 7XF|XE1 8NH|XE1 1RJ|XE1 1RN|XE1 1LE|XE24 99X|XE 0AA|XE12 8HJ)|((([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2}))$/i,
};

export const isValidAddress = (value) => {
  const bool =
    value && !regexes.address.test(value)
      ? "Hmm. Can you double check your address? There might be a typo in there somewhere."
      : undefined;
  return bool;
};

export const isValidEmail = (value) => {
  const bool =
    value && !regexes.email.test(value)
      ? "Hmm. Can you double check your email address? There might be a typo in there somewhere."
      : undefined;
  return bool;
};

export const isValidPassword = (value) => {
  const bool =
    value && !regexes.password.test(value)
      ? "Please enter a capital, a small letter and a numeric field and total 6 chars long."
      : undefined;
  return undefined;
};

export const isValidName = (value) => {
  const bool =
    value && !regexes.name.test(value)
      ? "Name must contain only alphabets."
      : undefined;
  return bool;
};

export const isValidPostcode = (value) => {
  let formattedPostCode = value;
  const postCodeMatch = formattedPostCode
    .toUpperCase()
    .match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)\s*(\d[A-Z]{2})$/);
  if (postCodeMatch) {
    postCodeMatch.shift();
    formattedPostCode = postCodeMatch.join(" ");
  }
  const bool =
    formattedPostCode && !regexes.postcode.test(formattedPostCode)
      ? "This looks like an invalid postcode. Could you please check?"
      : undefined;
  return bool;
};

export const isValidPhone = (value) => {
  const bool =
    value && !regexes.phone.test(value)
      ? "The phone number looks incorrect. It should start with 0 and must have 11 digits"
      : undefined;
  return bool;
};

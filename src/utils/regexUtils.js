export const regexes = {
  name: /\b([A-Za-zÀ-ÿ][-,a-z. ']+[ ]*)+/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/,
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
  return bool;
};

export const isValidName = (value) => {
  console.log(regexes.name.test(value));
  const bool =
    value && !regexes.name.test(value)
      ? "Name must contain only alphabets."
      : undefined;
  return bool;
};

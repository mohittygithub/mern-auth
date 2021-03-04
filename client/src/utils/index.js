const JWT = "jwt";
const NAME = "name";
const EMAIL = "email";

export const login = (name, email, jwt) => {
  localStorage.setItem(JWT, jwt);
  localStorage.setItem(NAME, name);
  localStorage.setItem(EMAIL, email);
};

export const logout = () => {
  localStorage.removeItem(JWT);
};

export const isLogin = () => {
  if (localStorage.getItem(JWT)) return true;
  return false;
};

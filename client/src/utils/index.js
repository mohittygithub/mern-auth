const JWT = "jwt";
const USERID = "userId";
const NAME = "name";
const EMAIL = "email";

export const login = (name, email, jwt, id) => {
  localStorage.setItem(JWT, jwt);
  localStorage.setItem(USERID, id);
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

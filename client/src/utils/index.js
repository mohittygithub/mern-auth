const TOKEN = "jwt";

export const login = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN)) return true;
  return false;
};

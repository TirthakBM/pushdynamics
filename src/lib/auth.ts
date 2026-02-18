const TOKEN_KEY = "accessToken";
const USER_KEY = "authUser";

export const setToken = (token: string) => {
  sessionStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};

export const setUserToStorage = (user: any) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUserFromStorage = () => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const removeUserFromStorage = () => {
  localStorage.removeItem(USER_KEY);
};

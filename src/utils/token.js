import CookieUtil from "@/utils/CookieUtil.js";

export const setToken = (token) => {
  let d = new Date();
  d.setTime(d.getTime() + 180 * 24 * 60 * 60 * 1000);
  CookieUtil.set("TOKEN", token, d);
};

export const getToken = () => {
  return CookieUtil.get("TOKEN");
};

export const clearToken = () => {
  CookieUtil.unset("TOKEN");
};

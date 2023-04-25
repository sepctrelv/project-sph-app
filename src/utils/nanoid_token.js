import { nanoid } from "nanoid";

// 要生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getNanoID = () => {
  let nanoid_token = localStorage.getItem("GUEST_NANOID_TOKEN");
  if (!nanoid_token) {
    nanoid_token = nanoid();
    localStorage.setItem("GUEST_NANOID_TOKEN", nanoid_token);
  }
  return nanoid_token;
};

import axios from "axios";
export const savePassword = (password) => {
  const headers = generateHeaders(
    "POST",
    JSON.stringify({
      password: password,
      username: "default",
    })
  );
  axios("http://localhost:5000/auth", headers)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const generateHeaders = (method, body) => {
  return {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: body,
  };
};

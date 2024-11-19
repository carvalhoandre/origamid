import { apiUrl } from "../apiUrl";

export function authLogin(userName, password) {
  fetch(`${apiUrl}jwt-auth/v1/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  })
    .then((response) => {
      console.log(response);

      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
}

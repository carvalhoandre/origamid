import { API_URL } from "../api";

export async function fetchPostToken(body) {
  fetch(`${API_URL}/jwt-auth/v1/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function fetchPostValidateToken(token) {
  fetch(`${API_URL}/jwt-auth/v1/token/validate`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function fetchGetUser(token) {
  fetch(`${API_URL}/api/user`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

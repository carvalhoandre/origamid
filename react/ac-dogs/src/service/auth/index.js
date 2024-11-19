import { API_URL } from "../api";

export async function postToken(body) {
  fetch(`${API_URL}/jwt-auth/v1/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function getUser(token) {
  fetch(`${API_URL}/api/user`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

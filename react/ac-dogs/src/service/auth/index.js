import { API_URL } from "../api";

export async function fetchPostToken(body) {
  return fetch(`${API_URL}/jwt-auth/v1/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function fetchPostValidateToken(token) {
  return fetch(`${API_URL}/jwt-auth/v1/token/validate`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function fetchGetUser(token) {
  return fetch(`${API_URL}/api/user`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function fetchPostUser(body) {
  return fetch(`${API_URL}/api/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export function USER_POST(body) {
  return {
    url: API_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function LOST_PASSWORD(body) {
  return {
    url: API_URL + "/api/passowrd/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

import { API_URL } from "../api";

export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

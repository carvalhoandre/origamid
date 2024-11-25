import { API_URL } from "../api";

export function STATS_GET() {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: "GET",
    },
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token"),
    },
  };
}

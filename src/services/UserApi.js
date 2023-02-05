import api from "./Api";

export async function signUp({ name, email, password }) {
  const response = await api.post("/user", { name, email, password });
  return response.data;
}

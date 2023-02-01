import api from "./Api";

export async function signUp({ name, email, password }) {
  console.log(name, email, password);
  const response = await api.post("/user", { name, email, password });
  console.log(response);
  return response.data;
}

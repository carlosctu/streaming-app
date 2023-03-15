import api from "./Api";
import { EmailAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import 'firebase/auth'
import { auth } from "./firebase/FirebaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
export async function signUp({ name, email, password }) {
  console.log(email)
  console.log(password)
  useCreateUserWithEmailAndPassword(auth, {
    name: name,
    email: email,
    password: password,
  })
  const response = await api.post("/user", { name, email, password });
  return response.data;
}

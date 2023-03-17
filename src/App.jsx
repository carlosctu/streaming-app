import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AnimePage from "./pages/AnimePage/AnimePage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { UserContext } from "./services/context/UserContext";
import { useState } from "react";
import { AuthContextProvider } from "./services/firebase/AuthContext";

export function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContextProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/animePage" element={<AnimePage />} />
          </Routes>
        </Router>
        <ToastContainer />
      </ UserContext.Provider >
    </AuthContextProvider>
  )
}


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AnimePage from "./pages/AnimePage/AnimePage";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/animePage" element={<AnimePage />} />
        </Routes>
      </Router>
    </>
  );
}


import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FormSignIn from "./components/Forms/FormSignIn";
import FormSignUp from "./components/Forms/FormSignUp";
import Header from "./components/Header";
import NotFoundPath from "./components/NotFoundPath";

function App() {
  let navigate = useNavigate();
  let location = useLocation();
    useEffect(() => {
    if (location.key === 'default' && location.pathname === '/') {
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    }
  },[location, navigate]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: "center", fontSize: "2rem" }}>Home</div>
          }
        />
        <Route path="/signin" element={<FormSignIn />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="*" element={<NotFoundPath />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import FormSignIn from "./components/Forms/FormSignIn";
import FormSignUp from "./components/Forms/FormSignUp";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<span>Home</span>} />
        <Route path="/signin" element={<FormSignIn />} />
        <Route path="/signup" element={<FormSignUp />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import FormSignIn from "./components/Forms/FormSignIn";
import FormSignUp from "./components/Forms/FormSignUp";
import Header from "./components/Header";
import NotFoundPath from "./components/NotFoundPath";
import { Navigate, useLocation} from "react-router-dom";


function App() {
   
 
 
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<span></span>} />
        <Route path="/signin" element={<FormSignIn />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route path="*" element={<NotFoundPath />} />
      </Routes>
    </>
  );
}

export default App;

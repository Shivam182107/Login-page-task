import { Route, Routes } from "react-router";
import "./App.css";
import UserLogin from "./UserLogin";
import UserSignup from "./UserSignup";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<UserLogin />}/>
      <Route path="/user/register" element={<UserSignup />}/>
    </Routes>
      
    </>
  );
}

export default App;

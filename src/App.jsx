import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import VerifySuccess from "./pages/VerifySuccess";



function App() {
  return (
    <BrowserRouter>


      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/verify-success" element={<VerifySuccess />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
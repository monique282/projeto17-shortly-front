
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Today from "./Pages/Today.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/today' element={<Today />} />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};
